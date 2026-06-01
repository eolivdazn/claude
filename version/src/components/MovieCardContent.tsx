import Image from "next/image";
import type { MovieCard } from "@/types";

/** Visual content of a movie card (poster + metadata). Pointer-events
 *  are disabled so drag gestures pass through to the parent. */
export function MovieCardContent({ movie }: { movie: MovieCard }) {
  return (
    <div className="pointer-events-none flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="relative aspect-[2/3] w-full shrink-0 bg-[var(--color-surface-2)]">
        {movie.posterUrl ? (
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
            priority
            draggable={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            🎬
          </div>
        )}

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur">
          ★ {movie.rating.toFixed(1)}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
          <h2 className="text-xl font-bold leading-tight text-white">
            {movie.title}
          </h2>
          <p className="mt-0.5 text-sm text-white/70">{movie.year}</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-4 no-scrollbar">
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

        <p className="text-sm leading-relaxed text-white/80 line-clamp-4">
          {movie.overview || "No overview available."}
        </p>

        {movie.director && (
          <p className="text-xs text-[var(--color-muted)]">
            <span className="text-white/60">Director:</span>{" "}
            {movie.director.name}
          </p>
        )}

        {movie.cast.length > 0 && (
          <p className="text-xs text-[var(--color-muted)]">
            <span className="text-white/60">Cast:</span>{" "}
            {movie.cast.map((c) => c.name).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
