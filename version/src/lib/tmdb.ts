import "server-only";
import type {
  MovieCard,
  MovieSnapshot,
  TmdbCredits,
  TmdbGenre,
  TmdbMovie,
  TmdbMovieDetails,
} from "@/types";
import { posterUrl, backdropUrl, yearFromDate } from "@/lib/utils";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

// Cache durations (seconds). TMDB data is fairly static, so cache generously.
const ONE_HOUR = 60 * 60;
const ONE_DAY = 60 * 60 * 24;

class TmdbError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "TmdbError";
  }
}

/**
 * Low-level TMDB fetch with Next.js data-cache integration.
 * Throws TmdbError on non-2xx responses so callers/UI can handle it.
 */
async function tmdbFetch<T>(
  path: string,
  params: Record<string, string | number | undefined> = {},
  revalidate: number = ONE_HOUR,
): Promise<T> {
  if (!API_KEY || API_KEY.startsWith("REPLACE")) {
    throw new TmdbError(
      "TMDB_API_KEY is not configured. Add a valid key to .env.",
      500,
    );
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "en-US");
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const res = await fetch(url.toString(), {
    next: { revalidate },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new TmdbError(
      `TMDB request failed (${res.status}) for ${path}`,
      res.status,
    );
  }

  return (await res.json()) as T;
}

// ---------------------------------------------------------------------------
// Genre map (id <-> name), fetched once and memoized for the process lifetime.
// ---------------------------------------------------------------------------

let genreMapPromise: Promise<Map<number, string>> | null = null;

export async function getGenreMap(): Promise<Map<number, string>> {
  if (!genreMapPromise) {
    genreMapPromise = tmdbFetch<{ genres: TmdbGenre[] }>(
      "/genre/movie/list",
      {},
      ONE_DAY,
    )
      .then((data) => new Map(data.genres.map((g) => [g.id, g.name])))
      .catch((err) => {
        // Reset so a transient failure doesn't permanently poison the cache.
        genreMapPromise = null;
        throw err;
      });
  }
  return genreMapPromise;
}

// ---------------------------------------------------------------------------
// Person id lookup with a small in-memory LRU-ish cache.
// ---------------------------------------------------------------------------

const personIdCache = new Map<string, number | null>();

export async function getPersonId(name: string): Promise<number | null> {
  const key = name.trim().toLowerCase();
  if (personIdCache.has(key)) return personIdCache.get(key)!;

  try {
    const data = await tmdbFetch<{ results: { id: number }[] }>(
      "/search/person",
      { query: name },
      ONE_DAY,
    );
    const id = data.results[0]?.id ?? null;
    // Bound the cache.
    if (personIdCache.size > 200) personIdCache.clear();
    personIdCache.set(key, id);
    return id;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Normalization helpers
// ---------------------------------------------------------------------------

function directorFromCredits(credits: TmdbCredits | undefined) {
  const d = credits?.crew?.find((c) => c.job === "Director");
  return d ? { id: d.id, name: d.name } : null;
}

function topCast(credits: TmdbCredits | undefined, n = 5) {
  return (credits?.cast ?? [])
    .slice()
    .sort((a, b) => a.order - b.order)
    .slice(0, n)
    .map((c) => ({ id: c.id, name: c.name }));
}

export async function toMovieCard(
  details: TmdbMovieDetails,
): Promise<MovieCard> {
  return {
    id: details.id,
    title: details.title,
    year: yearFromDate(details.release_date),
    overview: details.overview,
    posterUrl: posterUrl(details.poster_path),
    backdropUrl: backdropUrl(details.backdrop_path),
    rating: Math.round(details.vote_average * 10) / 10,
    popularity: details.popularity,
    genres: (details.genres ?? []).map((g) => ({ id: g.id, name: g.name })),
    cast: topCast(details.credits),
    director: directorFromCredits(details.credits),
  };
}

export function toMovieSnapshot(card: MovieCard): MovieSnapshot {
  return {
    id: card.id,
    title: card.title,
    year: card.year,
    posterUrl: card.posterUrl,
    genres: card.genres,
    cast: card.cast,
    director: card.director,
    popularity: card.popularity,
  };
}

// ---------------------------------------------------------------------------
// Public endpoints
// ---------------------------------------------------------------------------

export async function getMovieDetails(id: number): Promise<MovieCard> {
  const details = await tmdbFetch<TmdbMovieDetails>(
    `/movie/${id}`,
    { append_to_response: "credits" },
    ONE_DAY,
  );
  return toMovieCard(details);
}

/** A page of popular movies, fully hydrated with credits. */
export async function getPopularMovies(page = 1): Promise<MovieCard[]> {
  const data = await tmdbFetch<{ results: TmdbMovie[] }>(
    "/movie/popular",
    { page },
    ONE_HOUR,
  );
  const cards = await Promise.all(
    data.results.map((m) => getMovieDetails(m.id).catch(() => null)),
  );
  return cards.filter((c): c is MovieCard => c !== null);
}

/** Raw (light) discover results — used as a candidate pool by the engine. */
export async function discoverMovies(opts: {
  genreIds?: number[];
  personIds?: number[];
  page?: number;
}): Promise<TmdbMovie[]> {
  const data = await tmdbFetch<{ results: TmdbMovie[] }>(
    "/discover/movie",
    {
      sort_by: "popularity.desc",
      include_adult: "false",
      "vote_count.gte": 100,
      with_genres: opts.genreIds?.length
        ? opts.genreIds.join(",")
        : undefined,
      with_cast: opts.personIds?.length ? opts.personIds.join("|") : undefined,
      page: opts.page ?? 1,
    },
    ONE_HOUR,
  );
  return data.results;
}

/** TMDB's own "more like this" recommendations for a movie. */
export async function getMovieRecommendations(
  movieId: number,
): Promise<TmdbMovie[]> {
  const data = await tmdbFetch<{ results: TmdbMovie[] }>(
    `/movie/${movieId}/recommendations`,
    {},
    ONE_HOUR,
  );
  return data.results;
}

export async function searchMovies(query: string): Promise<TmdbMovie[]> {
  if (!query.trim()) return [];
  const data = await tmdbFetch<{ results: TmdbMovie[] }>(
    "/search/movie",
    { query, include_adult: "false" },
    ONE_HOUR,
  );
  return data.results;
}

const normalizeTitle = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/**
 * Resolve a title (+ optional year) to a TMDB movie id. Prefers an exact
 * normalized-title match within ±1 year of `year`, otherwise the closest
 * year, otherwise the first (most popular) result. Used by the Letterboxd
 * import to map rated films to TMDB.
 */
export async function findMovieByTitleYear(
  title: string,
  year: number | null,
): Promise<number | null> {
  const results = await searchMovies(title).catch(() => []);
  if (results.length === 0) return null;

  const target = normalizeTitle(title);
  const movieYear = (m: TmdbMovie) =>
    m.release_date ? Number(m.release_date.slice(0, 4)) : NaN;

  const exactTitle = results.filter((m) => normalizeTitle(m.title) === target);
  const pool = exactTitle.length ? exactTitle : results;

  if (year != null) {
    const withinOne = pool.filter((m) => Math.abs(movieYear(m) - year) <= 1);
    if (withinOne.length) {
      return withinOne.sort(
        (a, b) =>
          Math.abs(movieYear(a) - year) - Math.abs(movieYear(b) - year),
      )[0].id;
    }
  }

  return pool[0].id;
}

export { TmdbError };
