import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import type { MovieSnapshot } from "@/types";
import { DashboardStats, type DashboardData } from "@/components/DashboardStats";
import { topEntries } from "@/lib/utils";

export const metadata = { title: "Your Stats — Movie Match" };
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [prefs, recs] = await Promise.all([
    prisma.moviePreference.findMany({
      where: { userId },
      select: { liked: true, movieData: true },
    }),
    prisma.recommendation.findMany({
      where: { userId },
      orderBy: { score: "desc" },
      select: { id: true, score: true, createdAt: true, movieData: true },
    }),
  ]);

  const genreCounts = new Map<string, number>();
  const actorCounts = new Map<string, number>();
  const directorCounts = new Map<string, number>();
  let totalLikes = 0;
  let totalDislikes = 0;

  for (const p of prefs) {
    if (p.liked) totalLikes += 1;
    else {
      totalDislikes += 1;
      continue; // only aggregate taste from liked movies
    }
    const movie = p.movieData as unknown as MovieSnapshot;
    for (const g of movie.genres ?? [])
      genreCounts.set(g.name, (genreCounts.get(g.name) ?? 0) + 1);
    for (const a of movie.cast ?? [])
      actorCounts.set(a.name, (actorCounts.get(a.name) ?? 0) + 1);
    if (movie.director)
      directorCounts.set(
        movie.director.name,
        (directorCounts.get(movie.director.name) ?? 0) + 1,
      );
  }

  const data: DashboardData = {
    totalLikes,
    totalDislikes,
    favoriteGenres: topEntries(genreCounts, 8).map((e) => ({
      name: e.key,
      count: e.count,
    })),
    favoriteActors: topEntries(actorCounts, 8).map((e) => ({
      name: e.key,
      count: e.count,
    })),
    favoriteDirectors: topEntries(directorCounts, 6).map((e) => ({
      name: e.key,
      count: e.count,
    })),
    recommendationHistory: recs.map((r) => ({
      id: r.id,
      score: r.score,
      createdAt: r.createdAt,
      movie: r.movieData as unknown as MovieSnapshot,
    })),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Your taste profile
        </h1>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          A snapshot of what you love.
        </p>
      </div>
      <DashboardStats data={data} />
    </div>
  );
}
