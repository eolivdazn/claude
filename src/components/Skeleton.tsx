import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton rounded-lg", className)} />;
}

/** Full-card placeholder shown while the swipe deck loads. */
export function SwipeCardSkeleton() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <Skeleton className="aspect-[2/3] w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

/** Grid placeholder for the recommendations page. */
export function RecommendationSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <Skeleton className="aspect-[2/3] w-full rounded-none" />
          <div className="space-y-2 p-4">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
