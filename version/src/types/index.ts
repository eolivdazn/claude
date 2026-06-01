// Shared domain types for Movie Match.

/** Raw movie shape from TMDB list/discover endpoints. */
export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids?: number[];
}

export interface TmdbGenre {
  id: number;
  name: string;
}

export interface TmdbCastMember {
  id: number;
  name: string;
  character: string;
  order: number;
  profile_path: string | null;
}

export interface TmdbCrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
}

export interface TmdbCredits {
  cast: TmdbCastMember[];
  crew: TmdbCrewMember[];
}

/** Full movie details with credits (append_to_response=credits). */
export interface TmdbMovieDetails extends TmdbMovie {
  genres: TmdbGenre[];
  runtime: number | null;
  tagline: string | null;
  credits: TmdbCredits;
}

/** Normalized movie used throughout the UI and stored in DB snapshots. */
export interface MovieCard {
  id: number;
  title: string;
  year: string;
  overview: string;
  posterUrl: string | null;
  backdropUrl: string | null;
  rating: number;
  popularity: number;
  genres: { id: number; name: string }[];
  cast: { id: number; name: string }[];
  director: { id: number; name: string } | null;
}

/** Lightweight snapshot persisted on MoviePreference.movieData. */
export interface MovieSnapshot {
  id: number;
  title: string;
  year: string;
  posterUrl: string | null;
  genres: { id: number; name: string }[];
  cast: { id: number; name: string }[];
  director: { id: number; name: string } | null;
  popularity: number;
  /** The user's star rating (e.g. from a Letterboxd import, 0.5–5).
   *  Absent for swipe-based likes, which are weighted as 1. */
  userRating?: number;
}

/** A scored recommendation produced by the engine. */
export interface ScoredRecommendation {
  movieId: number;
  score: number;
  reasons: string[];
  movie: MovieSnapshot;
}
