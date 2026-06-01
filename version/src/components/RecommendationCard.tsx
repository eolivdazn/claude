import Image from "next/image";
import type { MovieSnapshot } from "@/types";
import { formatScore } from "@/lib/utils";

export function RecommendationCard({
  rank,
  score,
  reasons,
  movie,
}: {
  rank: number;
  score: number;
  reasons: string[];
  movie: MovieSnapshot;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:border-[var(--color-primary)]/60">
      <div className="relative aspect-[2/3] w-full bg-[var(--color-surface-2)]">
        {movie.posterUrl ? (
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, 240px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl">
            🎬
          </div>
        )}
        <div className="absolute left-3 top-3 rounded-full bg-[var(--color-primary)] px-2.5 py-1 text-xs font-bold text-white">
          #{rank}
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          Match {formatScore(score)}
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-semibold leading-tight text-white">
            {movie.title}
          </h3>
          <p className="text-xs text-[var(--color-muted)]">{movie.year}</p>
        </div>

        <ul className="space-y-1.5">
          {reasons.map((reason, i) => (
            <li
              key={i}
              className="flex gap-2 text-xs leading-snug text-white/75"
            >
              <span className="mt-0.5 text-[var(--color-primary)]">✦</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
