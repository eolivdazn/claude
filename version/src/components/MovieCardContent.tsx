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

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 pt-16">
          <h2 className="text-xl font-bold leading-tight text-white">
            {movie.title}
          </h2>
          <p className="mt-0.5 text-sm text-white/60">{movie.year}</p>

          {movie.director && (
            <p className="mt-1.5 text-xs text-white/80">
              <span className="text-white/50">Dir. </span>
              {movie.director.name}
            </p>
          )}

          {movie.cast.length > 0 && (
            <p className="mt-0.5 text-xs text-white/60 line-clamp-1">
              {movie.cast.slice(0, 3).map((c) => c.name).join(" · ")}
            </p>
          )}

          {movie.genres.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {movie.genres.slice(0, 3).map((g) => (
                <span
                  key={g.id}
                  className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white/80"
                >
                  {g.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        <p className="text-sm leading-relaxed text-white/80 line-clamp-4">
          {movie.overview || "No overview available."}
        </p>
      </div>
    </div>
  );
}
