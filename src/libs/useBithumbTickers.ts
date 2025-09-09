import { useQuery } from "@tanstack/react-query";
import { ICoinHttpTickers } from "../interface/icoin";
import {
  fetchBithumbAllKrwTickers,
  mapBithumbRestToTicker,
} from "../services/bithumbApi";

const useBithumbTickers = (coinList: string[]) => {
  const { data: tickerHttpData } = useQuery<ICoinHttpTickers[]>(
    ["bithumb", "tickers", coinList],
    async () => {
      const data = await fetchBithumbAllKrwTickers();
      const list: ICoinHttpTickers[] = [];
      // Map to quick lookup for selected codes
      const wanted = new Set(coinList);
      for (const [code, entry] of Object.entries<any>(data)) {
        if (code === "date") continue;
        const market = `KRW-${code}`;
        if (wanted.has(market)) list.push(mapBithumbRestToTicker(code, entry));
      }
      return list;
    },
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

