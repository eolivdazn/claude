import "server-only";
import type { MovieSnapshot, ScoredRecommendation } from "@/types";
import {
  discoverMovies,
  getMovieDetails,
  getMovieRecommendations,
  getPersonId,
  toMovieSnapshot,
} from "@/lib/tmdb";
import {
  PREFERRED_ACTORS,
  PREFERRED_DIRECTORS,
  isPreferredActor,
  isPreferredDirector,
} from "@/lib/preferred";
import { topEntries } from "@/lib/utils";

// Positive scoring weights.
const W_ACTOR = 50;
const W_DIRECTOR = 40;
const W_GENRE = 20;
const W_POPULARITY = 10;

// Extra bonus when signals come from highly-rated (≥4★) Letterboxd movies.
// Stacks on top of the base score to elevate candidates that match what the
// user has explicitly rated as their best films.
const W_HIGH_RATED_ACTOR = 20;
const W_HIGH_RATED_DIRECTOR = 30;
const W_HIGH_RATED_GENRE = 10;

// Letterboxd star threshold (0.5–5 scale) to qualify as "high-rated".
const HIGH_RATING_THRESHOLD = 4.0;

// Penalty weights for disliked signals (lower than positive to avoid
// over-penalizing genre overlap that may be coincidental).
const W_DISLIKE_ACTOR = 30;
const W_DISLIKE_DIRECTOR = 35;
const W_DISLIKE_GENRE = 12;

// Bonus multipliers for matches against the predefined preferred lists
// (Priority 1). A preferred-person match dominates the score.
const PREFERRED_BONUS = 1.5;

export interface LikedProfile {
  genres: Map<number, number>;     // genreId -> weighted count
  genreNames: Map<number, string>;
  actors: Map<string, number>;     // actorName -> weighted count
  directors: Map<string, number>;  // directorName -> weighted count
  likedMovieIds: number[];         // sorted highest-rated first
  // Signals from movies the user rated ≥ HIGH_RATING_THRESHOLD stars.
  // Only populated from Letterboxd imports; swipe likes are unrated.
  highRatedGenres: Map<number, number>;
  highRatedActors: Map<string, number>;
  highRatedDirectors: Map<string, number>;
  highRatedMovieIds: number[];
}

export interface DislikedProfile {
  genres: Map<number, number>; // genreId -> dislike count
  actors: Map<string, number>; // actorName -> dislike count
  directors: Map<string, number>; // directorName -> dislike count
}

/** Build a negative-signal profile from disliked movie snapshots. */
export function buildDislikedProfile(disliked: MovieSnapshot[]): DislikedProfile {
  const genres = new Map<number, number>();
  const actors = new Map<string, number>();
  const directors = new Map<string, number>();

  for (const m of disliked) {
    for (const g of m.genres) {
      genres.set(g.id, (genres.get(g.id) ?? 0) + 1);
    }
    for (const a of m.cast) {
      actors.set(a.name, (actors.get(a.name) ?? 0) + 1);
    }
    if (m.director) {
      directors.set(m.director.name, (directors.get(m.director.name) ?? 0) + 1);
    }
  }

  return { genres, actors, directors };
}

/** Build an aggregated taste profile from liked movie snapshots. */
export function buildProfile(liked: MovieSnapshot[]): LikedProfile {
  const genres = new Map<number, number>();
  const genreNames = new Map<number, string>();
  const actors = new Map<string, number>();
  const directors = new Map<string, number>();
  const highRatedGenres = new Map<number, number>();
  const highRatedActors = new Map<string, number>();
  const highRatedDirectors = new Map<string, number>();
  const highRatedMovieIds: number[] = [];

  for (const m of liked) {
    const weight = m.userRating ?? 1;
    const isHighRated = (m.userRating ?? 0) >= HIGH_RATING_THRESHOLD;

    for (const g of m.genres) {
      genres.set(g.id, (genres.get(g.id) ?? 0) + weight);
      genreNames.set(g.id, g.name);
      if (isHighRated) {
        highRatedGenres.set(g.id, (highRatedGenres.get(g.id) ?? 0) + 1);
      }
    }
    for (const a of m.cast) {
      actors.set(a.name, (actors.get(a.name) ?? 0) + weight);
      if (isHighRated) {
        highRatedActors.set(a.name, (highRatedActors.get(a.name) ?? 0) + 1);
      }
    }
    if (m.director) {
      directors.set(m.director.name, (directors.get(m.director.name) ?? 0) + weight);
      if (isHighRated) {
        highRatedDirectors.set(
          m.director.name,
          (highRatedDirectors.get(m.director.name) ?? 0) + 1,
        );
      }
    }
    if (isHighRated) highRatedMovieIds.push(m.id);
  }

  return {
    genres,
    genreNames,
    actors,
    directors,
    likedMovieIds: [...liked]
      .sort((a, b) => (b.userRating ?? 1) - (a.userRating ?? 1))
      .map((m) => m.id),
    highRatedGenres,
    highRatedActors,
    highRatedDirectors,
    highRatedMovieIds,
  };
}

// Cap how many liked movies seed the "more like this" candidate pool, so a
// large import (hundreds of films) doesn't fan out to hundreds of requests.
const MAX_SEED_MOVIES = 20;

/**
 * Assemble a candidate pool of movie ids by combining:
 *  - TMDB "recommendations" for each liked movie,
 *  - discover filtered by the user's top genres,
 *  - discover filtered by preferred people that appear in liked movies.
 * Already-swiped movies are excluded by the caller.
 */
async function buildCandidatePool(
  profile: LikedProfile,
  excludeIds: Set<number>,
): Promise<Set<number>> {
  const candidates = new Set<number>();
  const add = (movies: { id: number }[]) => {
    for (const m of movies) {
      if (!excludeIds.has(m.id)) candidates.add(m.id);
    }
  };

  // 1) "More like this" seeded from top-rated movies first, then broader liked.
  // High-rated movies get their own seed slots so they don't get crowded out.
  const highRatedSeeds = profile.highRatedMovieIds.slice(0, 10);
  const broadSeeds = profile.likedMovieIds
    .filter((id) => !highRatedSeeds.includes(id))
    .slice(0, MAX_SEED_MOVIES - highRatedSeeds.length);
  const recLists = await Promise.all(
    [...highRatedSeeds, ...broadSeeds].map((id) =>
      getMovieRecommendations(id).catch(() => []),
    ),
  );
  recLists.forEach(add);

  // 2) Discover by top genres from high-rated movies (most precise signal).
  const topHighRatedGenres = topEntries(profile.highRatedGenres, 3).map((e) => e.key);
  if (topHighRatedGenres.length) {
    add(await discoverMovies({ genreIds: topHighRatedGenres }).catch(() => []));
  }

  // 3) Discover by top liked genres (broader fallback).
  const topGenres = topEntries(profile.genres, 3)
    .map((e) => e.key)
    .filter((id) => !topHighRatedGenres.includes(id));
  if (topGenres.length) {
    add(await discoverMovies({ genreIds: topGenres }).catch(() => []));
  }

  // 4) Discover by preferred + frequent liked people.
  const peopleNames = new Set<string>([
    ...PREFERRED_ACTORS,
    ...PREFERRED_DIRECTORS,
    ...topEntries(profile.actors, 3).map((e) => String(e.key)),
    ...topEntries(profile.directors, 2).map((e) => String(e.key)),
  ]);
  const personIds = (
    await Promise.all([...peopleNames].map((n) => getPersonId(n)))
  ).filter((id): id is number => id !== null);

  if (personIds.length) {
    add(await discoverMovies({ personIds }).catch(() => []));
  }

  return candidates;
}

interface ScoreBreakdown {
  score: number;
  reasons: string[];
}

/** Score a single candidate against the taste profile. */
function scoreMovie(
  movie: MovieSnapshot,
  profile: LikedProfile,
  disliked: DislikedProfile,
  maxPopularity: number,
): ScoreBreakdown {
  const reasons: string[] = [];

  // --- Actor match (Priority 1 preferred, Priority 2 frequent) ---
  let actorScore = 0;
  const matchedActors: string[] = [];
  const matchedPreferredActors: string[] = [];
  for (const a of movie.cast) {
    const likedCount = profile.actors.get(a.name) ?? 0;
    const preferred = isPreferredActor(a.name);
    if (likedCount > 0 || preferred) {
      const weight = preferred ? PREFERRED_BONUS : 1;
      actorScore += (likedCount + (preferred ? 1 : 0)) * weight;
      if (preferred) matchedPreferredActors.push(a.name);
      else matchedActors.push(a.name);
    }
  }

  // --- Director match (Priority 1 preferred, Priority 3 frequent) ---
  let directorScore = 0;
  let directorReason: string | null = null;
  if (movie.director) {
    const likedCount = profile.directors.get(movie.director.name) ?? 0;
    const preferred = isPreferredDirector(movie.director.name);
    if (likedCount > 0 || preferred) {
      const weight = preferred ? PREFERRED_BONUS : 1;
      directorScore += (likedCount + (preferred ? 1 : 0)) * weight;
      directorReason = `${movie.director.name} films`;
    }
  }

  // --- Genre match (Priority 4) ---
  let genreOverlap = 0;
  const matchedGenres: string[] = [];
  for (const g of movie.genres) {
    if (profile.genres.has(g.id)) {
      genreOverlap += 1;
      matchedGenres.push(g.name);
    }
  }
  const genreScore = genreOverlap / Math.max(1, movie.genres.length);

  // --- Popularity (Priority 5 tie-breaker) ---
  const popularityWeight =
    maxPopularity > 0 ? Math.min(1, movie.popularity / maxPopularity) : 0;

  // --- High-rated tier bonus ---
  // Extra weight when signals match movies the user explicitly rated ≥4★.
  // Stacks on top of the base actor/director/genre scores.
  let highRatedActorBonus = 0;
  for (const a of movie.cast) {
    highRatedActorBonus += profile.highRatedActors.get(a.name) ?? 0;
  }

  let highRatedDirectorBonus = 0;
  if (movie.director) {
    highRatedDirectorBonus = profile.highRatedDirectors.get(movie.director.name) ?? 0;
  }

  let highRatedGenreOverlap = 0;
  const highRatedMatchedGenres: string[] = [];
  for (const g of movie.genres) {
    if (profile.highRatedGenres.has(g.id)) {
      highRatedGenreOverlap += 1;
      highRatedMatchedGenres.push(g.name);
    }
  }
  const highRatedGenreScore = highRatedGenreOverlap / Math.max(1, movie.genres.length);

  // --- Dislike penalties ---
  // Penalize actors/directors/genres that appear frequently in disliked movies.
  // Normalized by how often that signal shows up so a single co-incidental
  // dislike doesn't tank the entire genre.
  let actorPenalty = 0;
  for (const a of movie.cast) {
    actorPenalty += disliked.actors.get(a.name) ?? 0;
  }

  let directorPenalty = 0;
  if (movie.director) {
    directorPenalty = disliked.directors.get(movie.director.name) ?? 0;
  }

  let genreDislikeOverlap = 0;
  for (const g of movie.genres) {
    genreDislikeOverlap += disliked.genres.get(g.id) ?? 0;
  }
  const genrePenaltyScore = genreDislikeOverlap / Math.max(1, movie.genres.length);

  const score =
    actorScore * W_ACTOR +
    directorScore * W_DIRECTOR +
    genreScore * W_GENRE +
    popularityWeight * W_POPULARITY +
    highRatedActorBonus * W_HIGH_RATED_ACTOR +
    highRatedDirectorBonus * W_HIGH_RATED_DIRECTOR +
    highRatedGenreScore * W_HIGH_RATED_GENRE -
    actorPenalty * W_DISLIKE_ACTOR -
    directorPenalty * W_DISLIKE_DIRECTOR -
    genrePenaltyScore * W_DISLIKE_GENRE;

  // --- Human-readable reasons ---
  const hasHighRatedSignal =
    highRatedActorBonus > 0 || highRatedDirectorBonus > 0 || highRatedMatchedGenres.length > 0;
  if (hasHighRatedSignal) {
    const parts: string[] = [];
    if (highRatedDirectorBonus > 0) parts.push(`directed by ${movie.director!.name}`);
    else if (highRatedMatchedGenres.length > 0)
      parts.push(`${highRatedMatchedGenres.slice(0, 2).join("/")} genre`);
    reasons.push(
      `Matches the style of your ★★★★+ rated films${parts.length ? ` (${parts[0]})` : ""}`,
    );
  }
  if (matchedPreferredActors.length) {
    reasons.push(
      `Features ${matchedPreferredActors.slice(0, 2).join(" & ")}, one of your favorite actors`,
    );
  }
  if (directorReason && isPreferredDirector(movie.director!.name)) {
    reasons.push(`Directed by ${movie.director!.name}, a standout director`);
  } else if (directorReason) {
    reasons.push(`You liked other ${directorReason}`);
  }
  if (matchedActors.length) {
    reasons.push(
      `Stars ${matchedActors.slice(0, 2).join(" & ")} from movies you liked`,
    );
  }
  if (matchedGenres.length) {
    reasons.push(
      `Shares the ${matchedGenres.slice(0, 2).join("/")} genre${
        matchedGenres.length > 1 ? "s" : ""
      } you enjoy`,
    );
  }
  if (reasons.length === 0) {
    reasons.push("A popular pick that fits your overall taste");
  }

  return { score, reasons };
}

/**
 * Generate the top-N recommendations for a user given their liked and
 * disliked movies. Disliked signals are used to penalize candidates that
 * share strong negative patterns (actors, directors, genres).
 * Returns scored snapshots sorted by score descending.
 */
export async function generateRecommendations(
  liked: MovieSnapshot[],
  disliked: MovieSnapshot[],
  swipedMovieIds: number[],
  limit = 10,
): Promise<ScoredRecommendation[]> {
  if (liked.length === 0) return [];

  const profile = buildProfile(liked);
  const dislikedProfile = buildDislikedProfile(disliked);
  const exclude = new Set<number>(swipedMovieIds);

  const candidateIds = await buildCandidatePool(profile, exclude);
  if (candidateIds.size === 0) return [];

  // Hydrate candidates (capped to keep the request count bounded).
  const ids = [...candidateIds].slice(0, 60);
  const details = (
    await Promise.all(ids.map((id) => getMovieDetails(id).catch(() => null)))
  ).filter((m): m is NonNullable<typeof m> => m !== null);

  const snapshots = details.map(toMovieSnapshot);
  const maxPopularity = Math.max(...snapshots.map((s) => s.popularity), 1);

  const scored: ScoredRecommendation[] = snapshots.map((movie) => {
    const { score, reasons } = scoreMovie(movie, profile, dislikedProfile, maxPopularity);
    return { movieId: movie.id, score, reasons, movie };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/** Build a one-line summary used on the results page header. */
export function summarizeTaste(liked: MovieSnapshot[]): string {
  const profile = buildProfile(liked);
  const topGenres = topEntries(profile.genres, 2).map(
    (e) => profile.genreNames.get(e.key) ?? "",
  );
  const topDirector = topEntries(profile.directors, 1)[0]?.key;

  const parts: string[] = [];
  if (topDirector) parts.push(`${topDirector} films`);
  if (topGenres.length) parts.push(`${topGenres.join(" & ")} movies`);

  return parts.length
    ? `Based on your love of ${parts.join(" and ")}.`
    : "Based on the movies you liked.";
}
