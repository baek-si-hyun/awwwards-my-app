/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Colgroup from "./ColGroup";
import TheadTr from "./TheadTr";
import TbodyTr from "./TbodyTr";
import {
  circulatingSupply,
  fetchCoinHistory,
  fetchCoins,
} from "../../../services/coinApi";
import { ICoinHistory, ICoinListMerge, ICoins } from "../../../interface/icoin";
import { TextBox, TextBoxMiddle, TextBoxbottom } from "../../common/mainCommon";

const Container = styled.section`
  width: 100%;
  margin-top: -5rem;
  padding: 4vw 2.7vw 15vw 2.7vw;
  border-radius: 5vw 5vw 0 0;
  background-color: #f8f8f8;
  position: relative;
  z-index: 3;
  @media (max-width: 1050px) {
    & {
      padding-bottom: 12rem;
    }
  }
`;

const Inner = styled.div`
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

  @media (max-width: 650px) {
    & {
      font-size: 2.3vw;
    }
  }
  @media (max-width: 480px) {
    & {
      font-size: 3vw;
    }
  }
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
      refetchOnWindowFocus: true,
    }
  );

  const mergeFn = useCallback(async () => {
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
  }, [coinList]);

  useEffect(() => {
    if (historyData) {
      mergeFn();
    }
  }, [historyData]);

  return (
    <Container>
      <Inner>
        <TextBox>
          <TextBoxMiddle>CoinList</TextBoxMiddle>
          <TextBoxbottom>
            Combination of UPBIT Websocket, React-Query
          </TextBoxbottom>
        </TextBox>
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
      </Inner>
    </Container>
  );
}
export default React.memo(CoinList);
