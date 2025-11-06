import { memo, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { useDeferredValue, useState, useEffect, useRef } from "react";
import useBithumbNames from "../../../libs/useBithumbNames";
import useBithumbTickers from "../../../libs/useBithumbTickers";
import useBithumbTickersSocket from "../../../libs/useBithumbSocket";
import { useCoinSearch } from "../../../hooks/useCoinSearch";

const COLOR_UP = "#c84a31";
const COLOR_DOWN = "#1261c4";

const Sidebar = styled.aside`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 16px;
  position: sticky;
  top: 20px;
  max-height: calc(100vh - 40px);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    position: static;
    max-height: none;
  }
`;

const SearchInput = styled.input`
  font-family: "Inter", sans-serif;
  border: 1px solid #1e2329;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 14px;
  width: 100%;
  background: #0b0e11;
  margin-bottom: 16px;
  color: #e8ecef;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #5e6673;
  }

  &:focus {
    outline: none;
    border-color: #2b3139;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #0b0e11;
  }
  &::-webkit-scrollbar-thumb {
    background: #2b3139;
    border-radius: 3px;
  }
`;

const flashUp = keyframes`
  from { background-color: rgba(47, 193, 156, 0.18); }
  to { background-color: transparent; }
`;
const flashDown = keyframes`
  from { background-color: rgba(255, 77, 79, 0.18); }
  to { background-color: transparent; }
`;

const Item = styled.li<{ active?: boolean; flash?: "up" | "down" }>`
  margin-bottom: 10px;

  a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    column-gap: 12px;
    padding: 12px;
    border-radius: 0;
    color: #e8ecef;
    text-decoration: none;
    background: ${(p) => (p.active ? "#1e2329" : "transparent")};
    border-left: 2px solid ${(p) => (p.active ? "#f0b90b" : "transparent")};
    transition: background 0.2s ease;

    ${(p) =>
      p.flash === "up"
        ? css`
            animation: ${flashUp} 800ms ease-out;
          `
        : p.flash === "down"
        ? css`
            animation: ${flashDown} 800ms ease-out;
          `
        : null}
  }

  .name {
    display: flex;
    gap: 8px;
    align-items: baseline;
    font-weight: 500;
    font-size: 14px;
    color: #e8ecef;
  }

  .name .sym {
    color: #8c8d9a;
    font-size: 12px;
    font-weight: 500;
  }

  .right {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }

  .price {
    font-weight: 600;
    font-size: 14px;
    color: #e8ecef;
  }

  .chg {
    font-size: 12px;
    font-weight: 500;
  }
`;

interface CoinListItemProps {
  market: string;
  english_name: string;
  korean_name: string;
  price: number | null;
  change: number;
  isActive: boolean;
  flash?: "up" | "down";
}

const CoinListItem = memo(function CoinListItem({
  market,
  english_name,
  price,
  change,
  isActive,
  flash,
}: CoinListItemProps) {
  const chgColor = useMemo(() => {
    if (change > 0) return COLOR_UP;
    if (change < 0) return COLOR_DOWN;
    return "#8c8d9a";
  }, [change]);

  return (
    <Item active={isActive} flash={flash}>
      <Link to={`/coin/${market}`}>
        <span className="name">
          <span>{english_name}</span>
          <span className="sym">{market.substring(4)}</span>
        </span>
        <span className="right">
          <span className="price">
            {price !== null ? price.toLocaleString() : "-"}
          </span>
          <span className="chg" style={{ color: chgColor }}>
            {`${(change * 100).toFixed(2)}%`}
          </span>
        </span>
      </Link>
    </Item>
  );
});

interface CoinSidebarProps {
  currentMarket: string;
}

function CoinSidebar({ currentMarket }: CoinSidebarProps) {
  const { nameData } = useBithumbNames(true);
  const [query, setQuery] = useState("");
  const { filtered } = useCoinSearch(nameData, query, true);

  const filteredMarkets = useMemo(
    () => filtered.map((d) => d.market),
    [filtered]
  );

  const { tickerHttpData: sideHttp } = useBithumbTickers(filteredMarkets);
  const { liveMap: sideLive } = useBithumbTickersSocket(filteredMarkets);

  const sideTickMap = useMemo(() => {
    const m = new Map<string, { price: number; chg: number }>();
    for (const t of sideHttp || [])
      m.set(t.market, { price: t.trade_price, chg: t.signed_change_rate });
    sideLive.forEach((v, k) =>
      m.set(k, { price: v.trade_price, chg: v.signed_change_rate })
    );
    return m;
  }, [sideHttp, sideLive]);

  const prevPriceRef = useRef<Map<string, number>>(new Map());
  const [flashMap, setFlashMap] = useState<
    Record<string, "up" | "down" | undefined>
  >({});

  useEffect(() => {
    const next: Record<string, "up" | "down"> = {};
    sideTickMap.forEach((v, k) => {
      const prev = prevPriceRef.current.get(k);
      if (prev !== undefined && v.price !== prev) {
        next[k] = v.price > prev ? "up" : "down";
      }
    });
    prevPriceRef.current = new Map(
      Array.from(sideTickMap.entries()).map(([k, v]) => [k, v.price])
    );
    if (Object.keys(next).length > 0) {
      setFlashMap((old) => ({ ...old, ...next }));
      const timer = setTimeout(() => {
        setFlashMap((old) => {
          const copy = { ...old } as Record<string, "up" | "down" | undefined>;
          Object.keys(next).forEach((k) => delete copy[k]);
          return copy;
        });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [sideTickMap]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    []
  );

  return (
    <Sidebar>
      <SearchInput
        placeholder="Search by name (EN/KR) or symbol"
        value={query}
        onChange={handleSearchChange}
      />
      <List>
        {filtered.map((d) => {
          const info = sideTickMap.get(d.market);
          return (
            <CoinListItem
              key={d.market}
              market={d.market}
              english_name={d.english_name}
              korean_name={d.korean_name}
              price={info?.price ?? null}
              change={info?.chg ?? 0}
              isActive={d.market === currentMarket}
              flash={flashMap[d.market]}
            />
          );
        })}
      </List>
    </Sidebar>
  );
}

export default memo(CoinSidebar);

