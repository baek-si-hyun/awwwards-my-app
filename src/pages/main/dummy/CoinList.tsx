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
import TbodyTr from "./coinList/Tbody/TbodyTr";

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
  justify-content: center;
  gap: 0.5vw;
  margin-top: 40px;
`;
const PageBtn = styled.button<{ selected: boolean }>`
  font-family: "Apercu", sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  font-size: 15px;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.selected ? "#333" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  will-change: background-color, color;
`;

function CoinList() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const pageNation = (pageNum: number) => {
    setPage(() => pageNum);
  };
  useEffect(() => {
    updateCount(page);
  }, [page]);
  const updateCount = (page: number) => {
    setCount(() => page * 10);
  };
  const makePageBtn = () => {
    const pageButtons = [];
    for (let i = 1; i <= 12; i++) {
      pageButtons.push(
        <PageBtn onClick={() => pageNation(i)} key={i} selected={i === page}>
          {i}
        </PageBtn>
      );
    }
    return pageButtons;
  };

  const [mergeData, setMergeData] = useState<ICoinListMerge[]>([]);
  const { data: nameData } = useQuery<ICoins[]>(["name"], () => fetchCoins(), {
    select: (data) => data.filter((data) => !data.market.indexOf("KRW")),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const coinList = nameData
    ?.map((data) => data.market)
    .slice(count - 10, count);

  const { data: historyData } = useQuery<ICoinHistory[][]>(
    ["history", count],
    () => fetchCoinHistory(coinList!),
    {
      enabled: !!coinList,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const mergeFn = async () => {
    let newArr: ICoinListMerge[] = [];
    await Promise.all(
      nameData!.map(async (nameArr) => {
        const supplyArr = circulatingSupply.find(
          (supply) => supply.id === nameArr.market
        );
        if (supplyArr) {
          const historyArr = historyData!.find(
            (history) => history[0].market === nameArr.market
          );
          if (historyArr) {
            let newObject = { ...nameArr, ...supplyArr, historyArr };
            newArr.push(newObject);
          }
        }
      })
    ).then(() => setMergeData(() => newArr));
  };

  useEffect(() => {
    if (historyData) {
      mergeFn();
    }
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
                <TbodyTr
                  coinList={coinList}
                  mergeData={mergeData}
                  count={count}
                />
              )}
            </tbody>
          </ListTable>
        </TableBox>
        <BtnBox>{makePageBtn()}</BtnBox>
      </WrapperInner>
    </CoinListWrapper>
  );
}
export default React.memo(CoinList);
