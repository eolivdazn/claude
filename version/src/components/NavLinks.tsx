"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/discover", label: "Discover" },
  { href: "/recommendations", label: "For You" },
  { href: "/dashboard", label: "Stats" },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center">
      {LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm transition",
              active
                ? "bg-[var(--color-surface-2)] font-medium text-white"
                : "text-[var(--color-muted)] hover:text-white",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
