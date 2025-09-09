import { useQuery } from "@tanstack/react-query";
import { ICoinHistory } from "../interface/icoin";
import { fetchBithumbCandles } from "../services/bithumbApi";

const useBithumbHistory = (coinList: string[]) => {
  const { data: historyData } = useQuery<ICoinHistory[][]>(
    ["bithumb", "history", coinList],
    () => fetchBithumbCandles(coinList),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      enabled: Array.isArray(coinList) && coinList.length > 0,
    }
  );
  return { historyData };
};

export default useBithumbHistory;

