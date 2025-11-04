import styled from "styled-components";
import React, { useMemo, Suspense, lazy } from "react";
import TableSkeleton from "./TableSkeleton";
import TradePrice from "./TradePrice";
import ChangePrice from "./ChangePrice";
import AccTradePrice24h from "./AccTradePrice24h";
import AccTradeVolume24h from "./AccTradeVolume24h";
import { ICoins, ICoinHttpTickers } from "../../interface/icoin";
import MarketCap from "./MarketCap";
import { Tr } from "../../container/CoinList";
import useSupplyMap from "../../libs/useSupplyMap";
import useBithumbTickers from "../../libs/useBithumbTickers";
import useBithumbTickersSocket from "../../libs/useBithumbSocket";
import useBithumbHistory from "../../libs/useBithumbHistory";
import ChartSkeleton from "./ChartSkeleton";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import { useNavigate } from "react-router-dom";
const Chart200Days = lazy(() => import("./Chart200Days"));

const GoDetail = styled.div`
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
const Icon = styled.span`
  display: inline-flex;
  margin-right: 5px;
`;

function TbodyTr({ nameData }: { nameData: ICoins[] | undefined }) {
  const navigate = useNavigate();
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

  
  return (
    <>
      {nameData && tickerList
        ? nameData.map((data) => {
            const market = data.market;
            const supplyInfo = supplyMap.get(market);
            const supply = supplyInfo?.supply ?? null;
            const history = historyMap.get(market);
            return (
              <Tr
                key={market}
                onClick={() => navigate(`/coin/${market}`)}
                style={{ cursor: "pointer" }}
              >
                <NameTd>
                  <GoDetail>
                  <Icon>
                    <ImageWithSkeleton
                      w={20}
                      h={20}
                      round
                      alt={`${market.substring(4)} icon`}
                      sources={[
                        `https://static.upbit.com/logos/${market.substring(4)}.png`,
                        `https://cryptoicons.org/api/icon/${market.substring(4).toLowerCase()}/200`,
                      ]}
                    />
                  </Icon>
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
                <MarketCap
                  coinName={market}
                  supply={supply}
                  marketCapKRW={supplyInfo?.marketCapKRW}
                  tickerList={tickerList}
                />
              </Td>
              <Td>
                {history ? (
                  <Suspense fallback={<ChartSkeleton /> }>
                    <Chart200Days
                      coinName={market}
                      history={history}
                      tickerList={tickerList}
                    />
                  </Suspense>
                ) : (
                  <ChartSkeleton />
                )}
              </Td>
            </Tr>
            );
          })
        : <TableSkeleton rows={10} />}
    </>
  );
}
export default React.memo(TbodyTr);
