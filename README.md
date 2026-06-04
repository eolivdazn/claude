# 🍿 Movie Match

A Tinder-style movie discovery app. Swipe through movies, like the ones you love, and after rating **5 movies** get personalized recommendations from a weighted scoring engine. Built with the Next.js 15 App Router.

![stack](https://img.shields.io/badge/Next.js-15-black) ![ts](https://img.shields.io/badge/TypeScript-5-blue) ![prisma](https://img.shields.io/badge/Prisma-6-darkblue)

## Features

- **Letterboxd-driven taste profile** — import your `ratings.csv` export to seed your preferences from real ratings, weighted by star score (3.5★+). Swiping in Discover fine-tunes it further.
- **Single best match** — the recommendations page surfaces **one** movie (your top match) with a **Show another** button to step through the next-best picks one at a time.
- **Swipe discovery** — drag-to-swipe (Framer Motion) or tap the like/dislike buttons, one card at a time with poster, title, year, genres, rating, overview, cast, and director.
- **Auth** — email/password registration, login, logout, protected routes, and persistent JWT sessions (Auth.js v5).
- **Recommendation engine** — ranks candidates with a weighted score:
  `score = actorMatch*50 + directorMatch*40 + genreMatch*20 + popularityWeight*10`,
  with a bonus for a predefined list of preferred actors/directors (Priority 1). Higher-rated films weigh more.
- **Results** — each pick shows its match score and human-readable reasons ("Directed by Christopher Nolan, a standout director").
- **Dashboard** — total likes/dislikes, favorite genres, actors, directors, and recommendation history.
- **Polished UI** — dark mode, mobile-first, loading skeletons, empty states, and error handling.

## Tech Stack

Next.js 15 · TypeScript · Tailwind CSS v4 · Auth.js (NextAuth) v5 · Prisma · PostgreSQL · TMDB API · Framer Motion · Zod.

## Project Structure

```
src/
├── auth.ts / auth.config.ts        # Auth.js (Credentials + JWT, split edge/node config)
├── middleware.ts                   # route protection
├── app/
│   ├── (auth)/login | register     # auth pages
│   ├── (main)/discover | recommendations | dashboard
│   └── api/                        # auth, register, movies, recommendations
├── components/                     # SwipeDeck, SwipeCard, cards, nav, states…
├── lib/                            # prisma, tmdb service, recommendation engine, preferred lists
├── actions/                        # server actions: recordSwipe, refreshRecommendations
└── types/                          # shared domain types
prisma/schema.prisma                # User, MoviePreference, Recommendation
```

## Prerequisites

- Node.js 18.18+ (Node 20+ recommended)
- Docker (for local PostgreSQL) — or any PostgreSQL 14+ instance
- A free **TMDB API key** (v3): https://www.themoviedb.org/settings/api

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
#   then edit .env and set:
#   - AUTH_SECRET   (run: openssl rand -base64 32)
#   - TMDB_API_KEY  (your TMDB v3 key)

# 3. Start PostgreSQL
docker compose up -d db

# 4. Create the database schema
npx prisma migrate dev --name init

# 5. Run the app
npm run dev
```

Open http://localhost:3000, register an account, and start swiping.

### Import your Letterboxd ratings (recommended)

After registering, seed your taste profile from a Letterboxd export:

```bash
# Settings → Import & Export → Export your data, then point .env at ratings.csv
# (LETTERBOXD_CSV_PATH), or pass the default path baked into the code.
npm run import:letterboxd your@email.com   # omit email to use the only user
```

This resolves each film you rated 3.5★+ to TMDB (genres/cast/director) and stores
them as liked preferences. Then open **/recommendations** and click *Find my movie*
to get your single best match. Your **/dashboard** will also fill with real favorites.

## Environment Variables

| Variable        | Description                                              |
| --------------- | ------------------------------------------------------- |
| `DATABASE_URL`  | PostgreSQL connection string (matches docker-compose).  |
| `AUTH_SECRET`   | Secret for signing JWT sessions (`openssl rand -base64 32`). |
| `NEXTAUTH_URL`  | App base URL, e.g. `http://localhost:3000`.             |
| `TMDB_API_KEY`  | TMDB API **v3** key. Required for movie data.           |
| `LETTERBOXD_CSV_PATH` | Optional. Path to your Letterboxd `ratings.csv` for the import script. |

## How the Recommendation Engine Works

1. Your taste profile is seeded from **liked `MoviePreference` rows** — either imported from Letterboxd (weighted by star rating, 3.5★+) or added by swiping right in Discover. Each row stores a movie **snapshot** (genres, top cast, director) so the engine never re-fetches credits.
2. `refreshRecommendations` aggregates a weighted profile (favorite genres/actors/directors) and assembles a candidate pool from TMDB (`/movie/{id}/recommendations` for your top ~20 favorites, genre-filtered `/discover`, and people-filtered `/discover`).
3. Each candidate is scored with the weighted formula above; matches against the **preferred** people list (`src/lib/preferred.ts`) get a 1.5× bonus so they rank first.
4. The top picks are persisted to `Recommendation` (replacing the previous set) with their reasons. **The page shows your single best match**, with "Show another" to step through the rest.

Edit `src/lib/preferred.ts` to change the preferred actors/directors.

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start the dev server.                |
| `npm run build`      | Generate Prisma client + production build. |
| `npm run start`      | Run the production build.            |
| `npm run typecheck`  | TypeScript check (no emit).          |
| `npm run db:migrate` | Run Prisma migrations (dev).         |
| `npm run db:studio`  | Open Prisma Studio.                  |
| `npm run import:letterboxd [email]` | Seed liked preferences from a Letterboxd `ratings.csv`. |

## Notes

- **Schema extension:** `MoviePreference` and `Recommendation` carry a `movieData` JSON snapshot (and `Recommendation.reasons[]`) beyond the base spec fields — this powers the engine and dashboard without extra TMDB calls.
- Movie data and recommendations require a valid `TMDB_API_KEY`; without one, auth and the UI shell still work but the discover queue will show an error state.
```
