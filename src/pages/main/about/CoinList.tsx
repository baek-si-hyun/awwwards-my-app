import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  circulatingSupply,
  fetchCoinHistory,
  fetchCoins,
  fetchCoinTickers,
} from "../../../services/coinapi";
import {
  ICoinHistory,
  ICoinListMerge,
  ICoins,
  ICoinTickers,
} from "../../../interface/interface";
import Colgroup from "./coinListTable/ColGroup";
import Thead from "./coinListTable/Thead";
import Chart from "./coinListTable/Chart";
const CoinListWrapper = styled.div`
  width: 100%;
`;

const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableBox = styled.div`
  @media (max-width: 1279px) {
    & {
      overflow-x: scroll;
    }
  }
`;
const ListTable = styled.table`
  width: 100%;
  font-weight: 900;
`;

const Tbody = styled.tbody``;
const Tr = styled.tr`
  border-bottom: 1px solid #e2e2e2;
  :first-child {
    border-top: 1px solid #e2e2e2;
  }
`;

const Td = styled.td`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  white-space: nowrap;
`;
const NameTd = styled.td`
  text-align: start;
  vertical-align: middle;
  position: sticky;
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
      ? "#ea3943"
      : props.change === "FALL"
      ? " #16c784"
      : "#222"};
`;
const Icons = styled.span`
  vertical-align: middle;
`;
const Img = styled.img`
  margin-right: 5px;
  max-width: 20px;
`;
function CoinList() {
  const [mergeData, setMergeData] = useState<ICoinListMerge[]>([]);
  const { data: nameData } = useQuery<ICoins[]>(["name"], () => fetchCoins(), {
    select: (data) => data.filter((data) => !data.market.indexOf("KRW")),
  });

  const coinList = nameData?.map((data) => data.market).slice(0, 10);
  const { data: tickerData } = useQuery<ICoinTickers[]>(
    ["ticker"],
    () => fetchCoinTickers(coinList!),
    {
      enabled: !!coinList,
    }
  );
  const { isLoading, data: historyData } = useQuery<ICoinHistory[][]>(
    ["history"],
    () => fetchCoinHistory(coinList!),
    {
      enabled: !!tickerData,
    }
  );
  const mergeFn = () => {
    const newTickerData = tickerData?.map((data) => data).flat();
    let newArr: ICoinListMerge[] = [];
    nameData?.forEach((nameArr, nameIndex) => {
      newTickerData?.forEach((tickerArr, tickerIndex) => {
        if (nameIndex === tickerIndex) {
          circulatingSupply.forEach((supplyArr) => {
            if (tickerArr.market === supplyArr.id) {
              historyData?.forEach((historyArr, histroyIndex) => {
                if (tickerIndex === histroyIndex) {
                  let newObject = {
                    ...nameArr,
                    ...tickerArr,
                    ...supplyArr,
                    historyArr,
                  };
                  return newArr.push(newObject);
                }
              });
            }
          });
        }
      });
    });
    setMergeDataFn(newArr);
  };

  const setMergeDataFn = (newArr: ICoinListMerge[]) => {
    setMergeData(() => newArr);
  };

  useEffect(() => {
    if (!isLoading) {
      mergeFn();
    }
  }, [isLoading]);

  return (
    <CoinListWrapper>
      <WrapperInner>
        <TableBox>
          <ListTable>
            <Colgroup />
            <Thead />
            <Tbody>
              {mergeData &&
                mergeData.map((data, index) => (
                  <Tr key={index}>
                    <NameTd>
                      <Namediv>
                        <Img
                          src={`https://static.upbit.com/logos/${data.market.substring(
                            4
                          )}.png`}
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
                          {data.trade_price
                            .toFixed(0)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </TdNomalDiv>
                    </Td>
                    <Td>
                      <TdChangeDiv change={data.change}>
                        <span>₩{data.change_price}</span>
                        <span>
                          {data.change === "EVEN" ? (
                            <Icons className="material-symbols-outlined">
                              check_indeterminate_small
                            </Icons>
                          ) : data.change === "RISE" ? (
                            <Icons className="material-symbols-outlined">
                              arrow_drop_up
                            </Icons>
                          ) : data.change === "FALL" ? (
                            <Icons className="material-symbols-outlined">
                              arrow_drop_down
                            </Icons>
                          ) : (
                            <Icons className="material-symbols-outlined">
                              trending_flat
                            </Icons>
                          )}
                          {(data.change_rate * 100).toFixed(2)}%
                        </span>
                      </TdChangeDiv>
                    </Td>
                    <Td>
                      <TdNomalDiv>
                        <span>
                          {data.acc_trade_volume_24h
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
                          {data.acc_trade_price_24h
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
                          {(data.supply * data.trade_price)
                            .toFixed(0)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                      </TdNomalDiv>
                    </Td>
                    <Td>
                      <Chart data={data}  />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </ListTable>
        </TableBox>
      </WrapperInner>
    </CoinListWrapper>
  );
}
export default CoinList;
