import styled from "styled-components";
import {
  ICoinListMerge,
  ICoinHttpTickers,
} from "../../../../../interface/interface";
import { Tr } from "../../CoinList";
import {
  fetchCoinTickers,
  useCoinTickersSocket,
} from "../../../../../services/coinApi";
import React, { useEffect, useState } from "react";
import SkeletonUI from "../SkeletonUI";
import { useQuery } from "@tanstack/react-query";
import TradePrice from "./TradePrice";
import ChangePrice from "./ChangePrice";
import CirculatingSupply from "./CirculatingSupply";
import AccTradePrice24h from "./AccTradePrice24h";
import AccTradeVolume24h from "./AccTradeVolume24h";
import Chart200Days from "./Chart200Days";

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
export const TdNomalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TdChangeDiv = styled(TdNomalDiv)<{ change: string }>`
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

function TrBox({
  mergeData,
  coinList,
  count,
}: {
  mergeData: ICoinListMerge[];
  coinList: string[];
  count: number;
}) {
  const { data: tickerHttpData } = useQuery<ICoinHttpTickers[]>(
    ["ticker", count],
    () => fetchCoinTickers(coinList!),
    {
      enabled: !!coinList,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const { data: tickerSocketData } = useCoinTickersSocket(coinList!);

  const [tickerList, setTickerList] = useState<ICoinHttpTickers[]>(
    tickerHttpData || []
  );

  useEffect(() => {
    if (tickerSocketData) {
      setTickerList(
        tickerHttpData?.map((httpData) => {
          const supplyArr = tickerSocketData.find(
            (socketData) => httpData.market === socketData.code
          );
          if (supplyArr) {
            return { ...httpData, ...supplyArr };
          }
          return httpData;
        }) || []
      );
    }
  }, [tickerHttpData, tickerSocketData]);

  const makeSkeleton = () => {
    const skeletons = [];
    for (let i = 1; i <= 10; i++) {
      skeletons.push(<SkeletonUI key={i} />);
    }
    return skeletons;
  };

  return (
    <>
      {mergeData && tickerSocketData && tickerHttpData && tickerList
        ? mergeData.map((data, index) => (
            <Tr key={index}>
              <NameTd>
                <Namediv>
                  <Img
                    src={`https://static.upbit.com/logos/${data.market.substring(
                      4
                    )}.png`}
                    alt="coin_icon"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <span>{data.english_name}</span>
                    <span>{data.market.substring(4)}</span>
                  </div>
                </Namediv>
              </NameTd>
              <Td>
                <TradePrice
                  coinName={data.market}
                  tickerList={tickerList}
                  tickerSocketData={tickerSocketData}
                />
              </Td>
              <Td>
                <ChangePrice
                  coinName={data.market}
                  tickerList={tickerList}
                  tickerSocketData={tickerSocketData}
                />
              </Td>

              <Td>
                <AccTradeVolume24h
                  coinName={data.market}
                  tickerList={tickerList}
                  tickerSocketData={tickerSocketData}
                />
              </Td>
              <Td>
                <AccTradePrice24h
                  coinName={data.market}
                  tickerList={tickerList}
                  tickerSocketData={tickerSocketData}
                />
              </Td>
              <Td>
                <TdNomalDiv>
                  <span>
                    {data.supply
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    {data.market.substring(4)}
                  </span>
                </TdNomalDiv>
              </Td>
              <Td>
                <CirculatingSupply
                  coinName={data.market}
                  supply={data.supply}
                  tickerList={tickerList}
                  tickerSocketData={tickerSocketData}
                />
              </Td>
              <Td>
                <Chart200Days
                  coinName={data.market}
                  history={data.historyArr}
                  tickerList={tickerList}
                  tickerSocketData={tickerSocketData}
                />
              </Td>
            </Tr>
          ))
        : makeSkeleton()}
    </>
  );
}
export default React.memo(TrBox);
