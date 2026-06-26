interface SymbolConfig {
  symbol: string;
  label: string;
  precision?: number;
}

const SYMBOLS: SymbolConfig[] = [
  { symbol: "%5ENSEI", label: "NIFTY 50", precision: 2 },
  { symbol: "%5EBSESN", label: "SENSEX", precision: 2 },
  { symbol: "GOLDBEES.NS", label: "GOLD ETF", precision: 2 },
  { symbol: "USDINR%3DX", label: "USD/INR", precision: 3 },
];

export interface MarketTick {
  label: string;
  price: number;
  change: number;
  changePct: number;
  precision: number;
}

interface YahooChartResponse {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        previousClose?: number;
        chartPreviousClose?: number;
      };
    }>;
  };
}

async function fetchTick(cfg: SymbolConfig): Promise<MarketTick | null> {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${cfg.symbol}?interval=1d&range=5d`;
    const res = await fetch(url, {
      next: { revalidate: 120 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Accept: "application/json",
      },
    });
    if (!res.ok) return null;
    const data: YahooChartResponse = await res.json();
    const meta = data.chart?.result?.[0]?.meta;
    if (!meta?.regularMarketPrice) return null;
    const price = meta.regularMarketPrice;
    const prev = meta.previousClose ?? meta.chartPreviousClose;
    if (!prev) return null;
    const change = price - prev;
    const changePct = (change / prev) * 100;
    return {
      label: cfg.label,
      price,
      change,
      changePct,
      precision: cfg.precision ?? 2,
    };
  } catch {
    return null;
  }
}

export async function fetchTicks(): Promise<MarketTick[]> {
  const results = await Promise.all(SYMBOLS.map(fetchTick));
  return results.filter((t): t is MarketTick => t !== null);
}
