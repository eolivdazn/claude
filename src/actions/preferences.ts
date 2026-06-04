"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import type { MovieSnapshot } from "@/types";
import { REQUIRED_LIKES } from "@/lib/constants";

interface SwipeResult {
  totalRated: number;
  likedCount: number;
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

  const [totalRated, likedCount] = await Promise.all([
    prisma.moviePreference.count({ where: { userId } }),
    prisma.moviePreference.count({ where: { userId, liked: true } }),
  ]);

  revalidatePath("/dashboard");

  return {
    totalRated,
    likedCount,
    readyForRecommendations: likedCount >= REQUIRED_LIKES,
  };
}

/** How many movies the current user has rated and liked so far. */
export async function getRatedCount(): Promise<{ totalRated: number; likedCount: number }> {
  const session = await auth();
  if (!session?.user?.id) return { totalRated: 0, likedCount: 0 };
  const userId = session.user.id;
  const [totalRated, likedCount] = await Promise.all([
    prisma.moviePreference.count({ where: { userId } }),
    prisma.moviePreference.count({ where: { userId, liked: true } }),
  ]);
  return { totalRated, likedCount };
}
