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
  initialLikedCount = 0,
  requiredLikes = 3,
}: {
  initialRatedCount?: number;
  initialLikedCount?: number;
  requiredLikes?: number;
}) {
  const [queue, setQueue] = useState<MovieCard[]>([]);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const [ratedCount, setRatedCount] = useState(initialRatedCount);
  const [likedCount, setLikedCount] = useState(initialLikedCount);
  const [likedBaseline, setLikedBaseline] = useState(initialLikedCount);
  const [flyOut, setFlyOut] = useState<SwipeDirection | null>(null);
  const nextPageRef = useRef(1);

  // Read the checkpoint written by the recommendations page so progress
  // resets after each visit rather than counting all-time likes.
  useEffect(() => {
    const stored = localStorage.getItem("likedCountBaseline");
    if (stored !== null) {
      setLikedBaseline(Math.min(parseInt(stored, 10), initialLikedCount));
    }
  }, [initialLikedCount]);

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

      setIndex((i) => i + 1);

      try {
        const result = await recordSwipe(
          toSnapshot(movie),
          direction === "right",
        );
        setRatedCount(result.totalRated);
        setLikedCount(result.likedCount);
      } catch {
        // Non-fatal: keep swiping even if a single write fails.
      }

      // After a dislike, push same-genre cards to the back so the user
      // gets immediate variety. queue[index+1] is already on screen, so
      // we only reorder from index+2 onwards to avoid a visible flicker.
      if (direction === "left") {
        const dislikedGenres = new Set(movie.genres.map((g) => g.id));
        const visibleUpTo = index + 2;
        const rest = queue.slice(visibleUpTo);
        const different = rest.filter((m) => !m.genres.some((g) => dislikedGenres.has(g.id)));
        const sameGenre = rest.filter((m) => m.genres.some((g) => dislikedGenres.has(g.id)));
        if (sameGenre.length > 0) {
          setQueue([...queue.slice(0, visibleUpTo), ...different, ...sameGenre]);
          if (different.length < 3) void loadMovies();
          return;
        }
      }

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
      {(() => {
        const likedSince = Math.max(0, likedCount - likedBaseline);
        if (likedSince >= requiredLikes) {
          return (
            <Link
              href="/recommendations"
              className="flex w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              ✨ Your pick is ready — see it now
            </Link>
          );
        }
        return (
          <div className="w-full space-y-1">
            <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
              <span>{ratedCount} rated</span>
              <span>{likedSince}/{requiredLikes} likes for a new pick</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[var(--color-primary)] transition-all"
                style={{ width: `${Math.min(100, (likedSince / requiredLikes) * 100)}%` }}
              />
            </div>
          </div>
        );
      })()}

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
