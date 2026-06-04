"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function RegenerateButton({
  label = "Regenerate",
}: {
  label?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/recommendations", { method: "POST" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to generate");
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={run}
        disabled={loading}
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
      >
        {loading ? "Generating…" : label}
      </button>
      {error && <p className="text-xs text-[var(--color-dislike)]">{error}</p>}
    </div>
  );
}
