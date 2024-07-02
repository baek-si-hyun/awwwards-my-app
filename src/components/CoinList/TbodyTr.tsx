import styled from "styled-components";
import { Tr } from "../../pages/CoinList/CoinList";
import React, { useEffect, useState } from "react";
import SkeletonUI from "./SkeletonUI";
import TradePrice from "./TradePrice";
import ChangePrice from "./ChangePrice";
import CirculatingSupply from "./CirculatingSupply";
import AccTradePrice24h from "./AccTradePrice24h";
import AccTradeVolume24h from "./AccTradeVolume24h";
import Chart200Days from "./Chart200Days";
import useCoinNames from "../../libs/useCoinNames";
import useCoinListData from "../../libs/useCoinListData";
import { useCoinTickersSocket } from "../../services/coinApi";
import { ICoinHttpTickers } from "../../interface/icoin";

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

function TbodyTr({ count }: { count: number }) {
  const { nameData } = useCoinNames(true);
  const coinList = nameData
    ?.map((data) => data.market)
    .slice(count - 10, count);
  const { data: mergeData } = useCoinListData(count, coinList, nameData);

  const makeSkeleton = () => {
    const skeletons = [];
    for (let i = 1; i <= 10; i++) {
      skeletons.push(<SkeletonUI key={i} />);
    }
    return skeletons;
  };
  return (
    <>
      {mergeData
        ? mergeData.map((data, index) => (
            <Tr key={index}>
              <NameTd>
                <GoDetail
                  href={`https://upbit.com/exchange?code=CRIX.UPBIT.${data.market}`}
                  target="_blank"
                >
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
                </GoDetail>
              </NameTd>
              <Td>
                <TradePrice coinName={data.market} tickerList={mergeData} />
              </Td>
              <Td>
                <ChangePrice coinName={data.market} tickerList={mergeData} />
              </Td>
              <Td>
                <AccTradeVolume24h
                  coinName={data.market}
                  tickerList={mergeData}
                />
              </Td>
              <Td>
                <AccTradePrice24h
                  coinName={data.market}
                  tickerList={mergeData}
                />
              </Td>
              <Td>
                <span>
                  {data.supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  {data.market.substring(4)}
                </span>
              </Td>
              <Td>
                <CirculatingSupply
                  coinName={data.market}
                  supply={data.supply}
                  tickerList={mergeData}
                />
              </Td>
              <Td>
                {data.historyArr && (
                  <Chart200Days
                    coinName={data.market}
                    history={data.historyArr}
                    tickerList={mergeData}
                  />
                )}
              </Td>
            </Tr>
          ))
        : makeSkeleton()}
    </>
  );
}
export default React.memo(TbodyTr);
