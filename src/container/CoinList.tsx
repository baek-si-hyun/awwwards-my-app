/* eslint-disable react-hooks/exhaustive-deps */
import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useBithumbNames from "../libs/useBithumbNames";
import { ICoins } from "../interface/icoin";
import {
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../pages/main/common/mainCommon";
import Colgroup from "../components/CoinList/ColGroup";
import TheadTr from "../components/CoinList/TheadTr";
import TbodyTr from "../components/CoinList/TbodyTr";
import { IMAGES } from "../constants/images";

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
const ControlsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 10px;
`;
const SearchInput = styled.input`
  font-family: "Apercu", sans-serif;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 14px;
  width: 240px;
  max-width: 48vw;
  background: #fff;
  &:focus {
    outline: none;
    border-color: #333;
  }
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

const BithumbLogo = styled.img`
  height: 2em;
  display: inline-block;
  vertical-align: -0.1em;
  margin: 0 0.2em;
`;

function CoinList() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [query, setQuery] = useState("");
  const [vw, setVw] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  useEffect(() => {
    const onResize = () =>
      setVw(typeof window !== "undefined" ? window.innerWidth : 1440);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const pageNation = (pageNum: number) => setPage(pageNum);
  const { nameData } = useBithumbNames(true);
  const deferredQuery = useDeferredValue(query);
  const filtered = useMemo<ICoins[]>(() => {
    if (!nameData) return [];
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return nameData;
    return nameData.filter((d) => {
      const sym = d.market.substring(4).toLowerCase();
      const en = (d.english_name || "").toLowerCase();
      const ko = (d.korean_name || "").toLowerCase();
      return en.includes(q) || ko.includes(q) || sym.includes(q);
    });
  }, [nameData, deferredQuery]);
  useEffect(() => {
    const total = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (page > total) setPage(total);
  }, [filtered, page, pageSize]);
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);
  const makePageBtn = () => {
    const pageButtons = [];
    const list = filtered;
    const total = Math.max(1, Math.ceil(list.length / pageSize));
    const maxButtons = vw >= 1280 ? 9 : vw >= 768 ? 7 : 5;
    const makeRange = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        pageButtons.push(
          <PageBtn onClick={() => pageNation(i)} key={i} selected={i === page}>
            {i}
          </PageBtn>
        );
      }
    };

    // Ensure current page is within bounds
    const curr = Math.min(page, total);

    // Always show first and last; show neighbors around current
    const siblings = Math.max(1, Math.floor((maxButtons - 3) / 2));
    const left = Math.max(2, curr - siblings);
    const right = Math.min(total - 1, curr + siblings);

    // First page
    pageButtons.push(
      <PageBtn onClick={() => pageNation(1)} key={1} selected={curr === 1}>
        1
      </PageBtn>
    );
    // Left ellipsis
    if (left > 2) pageButtons.push(<span key="left-ellipsis">...</span>);
    // Middle range
    makeRange(left, right);
    // Right ellipsis
    if (right < total - 1)
      pageButtons.push(<span key="right-ellipsis">...</span>);
    // Last page
    if (total > 1) {
      pageButtons.push(
        <PageBtn
          onClick={() => pageNation(total)}
          key={total}
          selected={curr === total}
        >
          {total}
        </PageBtn>
      );
    }
    return pageButtons;
  };
  return (
    <Container>
      <Inner>
        <TextBox>
          <TextBoxMiddle>CoinList</TextBoxMiddle>
          <TextBoxbottom>
            Combination of{" "}
            <BithumbLogo src={IMAGES.COMMON.BITHUMB_LOGO} alt="Bithumb" />,
            React-Query
          </TextBoxbottom>
        </TextBox>
        <ControlsBar>
          <SearchInput
            placeholder="Search by name (EN/KR) or symbol"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
        </ControlsBar>
        <TableBox>
          <ListTable>
            <Colgroup />
            <thead>
              <TheadTr />
            </thead>
            <tbody>
              <TbodyTr nameData={paged} />
            </tbody>
          </ListTable>
        </TableBox>
        <BtnBox>{makePageBtn()}</BtnBox>
      </Inner>
    </Container>
  );
}
export default React.memo(CoinList);
