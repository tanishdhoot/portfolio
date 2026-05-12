import { fetchTicks, type MarketTick } from "@/lib/markets";

export const revalidate = 120;

function formatPrice(t: MarketTick): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: t.precision,
    maximumFractionDigits: t.precision,
  }).format(t.price);
}

function TickItem({ tick }: { tick: MarketTick }) {
  const up = tick.change >= 0;
  const arrow = up ? "▲" : "▼";
  const color = up ? "text-emerald-400" : "text-red-400";

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="text-muted">{tick.label}</span>
      <span className="text-ink tabular-nums">{formatPrice(tick)}</span>
      <span className={`${color} tabular-nums flex items-center gap-1`}>
        <span className="text-[8px]">{arrow}</span>
        <span>
          {up ? "+" : ""}
          {tick.changePct.toFixed(2)}%
        </span>
      </span>
    </div>
  );
}

export async function Ticker() {
  const ticks = await fetchTicks();
  if (ticks.length === 0) return null;

  return (
    <section
      aria-label="Live market data"
      className="border-y border-border bg-surface/30 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-5xl px-6 py-3">
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] overflow-x-auto scrollbar-none">
          <span className="flex items-center gap-2 text-gold shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span>live</span>
          </span>
          {ticks.map((t) => (
            <TickItem key={t.label} tick={t} />
          ))}
          <span className="ml-auto text-muted/60 shrink-0 hidden sm:inline">
            yahoo finance · 2m cache
          </span>
        </div>
      </div>
    </section>
  );
}
