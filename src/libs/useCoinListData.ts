import { useEffect, useState, useCallback } from "react";
import { circulatingSupply } from "../services/coinApi";
import {
  ICoinHistory,
  ICoinHttpTickers,
  ICoinListDataResult,
  ICoinListMerge,
  ICoins,
} from "../interface/icoin";

const useCoinListData = (
  nameData: ICoins[] | undefined,
  tickerHttpData: ICoinHttpTickers[] | undefined,
  historyData: ICoinHistory[][] | undefined
): ICoinListDataResult => {
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
