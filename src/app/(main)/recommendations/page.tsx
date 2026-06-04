import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { summarizeTaste } from "@/lib/recommendation";
import type { MovieSnapshot } from "@/types";
import {
  SingleRecommendation,
  type RankedPick,
} from "@/components/SingleRecommendation";
import { RegenerateButton } from "@/components/RegenerateButton";
import { EmptyState } from "@/components/EmptyState";
import { LikedCountCheckpoint } from "@/components/LikedCountCheckpoint";

export const metadata = { title: "For You — Movie Match" };
export const dynamic = "force-dynamic";

export default async function RecommendationsPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [recommendations, likedPrefs] = await Promise.all([
    prisma.recommendation.findMany({
      where: { userId },
      orderBy: { score: "desc" },
    }),
    prisma.moviePreference.findMany({
      where: { userId, liked: true },
      select: { movieData: true },
    }),
  ]);

  const likedCount = likedPrefs.length;

  // No personal likes yet — nudge toward Discover.
  if (likedCount === 0) {
    return (
      <>
        <LikedCountCheckpoint likedCount={likedCount} />
        <EmptyState
          icon="🎬"
          title="Like a movie to personalise your pick"
          description="Head to Discover and swipe right on something you enjoy. The more you like, the more tailored your recommendation becomes."
          action={{ label: "Go to Discover", href: "/discover" }}
        />
      </>
    );
  }

  // Profile exists but no recommendation generated yet.
  if (recommendations.length === 0) {
    return (
      <div className="space-y-6">
        <LikedCountCheckpoint likedCount={likedCount} />
        <EmptyState
          icon="✨"
          title="Ready when you are"
          description={`Your profile is built from ${likedCount} liked movie${
            likedCount === 1 ? "" : "s"
          }. Generate your single best match.`}
        />
        <div className="flex justify-center">
          <RegenerateButton label="Find my movie" />
        </div>
      </div>
    );
  }

  const liked = likedPrefs.map((p) => p.movieData as unknown as MovieSnapshot);
  const taste = summarizeTaste(liked);

  const picks: RankedPick[] = recommendations.map((rec) => ({
    id: rec.id,
    score: rec.score,
    reasons: rec.reasons,
    movie: rec.movieData as unknown as MovieSnapshot,
  }));

  return (
    <div className="space-y-6">
      <LikedCountCheckpoint likedCount={likedCount} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Your movie for tonight
          </h1>
          <p className="mt-1 max-w-md text-sm text-[var(--color-muted)]">
            {taste}
          </p>
        </div>
        <RegenerateButton />
      </div>

      <SingleRecommendation picks={picks} />
    </div>
  );
}
