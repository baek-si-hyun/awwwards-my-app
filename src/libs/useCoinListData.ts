import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  circulatingSupply,
  fetchCoinHistory,
  fetchCoinTickers,
} from "../services/coinApi";
import {
  ICoinHistory,
  ICoinHttpTickers,
  ICoinListDataResult,
  ICoinListMerge,
  ICoins,
} from "../interface/icoin";



const useCoinListData = (
  count: number,
  coinList: string[] | undefined,
  nameData: ICoins[] | undefined
): ICoinListDataResult => {
  const { data: tickerHttpData } = useQuery<ICoinHttpTickers[]>(
    ["ticker", count],
    () => fetchCoinTickers(coinList!),
    {
      enabled: !!coinList,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  );

  const { data: historyData } = useQuery<ICoinHistory[][]>(
    ["history", count],
    () => fetchCoinHistory(coinList!),
    {
      enabled: !!coinList,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  );

  const [mergeData, setMergeData] = useState<ICoinListMerge[]>([]);

  const mergeFn = useCallback(async () => {
    let newArr: ICoinListMerge[] = [];
    await Promise.all(
      tickerHttpData!.map(async (tickerArr) => {
        const supplyArr = circulatingSupply.find(
          (supply) => supply.id === tickerArr.market
        );
        if (supplyArr) {
          const historyArr = historyData!.find(
            (history) => history[0].market === tickerArr.market
          );
          if (historyArr) {
            const nameArr = nameData!.find(
              (name) => name.market === tickerArr.market
            );
            if (nameArr) {
              let newObject = {
                ...tickerArr,
                ...nameArr,
                ...supplyArr,
                historyArr,
              };
              newArr.push(newObject);
            }
          }
        }
      })
    ).then(() => setMergeData(() => newArr));
  }, [historyData, nameData, tickerHttpData]);

  useEffect(() => {
    if (historyData) {
      mergeFn();
    }
  }, [historyData, mergeFn]);

  return {
    data: mergeData,
  };
};

export default useCoinListData;
