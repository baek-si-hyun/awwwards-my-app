import styled from "styled-components";
import React, { useMemo, Suspense, lazy } from "react";
import SkeletonUI from "./SkeletonUI";
import TradePrice from "./TradePrice";
import ChangePrice from "./ChangePrice";
import AccTradePrice24h from "./AccTradePrice24h";
import AccTradeVolume24h from "./AccTradeVolume24h";
import { ICoins, ICoinHttpTickers } from "../../interface/icoin";
import CirculatingSupply from "./CirculatingSupply";
import { Tr } from "../../container/CoinList";
import useSupplyMap from "../../libs/useSupplyMap";
import useBithumbTickers from "../../libs/useBithumbTickers";
import useBithumbTickersSocket from "../../libs/useBithumbSocket";
import useBithumbHistory from "../../libs/useBithumbHistory";
const Chart200Days = lazy(() => import("./Chart200Days"));

const GoDetail = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    background-color: #dadada;
    border-radius: 5px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div span + span {
    color: #808a9d;
  }
`;
export const Td = styled.td`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  white-space: nowrap;
  :last-child {
    padding: 0px;
  }
`;
const NameTd = styled.td`
  text-align: start;
  vertical-align: middle;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: -2px;
  z-index: 10;
  background-color: #f8f8f8;
  @media (max-width: 1279px) {
    & {
      ::before {
        box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        right: 0;
        bottom: -1px;
        width: 30px;
        transform: translateX(100%);
        transition: box-shadow 0.3s;
        content: "";
        pointer-events: none;
      }
    }
  }
`;
export const Namediv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div span + span {
    color: #808a9d;
  }
`;
export const TdChangeDiv = styled.div<{ change: string }>`
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.change === "RISE"
      ? "#c84a31"
      : props.change === "FALL"
      ? "#1261c4"
      : "#222"};
  will-change: color;
`;
export const Icons = styled.span`
  vertical-align: middle;
`;
export const Img = styled.img`
  margin-right: 5px;
  max-width: 20px;
`;

function TbodyTr({
  count,
  nameData,
}: {
  count: number;
  nameData: ICoins[] | undefined;
}) {
  const coinList = useMemo(
    () => nameData?.map((d) => d.market).slice(count - 10, count) || [],
    [nameData, count]
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

  const makeSkeleton = () => {
    const skeletons = [];
    for (let i = 1; i <= 10; i++) {
      skeletons.push(<SkeletonUI key={i} />);
    }
    return skeletons;
  };
  return (
    <>
      {nameData && tickerList
        ? coinList.map((market) => {
            const data = nameData.find((n) => n.market === market)!;
            const supplyInfo = supplyMap.get(market);
            const supply = supplyInfo?.supply ?? null;
            const history = (historyData || []).find((h) => h?.[0]?.market === market);
            return (
              <Tr key={market}>
                <NameTd>
                  <GoDetail
                    href={`https://www.bithumb.com/trade/order/${market.substring(
                      4
                    )}_KRW`}
                    target="_blank"
                  >
                  <Img
                    src={`https://static.upbit.com/logos/${market.substring(4)}.png`}
                    alt={`${market.substring(4)} icon`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const sym = `${market.substring(4).toLowerCase()}`;
                      if (!img.dataset.fallbackTried) {
                        img.dataset.fallbackTried = "1";
                        img.src = `https://cryptoicons.org/api/icon/${sym}/200`;
                      } else {
                        img.style.display = "none";
                      }
                    }}
                  />
                  <div>
                    <span>{data.english_name}</span>
                    <span>{market.substring(4)}</span>
                  </div>
                </GoDetail>
              </NameTd>
              <Td>
                <TradePrice
                  coinName={market}
                  tickerList={tickerList}
                />
              </Td>
              <Td>
                <ChangePrice
                  coinName={market}
                  tickerList={tickerList}
                />
              </Td>
              <Td>
                <AccTradeVolume24h
                  coinName={market}
                  tickerList={tickerList}
                />
              </Td>
              <Td>
                <AccTradePrice24h
                  coinName={market}
                  tickerList={tickerList}
                />
              </Td>
              <Td>
                <span>
                  {supply !== null
                    ? `${supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${market.substring(4)}`
                    : "-"}
                </span>
              </Td>
              <Td>
                {supply !== null ? (
                  <CirculatingSupply
                    coinName={market}
                    supply={supply}
                    tickerList={tickerList}
                  />
                ) : (
                  <span>-</span>
                )}
              </Td>
              <Td>
                {history ? (
                  <Suspense fallback={<span>-</span>}>
                    <Chart200Days
                      coinName={market}
                      history={history}
                      tickerList={tickerList}
                    />
                  </Suspense>
                ) : (
                  <span>-</span>
                )}
              </Td>
            </Tr>
            );
          })
        : makeSkeleton()}
    </>
  );
}
export default React.memo(TbodyTr);
