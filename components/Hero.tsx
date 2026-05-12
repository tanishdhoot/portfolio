import { now, cal } from "@/lib/now";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div
        className="absolute inset-x-0 -top-40 h-80 pointer-events-none opacity-[0.07]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, #C9A84C 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-gold">~</span> tanish <span className="text-gold/60">@</span> pune
        </p>

        <h1 className="mt-10 text-6xl sm:text-7xl font-semibold tracking-tightest leading-[0.95]">
          Tanish
          <span className="cursor-blink" aria-hidden="true" />
        </h1>

        <p className="mt-8 text-xl sm:text-2xl text-ink/90 leading-snug text-balance max-w-2xl">
          Building things at the intersection of{" "}
          <span className="text-gold">finance</span> and{" "}
          <span className="text-gold">code</span>.
        </p>

        <div className="mt-10 max-w-xl space-y-4 text-muted leading-relaxed">
          <p>
            Full-stack engineer with a focus on fintech and algorithmic trading.
            Previously at <span className="text-ink">Smallcase</span>, helping
            shape how Indians invest. Family runs{" "}
            <span className="text-ink">Dhoot Trading</span> — gold has been the
            household commodity for decades.
          </p>
          <p>
            These days I ship small, sharp products that sit somewhere between
            markets, software, and design.
          </p>
        </div>

        <div className="mt-10 max-w-xl rounded-sm border border-border bg-surface/40 px-5 py-4">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold">currently</span>
            </span>
            <span>{now.updated}</span>
          </div>
          <p className="mt-2 text-[15px] text-ink/90 leading-snug">
            {now.text}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <a
            href={cal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm border border-gold/60 bg-gold/10 px-4 py-2 text-gold hover:bg-gold hover:text-bg transition-colors"
          >
            <span>{cal.label}</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-ink hover:text-gold transition-colors"
          >
            <span>view work</span>
            <span className="text-gold transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <span className="text-border">|</span>
          <a
            href="/blog"
            className="hover:text-gold transition-colors"
          >
            blog
          </a>
          <span className="text-border">|</span>
          <a
            href="mailto:tanish.dhoot98@gmail.com"
            className="hover:text-gold transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </section>
  );
}
