import type { MovieSnapshot } from "@/types";

export interface DashboardData {
  totalLikes: number;
  totalDislikes: number;
  favoriteGenres: { name: string; count: number }[];
  favoriteActors: { name: string; count: number }[];
  favoriteDirectors: { name: string; count: number }[];
  recommendationHistory: {
    id: string;
    score: number;
    createdAt: Date;
    movie: MovieSnapshot;
  }[];
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <p className="text-sm text-[var(--color-muted)]">{label}</p>
      <p
        className="mt-1 text-3xl font-bold"
        style={{ color: accent ?? "#fff" }}
      >
        {value}
      </p>
    </div>
  );
}

function TagList({
  title,
  items,
  emptyHint,
}: {
  title: string;
  items: { name: string; count: number }[];
  emptyHint: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <h3 className="mb-3 text-sm font-semibold text-white">{title}</h3>
      {items.length === 0 ? (
        <p className="text-sm text-[var(--color-muted)]">{emptyHint}</p>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-1.5 rounded-full bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-white/90"
            >
              {item.name}
              <span className="text-xs text-[var(--color-muted)]">
                ×{item.count}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function DashboardStats({ data }: { data: DashboardData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <StatCard
          label="Likes"
          value={data.totalLikes}
          accent="var(--color-like)"
        />
        <StatCard
          label="Dislikes"
          value={data.totalDislikes}
          accent="var(--color-dislike)"
        />
        <StatCard
          label="Total rated"
          value={data.totalLikes + data.totalDislikes}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <TagList
          title="Favorite genres"
          items={data.favoriteGenres}
          emptyHint="Like some movies to see your top genres."
        />
        <TagList
          title="Favorite actors"
          items={data.favoriteActors}
          emptyHint="Your most-liked actors will appear here."
        />
        <TagList
          title="Favorite directors"
          items={data.favoriteDirectors}
          emptyHint="Your most-liked directors will appear here."
        />
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h3 className="mb-3 text-sm font-semibold text-white">
          Recommendation history
        </h3>
        {data.recommendationHistory.length === 0 ? (
          <p className="text-sm text-[var(--color-muted)]">
            No recommendations generated yet.
          </p>
        ) : (
          <ul className="divide-y divide-[var(--color-border)]">
            {data.recommendationHistory.map((rec) => (
              <li
                key={rec.id}
                className="flex items-center justify-between py-2.5 text-sm"
              >
                <span className="text-white/90">
                  {rec.movie.title}{" "}
                  <span className="text-[var(--color-muted)]">
                    ({rec.movie.year})
                  </span>
                </span>
                <span className="text-xs text-[var(--color-muted)]">
                  Match {Math.round(rec.score)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
