"use client";

export function ActionButtons({
  onDislike,
  onLike,
  disabled,
}: {
  onDislike: () => void;
  onLike: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        type="button"
        aria-label="Dislike"
        onClick={onDislike}
        disabled={disabled}
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-dislike)]/40 bg-[var(--color-surface)] text-2xl text-[var(--color-dislike)] shadow-lg transition hover:scale-105 hover:border-[var(--color-dislike)] active:scale-95 disabled:opacity-40"
      >
        ✕
      </button>
      <button
        type="button"
        aria-label="Like"
        onClick={onLike}
        disabled={disabled}
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-like)]/40 bg-[var(--color-surface)] text-2xl text-[var(--color-like)] shadow-lg transition hover:scale-105 hover:border-[var(--color-like)] active:scale-95 disabled:opacity-40"
      >
        ♥
      </button>
    </div>
  );
}
