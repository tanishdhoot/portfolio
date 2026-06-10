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
      <span className="text-faint">{tick.label}</span>
      <span className="text-ink tabular-nums font-medium">
        {formatPrice(tick)}
      </span>
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
    <section aria-label="Live market data" className="mx-auto max-w-5xl px-6">
      <div className="border-b border-rule py-2.5">
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-caps overflow-x-auto scrollbar-none">
          <span className="flex items-center gap-2 text-gold shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span>Markets</span>
          </span>
          {ticks.map((t) => (
            <TickItem key={t.label} tick={t} />
          ))}
          <span className="ml-auto text-faint/70 shrink-0 hidden sm:inline normal-case tracking-normal">
            Yahoo Finance · 2m delay
          </span>
        </div>
      </div>
    </section>
  );
}
