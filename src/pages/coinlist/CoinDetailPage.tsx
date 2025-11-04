import { useDeferredValue, useMemo, useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import TradingViewChart from "../../components/TradingViewChart";
import useBithumbNames from "../../libs/useBithumbNames";
import useBithumbTickers from "../../libs/useBithumbTickers";
import useBithumbTickersSocket from "../../libs/useBithumbSocket";
import OrderBook from "../../components/OrderBook";
import DepthChart from "../../components/DepthChart";
import Sparkline from "../../components/Sparkline";
import { useQuery } from "@tanstack/react-query";
import { fetchBithumbCandles } from "../../services/bithumbApi";
import { ICoinHistory } from "../../interface/icoin";

const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 2.7vw 10rem 2.7vw;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
`;

const Back = styled(Link)`
  font-family: "Apercu", sans-serif;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  border: 1px solid #ddd;
  padding: 6px 10px;
  border-radius: 6px;
  &:hover { background: #fff; }
`;

const ThinBar = styled.div<{ change?: number }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 12px;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px;
  background: rgba(255,255,255,0.8);
  backdrop-filter: saturate(180%) blur(10px);
  margin-bottom: 16px;
  font-weight: 600;
  color: #222;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  .price { font-size: 22px; letter-spacing: -0.02em; }
  .chg { color: ${(p) => (p.change && p.change < 0 ? "#1261c4" : p.change && p.change > 0 ? "#c84a31" : "#555")}; }
`;

const SubStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 10px 0 16px 0;
  > div {
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 12px;
    padding: 12px 14px;
    box-shadow: 0 8px 22px rgba(0,0,0,0.05);
  }
  small { color: #666; }
  strong { font-size: 17px; letter-spacing: -0.01em; }
`;

const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px 0 12px 0;
  button {
    border: 1px solid rgba(0,0,0,0.06);
    background: rgba(255,255,255,0.8);
    border-radius: 999px;
    padding: 8px 14px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
  }
  button:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
  .on {
    background: #222;
    color: #fff;
    border-color: #222;
    box-shadow: 0 8px 20px rgba(34,34,34,0.25);
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 18px;
  align-items: start;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`;

const Sidebar = styled.aside`
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px;
  padding: 12px;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 120px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.8);
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

const SearchInput = styled.input`
  font-family: "Apercu", sans-serif;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  &:focus {
    outline: none;
    border-color: #555;
    box-shadow: 0 0 0 4px rgba(0,0,0,0.06);
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
`;
const flashUp = keyframes`
  from { background-color: rgba(200, 74, 49, 0.14); }
  to { background-color: transparent; }
`;
const flashDown = keyframes`
  from { background-color: rgba(18, 97, 196, 0.14); }
  to { background-color: transparent; }
`;

const Item = styled.li<{ active?: boolean; flash?: "up" | "down" }>`
  a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    column-gap: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    color: #222;
    text-decoration: none;
    background: ${(p) => (p.active ? "#f0f4ff" : "transparent")};
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
  .name { display: flex; gap: 6px; align-items: baseline; }
  .name .sym { color: #808a9d; font-size: 12px; }
  .right { text-align: right; display: flex; flex-direction: column; align-items: flex-end; }
  .price { font-weight: 700; }
  .chg { font-size: 12px; }
  a:hover { background: #f5f7ff; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04); }
`;

function CoinDetailPage() {
  const params = useParams<{ market: string }>();
  const market = params.market || ""; // e.g., KRW-BTC
  const { nameData } = useBithumbNames(true);
  const [query, setQuery] = useState("");
  const dq = useDeferredValue(query);

  const info = useMemo(() => {
    const found = (nameData || []).find((d) => d.market === market);
    if (!found) return null;
    return {
      base: market.split("-")[1],
      quote: market.split("-")[0],
      english_name: found.english_name,
      korean_name: found.korean_name,
    };
  }, [nameData, market]);

  // current ticker
  const { tickerHttpData } = useBithumbTickers([market]);
  const { liveMap } = useBithumbTickersSocket([market]);
  const tick = useMemo(() => {
    const t = (tickerHttpData || []).find((t) => t.market === market);
    return liveMap.get(market) || t || null;
  }, [tickerHttpData, liveMap, market]);
  const { data: daily } = useQuery<ICoinHistory[][]>(["bithumb", "daily", market], () => fetchBithumbCandles([market]), {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
    enabled: !!market,
  });
  const spark = (daily?.[0] || []).slice(-30).map((r) => r.prev_closing_price);
  const priceColor = tick?.signed_change_rate && tick.signed_change_rate < 0 ? "#1261c4" : tick?.signed_change_rate && tick.signed_change_rate > 0 ? "#c84a31" : "#222";

  const [mainTab, setMainTab] = useState<"price" | "info">("price");

  // filtered list
  const filtered = useMemo(() => {
    const list = nameData || [];
    const q = dq.trim().toLowerCase();
    if (!q) return list;
    return list.filter((d) => {
      const sym = d.market.substring(4).toLowerCase();
      const en = (d.english_name || "").toLowerCase();
      const ko = (d.korean_name || "").toLowerCase();
      return en.includes(q) || ko.includes(q) || sym.includes(q);
    });
  }, [nameData, dq]);

  // sidebar list prices via live tickers for filtered set
  const filteredMarkets = useMemo(() => filtered.map((d) => d.market), [filtered]);
  const { tickerHttpData: sideHttp } = useBithumbTickers(filteredMarkets);
  const { liveMap: sideLive } = useBithumbTickersSocket(filteredMarkets);
  const sideTickMap = useMemo(() => {
    const m = new Map<string, { price: number; chg: number }>();
    for (const t of sideHttp || []) m.set(t.market, { price: t.trade_price, chg: t.signed_change_rate });
    sideLive.forEach((v, k) => m.set(k, { price: v.trade_price, chg: v.signed_change_rate }));
    return m;
  }, [sideHttp, sideLive]);

  // Flash on price change to avoid frozen feeling
  const prevPriceRef = useRef<Map<string, number>>(new Map());
  const [flashMap, setFlashMap] = useState<Record<string, "up" | "down" | undefined>>({});
  useEffect(() => {
    const next: Record<string, "up" | "down"> = {};
    sideTickMap.forEach((v, k) => {
      const prev = prevPriceRef.current.get(k);
      if (prev !== undefined && v.price !== prev) {
        next[k] = v.price > prev ? "up" : "down";
      }
    });
    // update prev map after diff
    prevPriceRef.current = new Map(Array.from(sideTickMap.entries()).map(([k, v]) => [k, v.price]));
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

  return (
    <Wrapper>
      <Header>
        <Title>
          {info ? (
            <>
              {info.english_name} ({info.base}) / {info.quote}
            </>
          ) : (
            market
          )}
        </Title>
        <Back to="/coinlist">← Coin List</Back>
      </Header>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 700 }}>{info?.english_name} ({info?.base})</span>
          </div>
          <Tabs>
            <button className={mainTab === "price" ? "on" : ""} onClick={() => setMainTab("price")}>시세</button>
            <button className={mainTab === "info" ? "on" : ""} onClick={() => setMainTab("info")}>정보</button>
          </Tabs>
        </div>
        {mainTab === "price" ? (
          <ThinBar change={tick?.signed_change_rate}>
            <span className="price" style={{ color: priceColor }}>{tick?.trade_price?.toLocaleString() ?? "-"} KRW</span>
            <span className="chg">
              {typeof tick?.signed_change_rate === "number" ? `${(tick!.signed_change_rate * 100).toFixed(2)}%` : "-"}
            </span>
            <span className="chg">{typeof tick?.signed_change_price === "number" ? tick!.signed_change_price.toLocaleString() : "-"}</span>
            <div style={{ marginLeft: "auto" }}>{spark && spark.length > 1 ? <Sparkline data={spark} width={140} height={40} color={priceColor} /> : null}</div>
          </ThinBar>
        ) : (
          <ThinBar>
            <span>코인 정보는 추후 추가됩니다.</span>
          </ThinBar>
        )}
      </div>

      <SubStats>
        <div>
          <small>고가(24H)</small>
          <strong style={{ color: "#c84a31" }}>{tick?.high_price_24h ? tick.high_price_24h.toLocaleString() : "-"}</strong>
        </div>
        <div>
          <small>저가(24H)</small>
          <strong style={{ color: "#1261c4" }}>{tick?.low_price_24h ? tick.low_price_24h.toLocaleString() : "-"}</strong>
        </div>
        <div>
          <small>거래량(24H)</small>
          <strong>{tick?.acc_trade_volume_24h ? tick.acc_trade_volume_24h.toLocaleString() : "-"} {info?.base}</strong>
        </div>
        <div>
          <small>거래대금(24H)</small>
          <strong>{tick?.acc_trade_price_24h ? tick.acc_trade_price_24h.toLocaleString() : "-"} KRW</strong>
        </div>
      </SubStats>

      <Content>
        <div>
          {market ? (
            <>
              <TradingViewChart market={market} exchange="BITHUMB" interval="D" theme="light" locale="kr" heightPx={520} />
              <div style={{ marginTop: 12 }}>
                <OrderBook market={market} />
              </div>
              <div style={{ marginTop: 12 }}>
                <DepthChart market={market} />
              </div>
              <div style={{ marginTop: 12 }}>
                <DailyTable market={market} />
              </div>
            </>
          ) : (
            <div>Invalid market</div>
          )}
        </div>
        <Sidebar>
          <SearchInput
            placeholder="Search by name (EN/KR) or symbol"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <List>
            {(filtered || []).map((d) => {
              const info = sideTickMap.get(d.market);
              const chg = info?.chg ?? 0;
              const chgColor = chg > 0 ? "#c84a31" : chg < 0 ? "#1261c4" : "#666";
              return (
                <Item key={d.market} active={d.market === market} flash={flashMap[d.market]}>
                  <Link to={`/coin/${d.market}`}>
                    <span className="name">
                      <span>{d.english_name}</span>
                      <span className="sym">{d.market.substring(4)}</span>
                    </span>
                    <span className="right">
                      <span className="price">{info?.price?.toLocaleString() ?? "-"}</span>
                      <span className="chg" style={{ color: chgColor }}>
                        {info ? `${(chg * 100).toFixed(2)}%` : "-"}
                      </span>
                    </span>
                  </Link>
                </Item>
              );
            })}
          </List>
        </Sidebar>
      </Content>
    </Wrapper>
  );
}

export default CoinDetailPage;

// Daily table (일별)
const TableWrap = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: #fff;
  max-height: 360px;
  overflow: auto;
`;
const Table = styled.table`
  width: 100%;
  th, td { padding: 10px; font-size: 14px; }
  thead { background: #fafafa; }
  td.r { text-align: right; }
`;

function formatDate(date: Date) {
  const mm = `${date.getMonth() + 1}`.padStart(2, "0");
  const dd = `${date.getDate()}`.padStart(2, "0");
  return `${mm}.${dd}`;
}

function DailyTable({ market }: { market: string }) {
  const { data } = useQuery<ICoinHistory[][]>(["bithumb", "daily", market], () => fetchBithumbCandles([market]), {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
    enabled: !!market,
  });
  const rows = (data?.[0] || []).slice().reverse();
  return (
    <TableWrap>
      <Table>
        <thead>
          <tr>
            <th>일자</th>
            <th className="r">종가(KRW)</th>
            <th className="r">전일대비</th>
            <th className="r">등락률</th>
            <th className="r">거래량</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const d = new Date(r.timestamp);
            const delta = r.change_price;
            const pct = r.change_rate * 100;
            const color = delta > 0 ? "#c84a31" : delta < 0 ? "#1261c4" : "#666";
            return (
              <tr key={r.timestamp}>
                <td>{formatDate(d)}</td>
                <td className="r" style={{ color }}>{r.prev_closing_price.toLocaleString()}</td>
                <td className="r" style={{ color }}>{delta.toLocaleString()}</td>
                <td className="r" style={{ color }}>{pct.toFixed(2)}%</td>
                <td className="r">{(r.volume ?? 0).toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrap>
  );
}
