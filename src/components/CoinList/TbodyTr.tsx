import React, { useMemo } from "react";
import TableSkeleton from "./TableSkeleton";
import { ICoins, ICoinHttpTickers } from "../../interface/icoin";
import useSupplyMap from "../../libs/useSupplyMap";
import useBithumbTickers from "../../libs/useBithumbTickers";
import useBithumbTickersSocket from "../../libs/useBithumbSocket";
import useBithumbHistory from "../../libs/useBithumbHistory";
import CoinListRow from "./CoinListRow";


function TbodyTr({ nameData }: { nameData: ICoins[] | undefined }) {
  const coinList = useMemo(
    () => nameData?.map((d) => d.market) || [],
    [nameData]
  );
  const { tickerHttpData } = useBithumbTickers(coinList);
  const { liveMap } = useBithumbTickersSocket(coinList);
  const { historyData } = useBithumbHistory(coinList);
  
  // Merge HTTP baseline with live WS data per market
  const tickerList: ICoinHttpTickers[] = useMemo(() => {
    const base = tickerHttpData || [];
    if (!base.length && liveMap.size === 0) return base;
    const live = liveMap;
    return base.map((t) => live.get(t.market) || t);
  }, [tickerHttpData, liveMap]);

  // Resolve supply from local mapping with CoinGecko fallback (cached)
  const { supplyMap } = useSupplyMap(coinList);
  const historyMap = useMemo(() => {
    const entries: [string, any][] = [];
    for (const h of historyData || []) {
      const m = h?.[0]?.market;
      if (m) entries.push([m, h]);
    }
    return new Map(entries);
  }, [historyData]);

  if (!nameData || !tickerList) {
    return <TableSkeleton rows={10} />;
  }

  return (
    <>
      {nameData.map((data) => {
        const market = data.market;
        const supplyInfo = supplyMap.get(market);
        const history = historyMap.get(market);
        return (
          <CoinListRow
            key={market}
            data={data}
            tickerList={tickerList}
            supply={supplyInfo?.supply ?? null}
            marketCapKRW={supplyInfo?.marketCapKRW}
            history={history}
          />
        );
      })}
    </>
  );
}
export default React.memo(TbodyTr);
