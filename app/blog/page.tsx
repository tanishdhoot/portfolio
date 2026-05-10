import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Tanish",
  description:
    "Notes on fintech, markets, and building software. Coming soon.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative flex-1 overflow-hidden border-b border-border">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-x-0 -top-40 h-80 pointer-events-none opacity-[0.07]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 0%, #C9A84C 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-32 sm:pt-32">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            <span className="text-gold">←</span> back
          </Link>

          <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-gold">
            {"// blog"}
          </p>

          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tightest leading-[0.95]">
            Coming soon
            <span className="cursor-blink" aria-hidden="true" />
          </h1>

          <p className="mt-8 text-lg text-ink/90 leading-snug max-w-xl text-balance">
            Notes on markets, fintech, and the messy bits of building software
            in public.
          </p>

          <div className="mt-12 grid gap-3 max-w-md font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <div className="flex items-center gap-3">
              <span className="text-gold/60">[draft]</span>
              <span>building axiom alpha</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold/60">[draft]</span>
              <span>indian markets, foreign tooling</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold/60">[draft]</span>
              <span>what i learned at smallcase</span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border max-w-md">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              get notified when the first post drops
            </p>
            <a
              href="mailto:tanish.dhoot98@gmail.com?subject=Notify%20me%20when%20your%20blog%20launches"
              className="mt-3 inline-flex items-center gap-2 text-ink hover:text-gold transition-colors font-mono text-sm"
            >
              <span>tanish.dhoot98@gmail.com</span>
              <span className="text-gold">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span>pune, india</span>
            </div>
            <Link href="/" className="hover:text-gold transition-colors">
              home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
