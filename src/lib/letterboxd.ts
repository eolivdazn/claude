import { readFile } from "node:fs/promises";

export interface LetterboxdRating {
  name: string;
  year: number | null;
  rating: number;
}

const DEFAULT_CSV_PATH =
  "/Users/up277040/Downloads/letterboxd-eterra1-2026-05-31-14-59-utc/ratings.csv";

/** Path to the Letterboxd ratings.csv export. */
export function letterboxdCsvPath(): string {
  return process.env.LETTERBOXD_CSV_PATH || DEFAULT_CSV_PATH;
}

/**
 * Parse a single CSV line, honoring double-quoted fields that may contain
 * commas (Letterboxd quotes titles like "Léon: The Professional, etc.").
 */
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++; // escaped quote
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

/**
 * Read the Letterboxd ratings export, returning entries rated `>= minRating`
 * sorted by rating descending. CSV columns: Date,Name,Year,Letterboxd URI,Rating.
 */
export async function readLetterboxdRatings(
  minRating = 3.5,
  path = letterboxdCsvPath(),
): Promise<LetterboxdRating[]> {
  const raw = await readFile(path, "utf8");
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);

  // Drop the header row.
  const rows = lines.slice(1);

  const ratings: LetterboxdRating[] = [];
  for (const line of rows) {
    const cols = parseCsvLine(line);
    if (cols.length < 5) continue;

    const name = cols[1]?.trim();
    const year = Number(cols[2]);
    const rating = Number(cols[4]);

    if (!name || Number.isNaN(rating)) continue;
    if (rating < minRating) continue;

    ratings.push({
      name,
      year: Number.isFinite(year) ? year : null,
      rating,
    });
  }

  return ratings.sort((a, b) => b.rating - a.rating);
}
