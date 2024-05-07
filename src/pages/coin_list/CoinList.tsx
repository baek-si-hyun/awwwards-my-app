/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colgroup from "./ColGroup";
import TheadTr from "./TheadTr";
import TbodyTr from "./TbodyTr";
import {
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../main/common/mainCommon";
import useCoinNames from "../../libs/useCoinNames";

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
  const { nameData } = useCoinNames(true);
  const makePageBtn = () => {
    const pageButtons = [];
    if (nameData) {
      let pageLength = Math.ceil(nameData.length / 10);
      for (let i = 1; i <= pageLength; i++) {
        pageButtons.push(
          <PageBtn onClick={() => pageNation(i)} key={i} selected={i === page}>
            {i}
          </PageBtn>
        );
      }
      console.log(pageButtons)
      return pageButtons;
    }
  };
  console.log(makePageBtn());
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
              <TbodyTr count={count} />
            </tbody>
          </ListTable>
        </TableBox>
        <BtnBox>{makePageBtn()}</BtnBox>
      </Inner>
    </Container>
  );
}
export default React.memo(CoinList);
