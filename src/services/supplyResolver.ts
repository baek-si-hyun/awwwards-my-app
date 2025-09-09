// Resolve circulating supply and market cap using local mapping first,
// then fallback to CoinGecko search/markets with caching.

type SupplyInfo = { supply: number | null; marketCapKRW: number | null };

const GECKO_BASE = "https://api.coingecko.com/api/v3";

async function geckoSearchSymbol(symbol: string): Promise<string | null> {
  try {
    const res = await fetch(`${GECKO_BASE}/search?query=${encodeURIComponent(symbol)}`);
    const json = await res.json();
    const coins = Array.isArray(json?.coins) ? json.coins : [];
    if (!coins.length) return null;
    // Prefer exact symbol match; fallback to first
    const lower = symbol.toLowerCase();
    const exact = coins.find((c: any) => (c?.symbol || "").toLowerCase() === lower);
    return (exact || coins[0])?.id || null;
  } catch {
    return null;
  }
}

async function geckoFetchMarket(id: string): Promise<SupplyInfo> {
  try {
    const url = `${GECKO_BASE}/coins/markets?vs_currency=krw&ids=${encodeURIComponent(id)}`;
    const res = await fetch(url);
    const arr = await res.json();
    const item = Array.isArray(arr) ? arr[0] : null;
    if (!item) return { supply: null, marketCapKRW: null };
    const supply = Number(item.circulating_supply ?? 0) || null;
    const marketCapKRW = Number(item.market_cap ?? 0) || null;
    return { supply, marketCapKRW };
  } catch {
    return { supply: null, marketCapKRW: null };
  }
}

function cacheGet(symbol: string): SupplyInfo | null {
  try {
    const key = `supply:${symbol.toUpperCase()}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function cacheSet(symbol: string, info: SupplyInfo) {
  try {
    const key = `supply:${symbol.toUpperCase()}`;
    localStorage.setItem(key, JSON.stringify(info));
  } catch {}
}

export async function resolveSupplyForSymbol(symbol: string): Promise<SupplyInfo> {
  const cached = cacheGet(symbol);
  if (cached) return cached;

  const id = await geckoSearchSymbol(symbol);
  if (!id) {
    const info = { supply: null, marketCapKRW: null };
    cacheSet(symbol, info);
    return info;
  }
  const info = await geckoFetchMarket(id);
  cacheSet(symbol, info);
  return info;
}

