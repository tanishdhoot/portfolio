import { fetchTicks, type MarketTick } from "@/lib/markets";

function formatPrice(t: MarketTick): string {
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: t.precision,
    maximumFractionDigits: t.precision,
  }).format(t.price);
}

function TickItem({ tick }: { tick: MarketTick }) {
  const isUp = tick.change >= 0;
  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="text-muted">{tick.label}</span>
      <span className="text-ink tabular-nums">{formatPrice(tick)}</span>
      <span
        className={`${isUp ? "text-up" : "text-down"} tabular-nums flex items-center gap-1`}
      >
        <span className="text-[8px]">{isUp ? "▲" : "▼"}</span>
        <span>
          {isUp ? "+" : ""}
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
      className="border-b border-border bg-surface/40 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-caps overflow-x-auto scrollbar-none">
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
