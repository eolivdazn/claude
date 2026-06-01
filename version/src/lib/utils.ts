export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export function posterUrl(path: string | null, size = "w500"): string | null {
  return path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null;
}

export function backdropUrl(path: string | null, size = "w1280"): string | null {
  return path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null;
}

export function yearFromDate(date: string | null | undefined): string {
  if (!date) return "—";
  const y = date.slice(0, 4);
  return y || "—";
}

/** Tailwind-friendly className combiner. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a 0–100+ engine score for display. */
export function formatScore(score: number): string {
  return Math.round(score).toString();
}

/** Return the top N entries of a frequency map, highest count first. */
export function topEntries<T extends string | number>(
  map: Map<T, number>,
  n: number,
): { key: T; count: number }[] {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([key, count]) => ({ key, count }));
}
