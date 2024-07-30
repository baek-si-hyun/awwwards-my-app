import { useQuery } from "@tanstack/react-query";
import { fetchCoinTickers } from "../services/coinApi";
import { ICoinHttpTickers } from "../interface/icoin";

const useCoinTickers = (count: number, coinList: string[]) => {
  const { data: tickerHttpData } = useQuery<ICoinHttpTickers[]>(
    ["ticker", count],
    () => fetchCoinTickers(coinList!),
    {
      enabled: !!coinList,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  return { tickerHttpData };
};

export default useCoinTickers;
