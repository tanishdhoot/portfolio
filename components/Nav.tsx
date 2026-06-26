"use client";

import { useEffect, useState } from "react";

/**
 * Fixed glass nav that gains a backdrop once the page scrolls.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-ink hover:text-gold transition-colors"
        >
          T<span className="text-gold">.</span>
        </a>
        <nav className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-caps text-muted">
          <a href="#work" className="hover:text-gold transition-colors">
            work
          </a>
          <a
            href="mailto:tanish.dhoot98@gmail.com"
            className="hover:text-gold transition-colors hidden sm:inline"
          >
            contact
          </a>
          <span className="hidden md:flex items-center gap-1.5 text-muted/60">
            <kbd className="border border-border rounded px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </span>
        </nav>
      </div>
    </header>
  );
}
