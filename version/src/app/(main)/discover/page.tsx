import { getRatedCount } from "@/actions/preferences";
import { SwipeDeck } from "@/components/SwipeDeck";

export const metadata = { title: "Discover — Movie Match" };

export default async function DiscoverPage() {
  const ratedCount = await getRatedCount();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Discover
        </h1>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          Swipe right to like, left to pass.
        </p>
      </div>
      <SwipeDeck initialRatedCount={ratedCount} />
    </div>
  );
}
