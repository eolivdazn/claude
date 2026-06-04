// Predefined "preferred" people. Movies featuring these actors/directors
// receive the highest priority in the recommendation engine (Priority 1).
//
// Names are compared case-insensitively against TMDB credits.

export const PREFERRED_ACTORS = [
  "Leonardo DiCaprio",
  "Tom Hanks",
  "Robert Downey Jr.",
  "Christian Bale",
] as const;

export const PREFERRED_DIRECTORS = [
  "Christopher Nolan",
  "Denis Villeneuve",
  "Martin Scorsese",
  "Quentin Tarantino",
] as const;

const normalize = (s: string) => s.trim().toLowerCase();

const PREFERRED_ACTOR_SET = new Set(PREFERRED_ACTORS.map(normalize));
const PREFERRED_DIRECTOR_SET = new Set(PREFERRED_DIRECTORS.map(normalize));

export function isPreferredActor(name: string): boolean {
  return PREFERRED_ACTOR_SET.has(normalize(name));
}

export function isPreferredDirector(name: string): boolean {
  return PREFERRED_DIRECTOR_SET.has(normalize(name));
}
