import Link from "next/link";
import { signOut } from "@/auth";
import { NavLinks } from "@/components/NavLinks";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <Link href="/discover" className="flex items-center gap-2">
          <span className="text-xl">🍿</span>
          <span className="text-sm font-semibold tracking-tight text-white">
            Movie<span className="text-[var(--color-primary)]">Match</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <NavLinks />
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="rounded-full px-3 py-1.5 text-sm text-[var(--color-muted)] transition hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
