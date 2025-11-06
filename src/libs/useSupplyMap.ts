import { useEffect, useState, useMemo } from "react";
import { circulatingSupply } from "../services/supplyData";

type SupplyMap = Map<
  string,
  { supply: number | null; marketCapKRW: number | null }
>;

// supplyData.ts의 초기 유통량 데이터를 Map으로 변환 (한 번만 생성)
const createInitialSupplyMap = () => {
  const map = new Map<string, number>();
  for (const item of circulatingSupply) {
    map.set(item.id, item.supply);
  }
  return map;
};

const initialSupplyMap = createInitialSupplyMap();

const useSupplyMap = (markets: string[]) => {
  const stableMarkets = useMemo(() => {
    const sorted = [...markets].sort();
    return sorted;
  }, [markets]);
  const [map, setMap] = useState<SupplyMap>(new Map());
  const [closingMap, setClosingMap] = useState<Map<string, number>>(
    () => new Map<string, number>()
  );
  const [remoteSupplyMap, setRemoteSupplyMap] = useState<Map<string, number>>(
    () => new Map<string, number>()
  );

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const res = await fetch(
          "https://api.bithumb.com/public/ticker/ALL_KRW",
          {
            method: "GET",
            signal: controller.signal,
          }
        );
        if (!res.ok) return;
        const json = await res.json();
        const payload = json?.data;
        if (!payload) return;
        const next = new Map<string, number>();
        for (const [symbol, value] of Object.entries(
          payload as Record<string, { closing_price?: string }>
        )) {
          if (!value || symbol === "date") continue;
          const closing = parseFloat(value?.closing_price ?? "");
          if (!Number.isFinite(closing)) continue;
          next.set(symbol.toUpperCase(), closing);
        }
        if (!controller.signal.aborted) setClosingMap(next);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("Failed to load Bithumb closing prices", error);
        }
      }
    };
    load();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const pages = [1, 2, 3];
        const results = await Promise.all(
          pages.map(async (page) => {
            try {
              const res = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&per_page=250&page=${page}&sparkline=false&price_change_percentage=24h`,
                { signal: controller.signal }
              );
              if (!res.ok) return [];
              return (await res.json()) as Array<{
                symbol: string;
                circulating_supply: number | null;
              }>;
            } catch {
              return [];
            }
          })
        );
        const next = new Map<string, number>();
        for (const list of results) {
          for (const coin of list) {
            if (!coin) continue;
            const symbol = coin.symbol?.toUpperCase();
            const supply =
              typeof coin.circulating_supply === "number"
                ? coin.circulating_supply
                : Number(coin.circulating_supply);
            if (!symbol || !Number.isFinite(supply) || supply <= 0) continue;
            if (!next.has(symbol)) next.set(symbol, supply);
          }
        }
        if (!controller.signal.aborted) setRemoteSupplyMap(next);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("Failed to load CoinGecko supplies", error);
        }
      }
    };
    load();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const next: SupplyMap = new Map();
    // markets를 직접 순회하여 정확한 키 매칭
    for (const market of stableMarkets) {
      if (!market.startsWith("KRW-")) continue;

      const symbol = market.substring(4); // "BTC", "ETH" 등
      const symbolUpper = symbol.toUpperCase();

      // 우선순위: API에서 가져온 값 > 초기값(supplyData.ts)
      const remoteSupply = remoteSupplyMap.get(symbolUpper);
      const initialSupply = initialSupplyMap.get(market); // market 키로 직접 조회
      const supply =
        remoteSupply !== undefined
          ? remoteSupply
          : initialSupply !== undefined
          ? initialSupply
          : null;

      // 시가총액 계산: 가격 × 유통량
      // closing price가 있으면 미리 계산, 없어도 MarketCap 컴포넌트에서 실시간 가격으로 계산
      const closing = closingMap.get(symbolUpper);
      const marketCap =
        typeof supply === "number" &&
        Number.isFinite(supply) &&
        closing !== undefined &&
        Number.isFinite(closing)
          ? supply * closing
          : null;
      next.set(market, { supply, marketCapKRW: marketCap });
    }
    setMap(next);
  }, [stableMarkets, closingMap, remoteSupplyMap]);

  return { supplyMap: map };
};

export default useSupplyMap;
