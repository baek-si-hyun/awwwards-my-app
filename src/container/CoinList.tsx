/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useBithumbNames from "../libs/useBithumbNames";
import { useCoinSearch } from "../hooks/useCoinSearch";
import {
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../pages/main/common/mainCommon";
import Colgroup from "../components/CoinList/ColGroup";
import TheadTr from "../components/CoinList/TheadTr";
import TbodyTr from "../components/CoinList/TbodyTr";
import { IMAGES } from "../constants/images";
import ImageWithSkeleton from "../components/common/ImageWithSkeleton";

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

const BithumbLogo = styled(ImageWithSkeleton)`
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
  const handleResize = useCallback(() => {
    setVw(typeof window !== "undefined" ? window.innerWidth : 1440);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const pageNation = useCallback((pageNum: number) => {
    setPage(pageNum);
  }, []);

  const { nameData } = useBithumbNames(true);
  const { filtered } = useCoinSearch(nameData, query, false);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
      setPage(1);
    },
    []
  );

  useEffect(() => {
    const total = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (page > total) setPage(total);
  }, [filtered, page, pageSize]);
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);
  const pageButtons = useMemo(() => {
    const buttons = [];
    const list = filtered;
    const total = Math.max(1, Math.ceil(list.length / pageSize));
    const maxButtons = vw >= 1280 ? 9 : vw >= 768 ? 7 : 5;

    // Ensure current page is within bounds
    const curr = Math.min(page, total);

    // Always show first and last; show neighbors around current
    const siblings = Math.max(1, Math.floor((maxButtons - 3) / 2));
    const left = Math.max(2, curr - siblings);
    const right = Math.min(total - 1, curr + siblings);

    // First page
    buttons.push(
      <PageBtn onClick={() => pageNation(1)} key={1} selected={curr === 1}>
        1
      </PageBtn>
    );
    // Left ellipsis
    if (left > 2) buttons.push(<span key="left-ellipsis">...</span>);
    // Middle range
    for (let i = left; i <= right; i++) {
      buttons.push(
        <PageBtn onClick={() => pageNation(i)} key={i} selected={i === curr}>
          {i}
        </PageBtn>
      );
    }
    // Right ellipsis
    if (right < total - 1) buttons.push(<span key="right-ellipsis">...</span>);
    // Last page
    if (total > 1) {
      buttons.push(
        <PageBtn
          onClick={() => pageNation(total)}
          key={total}
          selected={curr === total}
        >
          {total}
        </PageBtn>
      );
    }
    return buttons;
  }, [filtered, page, pageSize, vw, pageNation]);
  return (
    <Container>
      <Inner>
        <TextBox>
          <TextBoxMiddle>CoinList</TextBoxMiddle>
          <TextBoxbottom>
            Combination of{" "}
            <BithumbLogo
              sources={IMAGES.COMMON.BITHUMB_LOGO}
              alt="Bithumb"
              fullHeight
            />
            , React-Query
          </TextBoxbottom>
        </TextBox>
        <ControlsBar>
          <SearchInput
            placeholder="Search by name (EN/KR) or symbol"
            value={query}
            onChange={handleSearchChange}
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
        <BtnBox>{pageButtons}</BtnBox>
      </Inner>
    </Container>
  );
}
export default React.memo(CoinList);
