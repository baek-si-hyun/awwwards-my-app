import { useEffect, useMemo, useState } from "react";
import { circulatingSupply } from "../services/supplyData";

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
    // Only use static mapping; anything missing stays null
    const next = new Map(baseMap);
    const symbols = uniqueSymbols(markets);
    for (const s of symbols) {
      const key = `KRW-${s}`;
      if (!next.has(key)) next.set(key, { supply: null, marketCapKRW: null });
    }
    setMap(next);
  }, [markets, baseMap]);

  return { supplyMap: map };
};

export default useSupplyMap;
