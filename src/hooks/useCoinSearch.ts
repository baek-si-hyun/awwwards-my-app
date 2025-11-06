import { useMemo } from "react";
import { useDeferredValue } from "react";
import { ICoins } from "../interface/icoin";

export function useCoinSearch(
  nameData: ICoins[] | undefined,
  query: string,
  multiTerm: boolean = false
) {
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo<ICoins[]>(() => {
    if (!nameData) return [];
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return nameData;
    
    if (multiTerm) {
      const searchTerms = q.split(/\s+/).filter(Boolean);
      return nameData.filter((d) => {
        const sym = d.market.substring(4).toLowerCase();
        const en = (d.english_name || "").toLowerCase();
        const ko = (d.korean_name || "").toLowerCase();
        const searchable = `${sym} ${en} ${ko}`;
        return searchTerms.every((term) => searchable.includes(term));
      });
    } else {
      return nameData.filter((d) => {
        const sym = d.market.substring(4).toLowerCase();
        const en = (d.english_name || "").toLowerCase();
        const ko = (d.korean_name || "").toLowerCase();
        return en.includes(q) || ko.includes(q) || sym.includes(q);
      });
    }
  }, [nameData, deferredQuery, multiTerm]);

  return { filtered, deferredQuery };
}

