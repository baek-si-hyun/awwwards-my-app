/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  circulatingSupply,
  fetchCoinHistory,
  fetchCoins,
  useCoinTickers,
} from "../../../services/coinApi";
import {
  ICoinHistory,
  ICoinListMerge,
  ICoins,
  ICoinTickers,
} from "../../../interface/interface";
import Colgroup from "./coinList/ColGroup";
import TheadTr from "./coinList/TheadTr";
import TbodyTr from "./coinList/TbodyTr";
import { constSelector } from "recoil";
import React from "react";

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
export const Tr = styled.tr`
  border-bottom: 1px solid #e2e2e2;
  :first-child {
    border-top: 1px solid #e2e2e2;
  }
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5vw;
  margin-top: 40px;
  @media (max-width: 1050px) {
    & {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
const Btn = styled.button`
  font-family: "Apercu", sans-serif;
  font-weight: 600;
  border-radius: 7px;
  font-size: 15px;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;
`;
const MoreBtn = styled(Btn)<{ more: boolean }>`
  background-color: #f8f8f8;
  border: 2px solid ${(props) => (props.more === true ? "#e2e2e2" : "#222")};
  color: ${(props) => (props.more === true ? "#e2e2e2" : "#222")};
  :hover {
    background-color: ${(props) => (props.more === true ? "#f8f8f8" : "#222")};
    color: ${(props) => (props.more === true ? "#e2e2e2" : "#fff")};
  }
`;
const ResetBtn = styled(Btn)<{ reset: boolean }>`
  background-color: #f8f8f8;
  border: 2px solid ${(props) => (props.reset === true ? "#e2e2e2" : "#222")};
  color: ${(props) => (props.reset === true ? "#e2e2e2" : "#222")};
  :hover {
    background-color: ${(props) => (props.reset === true ? "#f8f8f8" : "#222")};
    color: ${(props) => (props.reset === true ? "#e2e2e2" : "#fff")};
  }
`;
function CoinList() {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    if (count <= 110) {
      setCount((count) => count + 10);
    } else {
      return;
    }
  };
  const resetHandler = () => {
    setMergeData(() => []);
    setCount(() => 0);
  };
  const [reset, setReset] = useState(false);
  const resetDisable = () => {
    if (count === 0) {
      setReset(() => true);
    } else {
      setReset(() => false);
    }
  };
  const [more, setMore] = useState(false);
  const moreDisable = () => {
    if (count === 110 || !mergeData) {
      setMore(() => true);
    } else {
      setMore(() => false);
    }
  };
  const [mergeData, setMergeData] = useState<ICoinListMerge[]>([]);
  const { data: nameData } = useQuery<ICoins[]>(["name"], () => fetchCoins(), {
    select: (data) => data.filter((data) => !data.market.indexOf("KRW")),
    refetchOnWindowFocus: false,
  });

  const coinList = nameData
    ?.map((data) => data.market)
    .slice(count, count + 10);
  const { isLoading: tickerLoading, data: tickerData } = useCoinTickers(
    coinList!
  );
  const { isLoading: historyLoading, data: historyData } = useQuery<
    ICoinHistory[][]
  >(["history", count], () => fetchCoinHistory(coinList!), {
    enabled: !!coinList,
    refetchOnWindowFocus: false,
  });
  const mergeFn = () => {
    console.log(tickerData);
  };

  const setMergeDataFn = (newArr: ICoinListMerge[]) => {
    setMergeData(() => newArr);
  };

  useEffect(() => {
    if (!tickerData) {
      mergeFn();
    }
    resetDisable();
    moreDisable();
    console.log(tickerData);
  }, [tickerData, count]);
  return (
    <CoinListWrapper>
      <WrapperInner>
        <TableBox>
          <ListTable>
            <Colgroup />
            <thead>
              <TheadTr />
            </thead>
            <tbody>
              {mergeData &&
                mergeData.map((data, index) => (
                  <TbodyTr data={data} key={index} />
                ))}
            </tbody>
          </ListTable>
        </TableBox>
        <BtnBox>
          <div></div>
          <MoreBtn onClick={countHandler} disabled={more} more={more}>
            more
          </MoreBtn>
          <ResetBtn onClick={resetHandler} disabled={reset} reset={reset}>
            reset
          </ResetBtn>
        </BtnBox>
      </WrapperInner>
    </CoinListWrapper>
  );
}
export default React.memo(CoinList);
