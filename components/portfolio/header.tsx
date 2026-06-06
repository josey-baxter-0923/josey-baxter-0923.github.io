"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  ["Impact", "#impact"],
  ["Products", "#products"],
  ["Architecture", "#architecture"],
  ["Case Studies", "#case-studies"],
  ["GitHub", "#github"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition",
        scrolled ? "border-border bg-background/86" : "border-transparent bg-background/54",
      )}
    >
      <nav className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-1.5rem))] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-md border border-primary/50 bg-primary/10 text-sm text-primary">
            JB
          </span>
          <span>Josey Baxter</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-white/[0.04] hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/josey-baxter-0923"
          className="hidden rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:border-white/25 hover:bg-white/[0.05] md:inline-flex"
        >
          GitHub Profile
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md border border-border bg-white/[0.04] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "grid border-t border-border bg-background/96 px-3 transition lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto grid w-[min(1180px,100%)] gap-1 py-3">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
