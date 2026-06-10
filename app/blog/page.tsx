import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Notes",
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
      <Nav />

      <section className="relative flex-1 overflow-hidden border-b border-border">
        <div
          className="absolute inset-x-0 top-0 h-96 pointer-events-none opacity-[0.07]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, #D4AF37 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 pt-36 pb-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-caps text-gold">
              notes
            </p>
            <h1 className="mt-5 text-6xl sm:text-8xl font-semibold tracking-tightest leading-[0.9]">
              Coming{" "}
              <span className="font-serif italic font-light">soon</span>
              <span className="caret" aria-hidden="true" />
            </h1>
            <p className="mt-8 text-xl text-ink/85 leading-snug max-w-xl text-balance">
              Notes on markets, fintech, and the messy bits of building
              software in public.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-16 max-w-xl divide-y divide-border border-y border-border">
              {drafts.map((title, i) => (
                <li
                  key={title}
                  className="group flex items-baseline gap-5 py-5"
                >
                  <span className="font-mono text-xs text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium group-hover:text-gold-bright transition-colors">
                    {title}
                  </span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-caps text-gold/60 border border-gold/30 rounded-full px-2.5 py-0.5">
                    draft
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-14">
              <p className="font-mono text-[11px] uppercase tracking-caps text-muted">
                get notified when the first post drops
              </p>
              <a
                href="mailto:tanish.dhoot98@gmail.com?subject=Notify%20me%20when%20your%20blog%20launches"
                className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-ink hover:text-gold transition-colors"
              >
                <span>tanish.dhoot98@gmail.com</span>
                <span className="text-gold">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-caps text-muted">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          pune, india
        </span>
        <Link href="/" className="hover:text-gold transition-colors">
          ← home
        </Link>
      </footer>
    </main>
  );
}
