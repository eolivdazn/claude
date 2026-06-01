"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import type { MovieSnapshot } from "@/types";
import { REQUIRED_RATINGS } from "@/lib/constants";

interface SwipeResult {
  totalRated: number;
  readyForRecommendations: boolean;
}

/**
 * Record a like/dislike for a movie. Stores a snapshot of the movie so the
 * recommendation engine and dashboard never need to re-query TMDB.
 * Idempotent per (user, movie): a repeated swipe updates the existing row.
 */
export async function recordSwipe(
  snapshot: MovieSnapshot,
  liked: boolean,
): Promise<SwipeResult> {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not authenticated");
  }
  const userId = session.user.id;

  await prisma.moviePreference.upsert({
    where: { userId_movieId: { userId, movieId: snapshot.id } },
    create: {
      userId,
      movieId: snapshot.id,
      liked,
      // Prisma's Json input type doesn't accept our interface directly.
      movieData: snapshot as unknown as object,
    },
    update: {
      liked,
      movieData: snapshot as unknown as object,
    },
  });

  const totalRated = await prisma.moviePreference.count({ where: { userId } });

  revalidatePath("/dashboard");

  return {
    totalRated,
    readyForRecommendations: totalRated >= REQUIRED_RATINGS,
  };
}

/** How many movies the current user has rated so far. */
export async function getRatedCount(): Promise<number> {
  const session = await auth();
  if (!session?.user?.id) return 0;
  return prisma.moviePreference.count({ where: { userId: session.user.id } });
}
