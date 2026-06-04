import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  TmdbError,
} from "@/lib/tmdb";
import type { MovieCard } from "@/types";

export const dynamic = "force-dynamic";

// Each source has 500 TMDB pages. We encode the source in the page param:
// pages 1–500   → popular
// pages 501–1000 → top-rated
// pages 1001–1500 → trending (wraps back to 1 if exhausted)
const SOURCE_SIZE = 500;

function decodeSource(globalPage: number): {
  fetcher: (page: number) => Promise<MovieCard[]>;
  localPage: number;
} {
  if (globalPage <= SOURCE_SIZE) {
    return { fetcher: getPopularMovies, localPage: globalPage };
  }
  if (globalPage <= SOURCE_SIZE * 2) {
    return { fetcher: getTopRatedMovies, localPage: globalPage - SOURCE_SIZE };
  }
  // Trending — wrap if needed
  const localPage = ((globalPage - SOURCE_SIZE * 2 - 1) % SOURCE_SIZE) + 1;
  return { fetcher: getTrendingMovies, localPage };
}

/**
 * Returns a queue of unseen movies cycling through popular → top-rated →
 * trending so the deck never permanently runs dry.
 */
export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const startPage = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);

  try {
    const swiped = await prisma.moviePreference.findMany({
      where: { userId: session.user.id },
      select: { movieId: true },
    });
    const swipedIds = new Set(swiped.map((s) => s.movieId));

    const queue: MovieCard[] = [];
    let page = startPage;
    const MAX_PAGES = startPage + 5;

    while (queue.length < 10 && page < MAX_PAGES) {
      const { fetcher, localPage } = decodeSource(page);
      const movies = await fetcher(localPage).catch(() => []);
      for (const m of movies) {
        if (!swipedIds.has(m.id)) queue.push(m);
      }
      page += 1;
    }

    return NextResponse.json({ movies: queue.slice(0, 12), nextPage: page });
  } catch (err) {
    if (err instanceof TmdbError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status === 401 ? 502 : err.status },
      );
    }
    return NextResponse.json(
      { error: "Failed to load movies" },
      { status: 500 },
    );
  }
}
