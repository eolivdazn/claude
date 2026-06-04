/**
 * Import a Letterboxd ratings.csv export into the global catalog.
 * The catalog is shared across all users and drives the recommendation
 * engine as a baseline taste signal — no user account needed.
 *
 * Usage:
 *   npm run import:letterboxd
 *
 * Requires DATABASE_URL, PRISMA_DATABASE_URL, and TMDB_API_KEY (loaded from .env).
 */
import { prisma } from "@/lib/prisma";
import { readLetterboxdRatings, letterboxdCsvPath } from "@/lib/letterboxd";
import {
  findMovieByTitleYear,
  getMovieDetails,
  toMovieSnapshot,
} from "@/lib/tmdb";
import type { MovieSnapshot } from "@/types";

const MIN_RATING = 3.5;
const CONCURRENCY = 6;

/** Run an async mapper over items with a bounded concurrency pool. */
async function mapPool<T, R>(
  items: T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
  return results;
}

async function main() {
  console.log(`Reading: ${letterboxdCsvPath()}`);

  const ratings = await readLetterboxdRatings(MIN_RATING);
  console.log(
    `Found ${ratings.length} films rated >= ${MIN_RATING}. Resolving on TMDB…`,
  );

  let resolved = 0;
  let unresolved = 0;

  const snapshots = await mapPool(ratings, CONCURRENCY, async (r, i) => {
    try {
      const id = await findMovieByTitleYear(r.name, r.year);
      if (!id) {
        unresolved++;
        return null;
      }
      const card = await getMovieDetails(id);
      resolved++;
      if ((i + 1) % 25 === 0) {
        console.log(`  …processed ${i + 1}/${ratings.length}`);
      }
      const snapshot: MovieSnapshot = {
        ...toMovieSnapshot(card),
        userRating: r.rating,
      };
      return snapshot;
    } catch (err) {
      unresolved++;
      console.warn(`  ! failed: ${r.name} (${r.year ?? "?"}) — ${String(err)}`);
      return null;
    }
  });

  const valid = snapshots.filter((s): s is MovieSnapshot => s !== null);

  // De-duplicate by TMDB id, keeping the highest rating.
  const byId = new Map<number, MovieSnapshot>();
  for (const s of valid) {
    const existing = byId.get(s.id);
    if (!existing || (s.userRating ?? 0) > (existing.userRating ?? 0)) {
      byId.set(s.id, s);
    }
  }

  console.log(
    `Resolved ${resolved}, unresolved ${unresolved}, unique ${byId.size}. Writing to global catalog…`,
  );

  let written = 0;
  for (const snapshot of byId.values()) {
    await prisma.globalCatalog.upsert({
      where: { movieId: snapshot.id },
      create: {
        movieId: snapshot.id,
        movieData: snapshot as unknown as object,
        rating: snapshot.userRating ?? MIN_RATING,
      },
      update: {
        movieData: snapshot as unknown as object,
        rating: snapshot.userRating ?? MIN_RATING,
      },
    });
    written++;
  }

  console.log(`✅ Imported ${written} movies into the global catalog.`);
  console.log("All users will now benefit from this catalog in recommendations.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
