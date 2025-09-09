import { useEffect, useMemo, useState } from "react";
import { circulatingSupply } from "../services/supplyData";
import { resolveSupplyForSymbol } from "../services/supplyResolver";

type SupplyMap = Map<string, { supply: number | null; marketCapKRW: number | null }>;

function uniqueSymbols(markets: string[]): string[] {
  const set = new Set<string>();
  for (const m of markets) {
    if (!m.startsWith("KRW-")) continue;
    set.add(m.substring(4));
  }
  return Array.from(set);
}

const useSupplyMap = (markets: string[]) => {
  const [map, setMap] = useState<SupplyMap>(new Map());

  // base map from local static data
  const baseMap = useMemo(() => {
    const m = new Map<string, { supply: number | null; marketCapKRW: number | null }>();
    for (const row of circulatingSupply) {
      const sym = row.id.startsWith("KRW-") ? row.id.substring(4) : row.id;
      m.set(`KRW-${sym}`, { supply: row.supply, marketCapKRW: null });
    }
    return m;
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function go() {
      const next = new Map(baseMap);
      const symbols = uniqueSymbols(markets);
      const missing = symbols.filter((s) => !next.has(`KRW-${s}`));
      // Limit concurrent lookups to avoid rate limits
      const batchSize = 5;
      for (let i = 0; i < missing.length; i += batchSize) {
        const batch = missing.slice(i, i + batchSize);
        const results = await Promise.all(batch.map((sym) => resolveSupplyForSymbol(sym)));
        for (let j = 0; j < batch.length; j++) {
          const sym = batch[j];
          next.set(`KRW-${sym}`, results[j]);
        }
        if (cancelled) return;
        setMap(new Map(next));
      }
      // also write entries for those present in base but not requested
      if (!cancelled) setMap(new Map(next));
    }
    go();
    return () => {
      cancelled = true;
    };
  }, [markets, baseMap]);

  return { supplyMap: map };
};

export default useSupplyMap;

