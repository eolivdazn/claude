// Shared constants safe to import from both client and server modules.

/**
 * Minimum number of liked movies before recommendations can be generated.
 * The taste profile is primarily seeded from a Letterboxd import, so this is
 * just a non-empty guard rather than a swipe gate.
 */
export const REQUIRED_RATINGS = 1;
