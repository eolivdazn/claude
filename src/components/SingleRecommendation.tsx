"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { MovieSnapshot } from "@/types";
import { formatScore } from "@/lib/utils";

export interface RankedPick {
  id: string;
  score: number;
  reasons: string[];
  movie: MovieSnapshot;
}

/**
 * Shows a single recommended movie (the current best match) with controls to
 * step through the next-best picks one at a time.
 */
export function SingleRecommendation({ picks }: { picks: RankedPick[] }) {
  const [index, setIndex] = useState(0);

  const pick = picks[index];
  if (!pick) return null;

  const { movie, score, reasons } = pick;
  const hasMore = picks.length > 1;

  return (
    <div className="space-y-5">
      <AnimatePresence mode="wait">
        <motion.article
          key={pick.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] sm:flex"
        >
          <div className="relative aspect-[2/3] w-full shrink-0 bg-[var(--color-surface-2)] sm:w-64">
            {movie.posterUrl ? (
              <Image
                src={movie.posterUrl}
                alt={movie.title}
                fill
                sizes="(max-width: 640px) 100vw, 256px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-5xl">
                🎬
              </div>
            )}
            <div className="absolute left-3 top-3 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">
              Top match
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 p-6">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 text-xs font-semibold text-[var(--color-primary)]">
                  Match {formatScore(score)}
                </span>
                {hasMore && (
                  <span className="text-xs text-[var(--color-muted)]">
                    Pick {index + 1} of {picks.length}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold leading-tight text-white">
                {movie.title}
              </h2>
              <p className="text-sm text-[var(--color-muted)]">{movie.year}</p>
            </div>

            {movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
            )}

            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">
                Why we picked this
              </h3>
              <ul className="space-y-1.5">
                {reasons.map((reason, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-snug text-white/80"
                  >
                    <span className="mt-0.5 text-[var(--color-primary)]">
                      ✦
                    </span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {movie.director && (
              <p className="text-xs text-[var(--color-muted)]">
                <span className="text-white/60">Director:</span>{" "}
                {movie.director.name}
              </p>
            )}
          </div>
        </motion.article>
      </AnimatePresence>

      {hasMore && (
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setIndex((i) => (i + 1) % picks.length)}
            className="rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
          >
            Show another
          </button>
          {index > 0 && (
            <button
              onClick={() => setIndex(0)}
              className="rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-surface-2)]"
            >
              Back to top pick
            </button>
          )}
        </div>
      )}
    </div>
  );
}
