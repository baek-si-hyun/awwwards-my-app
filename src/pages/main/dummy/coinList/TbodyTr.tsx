import styled from "styled-components";
import { ICoinListMerge } from "../../../../interface/interface";
import { Tr } from "../CoinList";
import Chart from "./Chart";
import { useCoinTickers } from "../../../../services/coinApi";
import React from "react";

const Td = styled.td`
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
const Namediv = styled.div`
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
const TdNomalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TdChangeDiv = styled(TdNomalDiv)<{ change: string }>`
  color: ${(props) =>
    props.change === "RISE"
      ? "#c84a31"
      : props.change === "FALL"
      ? "#1261c4"
      : "#222"};
`;
const Icons = styled.span`
  vertical-align: middle;
`;
const Img = styled.img`
  margin-right: 5px;
  max-width: 20px;
`;

const LoadingTr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 3vw;
  padding: 2vw;
  @media (max-width: 768px) {
    padding: 40vw 2vw;
    font-size: 6vw;
  }
`;

function TrBox({
  mergeData,
  coinList,
}: {
  mergeData: ICoinListMerge[];
  coinList: string[];
}) {
  const { data: tickerData } = useCoinTickers(coinList!);

  return (
    <>
      {mergeData && tickerData ? (
        mergeData.map((data, index) =>
          tickerData.map(
            (ticker) =>
              data.market === ticker.code && (
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
                    <TdNomalDiv>
                      <span>
                        ₩
                        {ticker.trade_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </TdNomalDiv>
                  </Td>
                  <Td>
                    <TdChangeDiv change={ticker.change}>
                      <span>
                        ₩
                        {ticker.change_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(!\d))/g, ",")}
                      </span>
                      <span>
                        {ticker.change === "EVEN" ? (
                          <Icons className="material-symbols-outlined">
                            check_indeterminate_small
                          </Icons>
                        ) : ticker.change === "RISE" ? (
                          <Icons className="material-symbols-outlined">
                            arrow_drop_up
                          </Icons>
                        ) : ticker.change === "FALL" ? (
                          <Icons className="material-symbols-outlined">
                            arrow_drop_down
                          </Icons>
                        ) : (
                          <Icons className="material-symbols-outlined">
                            trending_flat
                          </Icons>
                        )}
                        {(ticker.change_rate * 100).toFixed(2)}%
                      </span>
                    </TdChangeDiv>
                  </Td>
                  <Td>
                    <TdNomalDiv>
                      <span>
                        {ticker.acc_trade_volume_24h
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        {data.market.substring(4)}
                      </span>
                    </TdNomalDiv>
                  </Td>
                  <Td>
                    <TdNomalDiv>
                      <span>
                        ₩
                        {ticker.acc_trade_price_24h
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </TdNomalDiv>
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
                    <TdNomalDiv>
                      <span>
                        ₩
                        {(data.supply * ticker.trade_price)
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </TdNomalDiv>
                  </Td>
                  <Td>
                    <Chart history={data.historyArr} change={ticker.change} />
                  </Td>
                </Tr>
              )
          )
        )
      ) : (
        <LoadingTr>
          <td>Loading...</td>
        </LoadingTr>
      )}
    </>
  );
}
export default React.memo(TrBox);
