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
import ReactApexChart from "react-apexcharts";

const CoinListWrapper = styled.div`
  width: 100%;
`;

const WrapperInner = styled.div``;
const ListTable = styled.table`
  width: 100%;
`;
const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr`
  border-bottom: 1px solid #e2e2e2;
`;
const NameTh = styled.th`
  text-align: start;
  vertical-align: middle;
  padding: 10px;
  padding-left: 1vw;
  font-weight: 900;
`;
const Th = styled.th`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
  font-weight: 900;
  :last-child {
    padding-right: 1vw;
  }
`;
const Td = styled.td`
  text-align: end;
  vertical-align: middle;
  padding: 10px;
`;
const NameTd = styled.td`
  text-align: start;
  vertical-align: middle;
`;
const Namediv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1vw;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  div span + span {
    font-weight: 600;
    color: #808a9d;
  }
`;
const TdNomalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TdFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TdChangeDiv = styled(TdFlexDiv)<{ change: string }>`
  color: ${(props) =>
    props.change === "EVEN"
      ? "#222"
      : props.change === "RISE"
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
const ApexChartDiv = styled.div`
  max-width: 100%;
  max-height: 53px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ApexChart = styled(ReactApexChart)`
  max-width: 164px;
  color: ${(props) =>
    props.change === "EVEN"
      ? "#222"
      : props.change === "RISE"
      ? "#ea3943"
      : props.change === "FALL"
      ? " #16c784"
      : "#222"};
`;
const ColName = styled.col`
  width: 17%;
  min-width: auto;
`;
const ColPrice = styled.col`
  width: 10%;
  min-width: auto;
`;
const ColChange1 = styled.col`
  width: 11%;
  min-width: auto;
`;
const ColChange2 = styled.col`
  width: 13%;
  min-width: auto;
`;
const ColVolume = styled.col`
  width: 13%;
  min-width: auto;
`;
const ColSupply = styled.col`
  width: 13%;
  min-width: auto;
`;
const ColCap = styled.col`
  width: 13%;
  min-width: auto;
`;
const ColChart = styled.col`
  width: 10%;
  min-width: auto;
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
        <ListTable>
          <colgroup>
            <ColName />
            <ColPrice />
            <ColChange1 />
            <ColChange2 />
            <ColVolume />
            <ColSupply />
            <ColCap />
            <ColChart />
          </colgroup>
          <Thead>
            <Tr>
              <NameTh>
                <span>Name</span>
              </NameTh>
              <Th>
                <span>Price</span>
              </Th>
              <Th>
                <span>Change(24h)</span>
              </Th>
              <Th>
                <span>Volume Rate (24h)</span>
              </Th>
              <Th>
                <span>Volume Price (24h)</span>
              </Th>
              <Th>
                <span>Circulating Supply</span>
              </Th>
              <Th>
                <span>Market Cap</span>
              </Th>
              <Th>
                <span>Last 30 Days</span>
              </Th>
            </Tr>
          </Thead>
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
                    <TdFlexDiv>
                      <span>
                        {data.acc_trade_volume_24h
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        {data.market.substring(4)}
                      </span>
                    </TdFlexDiv>
                  </Td>
                  <Td>
                    <TdFlexDiv>
                      <span>
                        ₩
                        {data.acc_trade_price_24h
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </TdFlexDiv>
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
                    <ApexChartDiv>
                      <ApexChart
                        change={data.change}
                        type="line"
                        series={[
                          {
                            data:
                              data.historyArr.map((price) => ({
                                x: price.timestamp ,
                                y: price.prev_closing_price,
                              })) ?? [],
                          },
                        ]}
                        options={{
                          chart: {
                            type: "line",
                            background: "transparent",
                            zoom: { enabled: false },
                            toolbar: {
                              show: false,
                            },
                            animations: {
                              enabled: false,
                            },
                          },
                          grid: {
                            show: false,
                          },
                          legend: {
                            show: false,
                          },
                          dataLabels: {
                            enabled: false,
                          },
                          labels: {
                            show: false,
                          },
                          tooltip: {
                            enabled: false,
                          },
                          markers: { size: 0 },
                          stroke: { curve: "smooth", width: 2 },
                          colors: [
                            data.change === "RISE"
                              ? "#ea3943"
                              : data.change === "EVEN"
                              ? "#222"
                              : "#16c784",
                          ],
                          xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: false },
                            type: "datetime",
                          },
                          yaxis: { show: false },
                        }}
                      />
                    </ApexChartDiv>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </ListTable>
      </WrapperInner>
    </CoinListWrapper>
  );
}
export default CoinList;
