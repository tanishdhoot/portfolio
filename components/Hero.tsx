import { now, cal } from "@/lib/now";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-12 sm:pt-16 pb-14 sm:pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        {/* lead story */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-caps text-gold">
            The Lead Story
          </p>
          <h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tightest leading-[1.02] text-balance">
            Building things at the intersection of{" "}
            <em className="font-light">finance</em> &{" "}
            <em className="font-light">code</em>.
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-relaxed text-ink/85">
            <p className="drop-cap">
              Full-stack engineer from Pune with a focus on fintech and
              algorithmic trading. Previously at Smallcase, helping shape how
              Indians invest. The family runs Dhoot Trading — gold has been the
              household commodity for decades, so markets were dinner-table
              conversation long before they were a career.
            </p>
            <p>
              These days I ship small, sharp products that sit somewhere
              between markets, software, and design.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={cal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-ink px-5 py-2.5 font-mono text-[11px] uppercase tracking-caps text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              <span>{cal.label}</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-caps text-faint hover:text-gold transition-colors"
            >
              <span>View holdings</span>
              <span className="text-gold transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* dispatch column */}
        <aside className="lg:border-l lg:border-rule lg:pl-10">
          <div className="border-y-2 border-ink py-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-caps">
            <span className="flex items-center gap-2 text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Latest dispatch
            </span>
            <span className="text-faint">{now.updated}</span>
          </div>
          <p className="mt-5 text-xl leading-snug font-medium text-balance">
            {now.text}
          </p>

          <div className="mt-8 rule-hair pt-5 space-y-3 font-mono text-[11px] uppercase tracking-caps text-faint">
            <p className="flex justify-between">
              <span>Desk</span>
              <span className="text-ink">Pune, India</span>
            </p>
            <p className="flex justify-between">
              <span>Beat</span>
              <span className="text-ink">Fintech · Trading</span>
            </p>
            <p className="flex justify-between">
              <span>Wire</span>
              <a
                href="mailto:tanish.dhoot98@gmail.com"
                className="text-ink hover:text-gold transition-colors normal-case tracking-normal"
              >
                tanish.dhoot98@gmail.com
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
