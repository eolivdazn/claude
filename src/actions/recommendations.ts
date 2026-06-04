"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { generateRecommendations } from "@/lib/recommendation";
import type { MovieSnapshot } from "@/types";
import { REQUIRED_LIKES } from "@/lib/constants";

/**
 * Run the recommendation engine for the current user and persist the result,
 * replacing any previous recommendation set. Returns the number generated.
 */
export async function refreshRecommendations(): Promise<number> {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");
  const userId = session.user.id;

  // Load catalog in parallel but cap it — the full catalog can be huge.
  // Failure to load it is non-fatal; user swipe data drives recommendations.
  const [prefs, catalogRows] = await Promise.all([
    prisma.moviePreference.findMany({
      where: { userId },
      select: { movieId: true, liked: true, movieData: true },
    }),
    prisma.globalCatalog
      .findMany({
        orderBy: { rating: "desc" },
        take: 150,
        select: { movieData: true, rating: true },
      })
      .catch(() => []),
  ]);

  const liked = prefs
    .filter((p) => p.liked)
    .map((p) => p.movieData as unknown as MovieSnapshot);
  const disliked = prefs
    .filter((p) => !p.liked)
    .map((p) => p.movieData as unknown as MovieSnapshot);
  const swipedIds = prefs.map((p) => p.movieId);

  const globalCatalog: MovieSnapshot[] = catalogRows.map((r) => ({
    ...(r.movieData as unknown as MovieSnapshot),
    userRating: r.rating,
  }));

  if (liked.length < REQUIRED_LIKES) {
    throw new Error(
      "Like at least a few movies in Discover before generating recommendations.",
    );
  }

  // Rank the top matches; the UI shows one at a time ("Show another").
  const scored = await generateRecommendations(liked, disliked, globalCatalog, swipedIds, 10);

  // Replace the previous set atomically.
  await prisma.$transaction([
    prisma.recommendation.deleteMany({ where: { userId } }),
    prisma.recommendation.createMany({
      data: scored.map((s) => ({
        userId,
        movieId: s.movieId,
        score: s.score,
        reasons: s.reasons,
        movieData: s.movie as unknown as object,
      })),
    }),
  ]);

  revalidatePath("/recommendations");
  revalidatePath("/dashboard");

  return scored.length;
}
