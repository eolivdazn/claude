"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import type { MovieCard, MovieSnapshot } from "@/types";
import { SwipeCard, type SwipeDirection } from "@/components/SwipeCard";
import { MovieCardContent } from "@/components/MovieCardContent";
import { ActionButtons } from "@/components/ActionButtons";
import { SwipeCardSkeleton } from "@/components/Skeleton";
import { ErrorState } from "@/components/ErrorState";
import { EmptyState } from "@/components/EmptyState";
import { recordSwipe } from "@/actions/preferences";

function toSnapshot(m: MovieCard): MovieSnapshot {
  return {
    id: m.id,
    title: m.title,
    year: m.year,
    posterUrl: m.posterUrl,
    genres: m.genres,
    cast: m.cast,
    director: m.director,
    popularity: m.popularity,
  };
}

type Status = "loading" | "ready" | "error";

export function SwipeDeck({
  initialRatedCount = 0,
}: {
  initialRatedCount?: number;
}) {
  const [queue, setQueue] = useState<MovieCard[]>([]);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const [ratedCount, setRatedCount] = useState(initialRatedCount);
  const [flyOut, setFlyOut] = useState<SwipeDirection | null>(null);
  const nextPageRef = useRef(1);

  const loadMovies = useCallback(async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`/api/movies/discover?page=${nextPageRef.current}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to load movies");
      }
      const data = (await res.json()) as {
        movies: MovieCard[];
        nextPage: number;
      };
      nextPageRef.current = data.nextPage ?? nextPageRef.current + 1;
      setQueue(data.movies);
      setIndex(0);
      setStatus("ready");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to load movies");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    void loadMovies();
  }, [loadMovies]);

  const current = queue[index];
  const next = queue[index + 1];

  const handleSwipe = useCallback(
    async (direction: SwipeDirection) => {
      const movie = queue[index];
      setFlyOut(null);
      if (!movie) return;

      // Advance the visible deck immediately for snappy UX.
      setIndex((i) => i + 1);

      try {
        const result = await recordSwipe(
          toSnapshot(movie),
          direction === "right",
        );
        setRatedCount(result.totalRated);
      } catch {
        // Non-fatal: keep swiping even if a single write fails.
      }

      // Prefetch the next page when nearing the end of the queue.
      if (index + 2 >= queue.length) {
        void loadMovies();
      }
    },
    [queue, index, loadMovies],
  );

  if (status === "loading") {
    return (
      <div className="mx-auto w-full max-w-sm">
        <SwipeCardSkeleton />
      </div>
    );
  }

  if (status === "error") {
    return (
      <ErrorState
        title="Couldn't load movies"
        description={errorMsg}
        onRetry={() => void loadMovies()}
      />
    );
  }

  if (!current) {
    return (
      <EmptyState
        icon="🎉"
        title="You've seen them all"
        description="Check back later for fresh picks, or head to your recommendations."
        action={{ label: "View recommendations", href: "/recommendations" }}
      />
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-6">
      {/* Swiping fine-tunes your profile; recommendations come from it. */}
      <div className="flex w-full items-center justify-between text-xs text-[var(--color-muted)]">
        <span>{ratedCount} rated</span>
        <Link
          href="/recommendations"
          className="font-medium text-[var(--color-primary)] hover:underline"
        >
          See your pick →
        </Link>
      </div>

      {/* Card stack: a static scaled "next" card behind the interactive top card. */}
      <div className="relative aspect-[2/3] w-full">
        {next && (
          <div
            key={next.id}
            className="absolute inset-0 scale-95 translate-y-4"
            aria-hidden
          >
            <MovieCardContent movie={next} />
          </div>
        )}
        <AnimatePresence>
          <SwipeCard
            key={current.id}
            movie={current}
            isTop
            flyOut={flyOut}
            onSwipe={handleSwipe}
          />
        </AnimatePresence>
      </div>

      <ActionButtons
        onDislike={() => setFlyOut("left")}
        onLike={() => setFlyOut("right")}
        disabled={!!flyOut}
      />
    </div>
  );
}
