import { useQuery } from "@tanstack/react-query";
import { ICoins } from "../interface/icoin";
import { fetchCoins } from "../services/coinApi";

const useCoinNames = (allList: boolean) => {
  const { data: nameData } = useQuery<ICoins[]>(["name"], () => fetchCoins(), {
    select: (datas) =>
      datas.filter((data) => {
        if (allList) {
          return !data.market.indexOf("KRW");
        } else {
          return data;
        }
      }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { nameData };
};

export default useCoinNames;
