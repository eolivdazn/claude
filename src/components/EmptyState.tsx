import Link from "next/link";

export function EmptyState({
  icon = "🎬",
  title,
  description,
  action,
}: {
  icon?: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 text-center">
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="max-w-sm text-sm text-[var(--color-muted)]">{description}</p>
      {action && (
        <Link
          href={action.href}
          className="mt-6 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-primary-hover)]"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
