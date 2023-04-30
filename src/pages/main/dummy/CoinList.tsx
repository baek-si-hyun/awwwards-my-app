/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  circulatingSupply,
  fetchCoinHistory,
  fetchCoins,
} from "../../../services/coinApi";
import {
  ICoinHistory,
  ICoinListMerge,
  ICoins,
} from "../../../interface/interface";
import Colgroup from "./coinList/ColGroup";
import TheadTr from "./coinList/TheadTr";
import TbodyTr from "./coinList/TbodyTr";

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
    setCount(() => 0);
  };
  const [prev, setPrev] = useState(false);
  const resetDisable = () => {
    if (count === 0) {
      setPrev(() => true);
    } else {
      setPrev(() => false);
    }
  };
  const [next, setNext] = useState(false);
  const moreDisable = () => {
    if (count === 110) {
      setNext(() => true);
    } else {
      setNext(() => false);
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

  const { data: historyData } = useQuery<ICoinHistory[][]>(
    ["history", count],
    () => fetchCoinHistory(coinList!),
    {
      enabled: !!coinList,
      refetchOnWindowFocus: false,
    }
  );

  const mergeFn = () => {
    let newArr: ICoinListMerge[] = [];
    nameData?.forEach((nameArr) => {
      circulatingSupply.forEach((supplyArr) => {
        if (nameArr.market === supplyArr.id) {
          historyData?.forEach((historyArr) => {
            if (nameArr.market === historyArr[0].market) {
              let newObject = {
                ...nameArr,
                ...supplyArr,
                historyArr,
              };
              return newArr.push(newObject);
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
    if (historyData) {
      mergeFn();
    }
    resetDisable();
    moreDisable();
  }, [historyData]);
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
              {mergeData && coinList && (
                <TbodyTr coinList={coinList} mergeData={mergeData} />
              )}
            </tbody>
          </ListTable>
        </TableBox>
        <BtnBox>
          <ResetBtn onClick={resetHandler} disabled={prev} reset={prev}>
            prev
          </ResetBtn>
          <MoreBtn onClick={countHandler} disabled={next} more={next}>
            next
          </MoreBtn>
        </BtnBox>
      </WrapperInner>
    </CoinListWrapper>
  );
}
export default React.memo(CoinList);
