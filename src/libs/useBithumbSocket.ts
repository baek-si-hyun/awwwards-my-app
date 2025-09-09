import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ICoinHttpTickers } from "../interface/icoin";

type LiveMap = Map<string, ICoinHttpTickers>;

function toBithumbSymbols(markets: string[]): string[] {
  // Convert KRW-BTC -> BTC_KRW
  return markets
    .filter((m) => m.startsWith("KRW-"))
    .map((m) => `${m.substring(4)}_KRW`);
}

function mapBithumbWsToTicker(content: any): ICoinHttpTickers | null {
  try {
    const symbol: string = content?.symbol || ""; // BTC_KRW
    if (!symbol.endsWith("_KRW")) return null;
    const code = symbol.replace("_KRW", "");
    const market = `KRW-${code}`;

    const closePrice = Number(content?.closePrice || 0);
    const chgAmt = Number(content?.chgAmt || 0);
    const chgRatePct = Number(content?.chgRate || 0);
    const accValue = Number(content?.value || 0);
    const accVol = Number(content?.volume || 0);
    const change = chgAmt > 0 ? "RISE" : chgAmt < 0 ? "FALL" : "EVEN";

    return {
      market,
      trade_price: closePrice,
      change,
      change_price: Math.abs(chgAmt),
      signed_change_price: chgAmt,
      change_rate: Math.abs(chgRatePct) / 100,
      signed_change_rate: chgRatePct / 100,
      acc_trade_price_24h: accValue,
      acc_trade_volume_24h: accVol,
    };
  } catch {
    return null;
  }
}

const useBithumbTickersSocket = (markets: string[]) => {
  const [liveMap, setLiveMap] = useState<LiveMap>(new Map());
  const wsRef = useRef<WebSocket | null>(null);
  const subsRef = useRef<string[]>([]);

  const connect = useCallback(() => {
    if (wsRef.current &&
      (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)
    ) return;

    const ws = new WebSocket("wss://pubwss.bithumb.com/pub/ws");
    wsRef.current = ws;

    ws.addEventListener("open", () => {
      const symbols = toBithumbSymbols(markets);
      subsRef.current = symbols;
      if (symbols.length === 0) return;
      const subMsg = {
        type: "ticker",
        symbols,
        tickTypes: ["24H"],
      } as any;
      ws.send(JSON.stringify(subMsg));
    });

    ws.addEventListener("message", (evt) => {
      try {
        const data = JSON.parse(evt.data);
        if (data?.type !== "ticker" || !data?.content) return;
        const tick = mapBithumbWsToTicker(data.content);
        if (!tick) return;
        setLiveMap((prev) => {
          const next = new Map(prev);
          next.set(tick.market, tick);
          return next;
        });
      } catch {}
    });

    ws.addEventListener("close", () => {
      wsRef.current = null;
      // simple retry
      setTimeout(connect, 1000);
    });
  }, [markets]);

  useEffect(() => {
    connect();
    return () => {
      wsRef.current?.close();
      wsRef.current = null;
      subsRef.current = [];
    };
  }, [connect]);

  const liveList = useMemo(() => Array.from(liveMap.values()), [liveMap]);

  return { liveMap, liveList };
};

export default useBithumbTickersSocket;

