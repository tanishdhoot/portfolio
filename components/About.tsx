import { now } from "@/lib/now";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-caps text-gold">
            03 — the story
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tightest">
            Markets were{" "}
            <span className="font-serif italic font-light">
              dinner-table talk
            </span>
          </h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/85">
              Full-stack engineer with a focus on fintech and algorithmic
              trading. Previously at{" "}
              <span className="text-gold-bright">Smallcase</span>, helping
              shape how Indians invest. The family runs{" "}
              <span className="text-gold-bright">Dhoot Trading</span> — gold
              has been the household commodity for decades, so markets were a
              conversation long before they were a career.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-xl border border-border bg-surface/60 px-6 py-5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-caps text-muted">
                <span className="flex items-center gap-2 text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  currently
                </span>
                <span>{now.updated}</span>
              </div>
              <p className="mt-3 text-[15px] text-ink/90 leading-snug">
                {now.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
