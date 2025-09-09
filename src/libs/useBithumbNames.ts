import { useQuery } from "@tanstack/react-query";
import { ICoins } from "../interface/icoin";
import { fetchBithumbKrwMarkets } from "../services/bithumbApi";

const useBithumbNames = (_allList: boolean) => {
  const { data: nameData } = useQuery<ICoins[]>(
    ["bithumb", "names"],
    fetchBithumbKrwMarkets,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    }
  );
  return { nameData };
};

export default useBithumbNames;

