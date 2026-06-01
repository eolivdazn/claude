"use client";

export function ErrorState({
  title = "Something went wrong",
  description,
  onRetry,
}: {
  title?: string;
  description: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-[var(--color-dislike)]/30 bg-[var(--color-surface)] px-6 py-14 text-center">
      <div className="mb-4 text-5xl">⚠️</div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="max-w-sm text-sm text-[var(--color-muted)]">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-surface-2)]"
        >
          Try again
        </button>
      )}
    </div>
  );
}
