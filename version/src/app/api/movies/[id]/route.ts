import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getMovieDetails, TmdbError } from "@/lib/tmdb";

/** Full movie details (including cast + director) for a single movie. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const movieId = Number(id);
  if (!Number.isInteger(movieId) || movieId <= 0) {
    return NextResponse.json({ error: "Invalid movie id" }, { status: 400 });
  }

  try {
    const movie = await getMovieDetails(movieId);
    return NextResponse.json({ movie });
  } catch (err) {
    if (err instanceof TmdbError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    return NextResponse.json(
      { error: "Failed to load movie" },
      { status: 500 },
    );
  }
}
