// Bithumb public REST helpers
// Reference: https://apidocs.bithumb.com

export interface BithumbAllKrwTickerResponse {
  status: string;
  data: Record<string, any> & { date?: string };
}

const BITHUMB_PUBLIC_BASE = "https://api.bithumb.com/public";

export async function fetchBithumbAllKrwTickers() {
  const res = await fetch(`${BITHUMB_PUBLIC_BASE}/ticker/ALL_KRW`);
  const json: BithumbAllKrwTickerResponse = await res.json();
  if (json.status !== "0000") return {} as Record<string, any>;
  return json.data || {};
}

// Derive market list (KRW-<COIN>) from ALL_KRW response keys
export async function fetchBithumbKrwMarkets() {
  const data = await fetchBithumbAllKrwTickers();
  return Object.keys(data)
    .filter((k) => k !== "date")
    .map((code) => ({
      market: `KRW-${code}`,
      english_name: code,
      korean_name: code,
    }));
}

// Map Bithumb REST ticker entry to our ICoinHttpTickers-like shape
export function mapBithumbRestToTicker(code: string, entry: any) {
  const market = `KRW-${code}`;
  const closing = Number(entry?.closing_price || 0);
  const chgAmt = Number(entry?.fluctate_24H || 0);
  const chgRatePct = Number(entry?.fluctate_rate_24H || 0);
  const change = chgAmt > 0 ? "RISE" : chgAmt < 0 ? "FALL" : "EVEN";
  const accValue = Number(entry?.acc_trade_value_24H || 0);
  const accVolume = Number(entry?.acc_trade_volume_24H || 0);
  return {
    market,
    trade_price: closing,
    change,
    change_price: Math.abs(chgAmt),
    signed_change_price: chgAmt,
    change_rate: Math.abs(chgRatePct) / 100,
    signed_change_rate: chgRatePct / 100,
    acc_trade_price_24h: accValue,
    acc_trade_volume_24h: accVolume,
  };
}

// Candles (24h/day) for given markets; maps to ICoinHistory[][]
export async function fetchBithumbCandles(markets: string[]) {
  const urls = markets
    .filter((m) => m.startsWith("KRW-"))
    .map((m) => `https://api.bithumb.com/public/candlestick/${m.substring(4)}_KRW/24h`);
  const results = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      const status = json?.status;
      const data: any[] = Array.isArray(json?.data) ? json.data : [];
      if (status !== "0000" || data.length === 0) return [];
      // data item format: [timestamp(ms), open, close, high, low, volume]
      const market = `KRW-${url.split("/").slice(-2, -1)[0].replace("_KRW", "")}`;
      const mapped = data.map((d: any[], idx: number) => {
        const ts = Number(d[0]);
        const open = Number(d[1]);
        const close = Number(d[2]);
        const high = Number(d[3]);
        const low = Number(d[4]);
        const changePrice = close - open;
        const changeRate = open ? changePrice / open : 0;
        return {
          candle_date_time_kst: new Date(ts).toISOString(),
          change_price: changePrice,
          change_rate: changeRate,
          high_price: high,
          low_price: low,
          market,
          opening_price: open,
          prev_closing_price: close,
          timestamp: ts,
        };
      });
      return mapped;
    })
  );
  return results;
}
