import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../services/coinApi";
import { ICoinHistory } from "../interface/icoin";

const useCoinHistory = (count: number, coinList: string[]) => {
  const { data: historyData } = useQuery<ICoinHistory[][]>(
    ["history", count],
    () => fetchCoinHistory(coinList!),
    {
      enabled: !!coinList,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  return {
    historyData,
  };
};

export default useCoinHistory;
