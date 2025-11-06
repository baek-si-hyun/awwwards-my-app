import { memo, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICoins, ICoinHttpTickers } from "../../interface/icoin";
import TradePrice from "./TradePrice";
import ChangePrice from "./ChangePrice";
import AccTradePrice24h from "./AccTradePrice24h";
import AccTradeVolume24h from "./AccTradeVolume24h";
import MarketCap from "./MarketCap";
import { Tr } from "../../container/CoinList";
import ChartSkeleton from "./ChartSkeleton";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import { Suspense, lazy } from "react";
const Chart200Days = lazy(() => import("./Chart200Days"));

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

const Icon = styled.span`
  display: inline-flex;
  margin-right: 5px;
`;

interface CoinListRowProps {
  data: ICoins;
  tickerList: ICoinHttpTickers[];
  supply: number | null;
  marketCapKRW: number | null | undefined;
  history: any;
}

function CoinListRow({
  data,
  tickerList,
  supply,
  marketCapKRW,
  history,
}: CoinListRowProps) {
  const navigate = useNavigate();
  const market = data.market;

  const symbol = useMemo(() => market.substring(4), [market]);

  const formattedSupply = useMemo(() => {
    if (supply === null) return "-";
    return `${supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${symbol}`;
  }, [supply, symbol]);

  const handleClick = useCallback(() => {
    navigate(`/coin/${market}`);
  }, [navigate, market]);

  const iconSources = useMemo(
    () => [
      `https://static.upbit.com/logos/${symbol}.png`,
      `https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/200`,
    ],
    [symbol]
  );

  const rowStyle = useMemo(() => ({ cursor: "pointer" }), []);

  return (
    <Tr onClick={handleClick} style={rowStyle}>
      <NameTd>
        <GoDetail>
          <Icon>
            <ImageWithSkeleton
              w={20}
              h={20}
              round
              alt={`${symbol} icon`}
              sources={iconSources}
            />
          </Icon>
          <div>
            <span>{data.english_name}</span>
            <span>{symbol}</span>
          </div>
        </GoDetail>
      </NameTd>
      <Td>
        <TradePrice coinName={market} tickerList={tickerList} />
      </Td>
      <Td>
        <ChangePrice coinName={market} tickerList={tickerList} />
      </Td>
      <Td>
        <AccTradeVolume24h coinName={market} tickerList={tickerList} />
      </Td>
      <Td>
        <AccTradePrice24h coinName={market} tickerList={tickerList} />
      </Td>
      <Td>
        <span>{formattedSupply}</span>
      </Td>
      <Td>
        <MarketCap
          coinName={market}
          supply={supply}
          marketCapKRW={marketCapKRW}
          tickerList={tickerList}
        />
      </Td>
      <Td>
        {history ? (
          <Suspense fallback={<ChartSkeleton />}>
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
}

export default memo(CoinListRow);

