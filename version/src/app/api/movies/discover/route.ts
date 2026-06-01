import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getPopularMovies, TmdbError } from "@/lib/tmdb";

export const dynamic = "force-dynamic";

/**
 * Returns a queue of popular movies the user has not yet swiped on.
 * Walks a few TMDB pages if needed to fill the queue.
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

    const queue: Awaited<ReturnType<typeof getPopularMovies>> = [];
    let page = startPage;
    const MAX_PAGES = startPage + 3;

    while (queue.length < 10 && page < MAX_PAGES) {
      const movies = await getPopularMovies(page);
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
