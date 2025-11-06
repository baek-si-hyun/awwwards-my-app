import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { ICoinHttpTickers } from "../interface/icoin";
import {
  fetchBithumbAllKrwTickers,
  mapBithumbRestToTicker,
} from "../services/bithumbApi";

const useBithumbTickers = (coinList: string[]) => {
  const stableKey = useMemo(() => [...coinList].sort().join(","), [coinList]);
  
  const queryFn = useMemo(
    () => async () => {
      const data = await fetchBithumbAllKrwTickers();
      const wanted = new Set(coinList);
      const list: ICoinHttpTickers[] = [];
      // Map to quick lookup for selected codes
      for (const [code, entry] of Object.entries<any>(data)) {
        if (code === "date") continue;
        const market = `KRW-${code}`;
        if (wanted.has(market)) list.push(mapBithumbRestToTicker(code, entry));
      }
      return list;
    },
    [coinList]
  );

  const { data: tickerHttpData } = useQuery<ICoinHttpTickers[]>(
    ["bithumb", "tickers", stableKey],
    queryFn,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 30 * 1000,
      enabled: Array.isArray(coinList) && coinList.length > 0,
    }
  );
  return { tickerHttpData };
};

export default useBithumbTickers;

