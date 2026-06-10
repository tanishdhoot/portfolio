import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes & Marginalia",
  description:
    "Notes on fintech, markets, and building software. Coming soon.",
};

const drafts = [
  "Building Axiom Alpha",
  "Indian markets, foreign tooling",
  "What I learned at Smallcase",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="mx-auto w-full max-w-3xl px-6 pt-8">
        <div className="rule-thick pt-2 flex items-baseline justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-caps text-faint">
          <Link href="/" className="hover:text-gold transition-colors">
            ← Front page
          </Link>
          <span>Section B</span>
        </div>
      </header>

      <section className="mx-auto w-full max-w-3xl px-6 flex-1">
        <div className="py-10 sm:py-14">
          <p className="font-mono text-[11px] uppercase tracking-caps text-gold">
            Notes &amp; Marginalia
          </p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tightest leading-none">
            Coming soon<em className="text-gold">.</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 max-w-xl text-balance">
            Notes on markets, fintech, and the messy bits of building software
            in public.
          </p>
        </div>

        <div className="rule-double pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-caps text-faint">
            On the desk
          </h2>
          <ul className="mt-4">
            {drafts.map((title, i) => (
              <li
                key={title}
                className="flex items-baseline gap-4 border-b border-rule py-4"
              >
                <span className="font-mono text-xs text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xl font-medium">{title}</span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-caps text-faint border border-rule px-2 py-0.5">
                  Draft
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pb-16">
          <p className="font-mono text-[11px] uppercase tracking-caps text-faint">
            Get notified when the first issue prints
          </p>
          <a
            href="mailto:tanish.dhoot98@gmail.com?subject=Notify%20me%20when%20your%20blog%20launches"
            className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-ink hover:text-gold transition-colors"
          >
            <span>tanish.dhoot98@gmail.com</span>
            <span className="text-gold">→</span>
          </a>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-3xl px-6 pb-12">
        <div className="rule-thick pt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-caps text-faint">
          <span>Pune, India</span>
          <Link href="/" className="hover:text-gold transition-colors">
            Front page
          </Link>
        </div>
      </footer>
    </main>
  );
}
