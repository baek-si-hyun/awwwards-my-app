import { useMemo, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TradingViewChart from "../../components/TradingViewChart";
import useBithumbNames from "../../libs/useBithumbNames";
import useBithumbTickers from "../../libs/useBithumbTickers";
import useBithumbTickersSocket from "../../libs/useBithumbSocket";
import OrderBook from "../../components/OrderBook";
import DepthChart from "../../components/DepthChart";
import { useQuery } from "@tanstack/react-query";
import { fetchBithumbCandles } from "../../services/bithumbApi";
import { ICoinHistory } from "../../interface/icoin";
import PriceSectionComponent from "./components/PriceSection";
import SubStatsComponent from "./components/SubStats";
import CoinSidebar from "./components/CoinSidebar";
import DailyTable from "./DailyTable";
import HeaderComponent from "./components/Header";
import { useOrderbookData } from "./hooks/useOrderbookData";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px 20px 80px 20px;
  background: #0b0e11;
  color: #e8ecef;
  position: relative;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 16px;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChartCard = styled.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 0;
  min-height: 500px;
`;

const DataCard = styled.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 16px;
`;

const TableCard = styled.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 0;
  overflow: hidden;
`;

const ErrorCard = styled.div`
  background: #181a20;
  border: 1px solid #1e2329;
  border-radius: 0;
  padding: 40px;
  text-align: center;
  color: #8c8d9a;
  font-size: 14px;
  font-weight: 500;
`;

function CoinDetailPage() {
  const params = useParams<{ market: string }>();
  const market = params.market || "";
  const { nameData } = useBithumbNames(true);
  const [mainTab, setMainTab] = useState<"price" | "info">("price");

  const marketParts = useMemo(() => {
    const parts = market.split("-");
    return { base: parts[1] || "", quote: parts[0] || "" };
  }, [market]);

  const info = useMemo(() => {
    const found = (nameData || []).find((d) => d.market === market);
    if (!found) return null;
    return {
      base: marketParts.base,
      quote: marketParts.quote,
      english_name: found.english_name,
      korean_name: found.korean_name,
    };
  }, [nameData, market, marketParts]);

  const marketArray = useMemo(() => [market], [market]);
  const { tickerHttpData } = useBithumbTickers(marketArray);
  const { liveMap } = useBithumbTickersSocket(marketArray);
  const tick = useMemo(() => {
    const t = (tickerHttpData || []).find((t) => t.market === market);
    return liveMap.get(market) || t || null;
  }, [tickerHttpData, liveMap, market]);

  const { data: daily } = useQuery<ICoinHistory[][]>(
    ["bithumb", "daily", market],
    () => fetchBithumbCandles(marketArray),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      enabled: !!market,
    }
  );

  const sparklineData = useMemo(() => {
    return (daily?.[0] || []).slice(-30).map((r) => r.prev_closing_price);
  }, [daily]);

  const handleTabChange = useCallback((tab: "price" | "info") => {
    setMainTab(tab);
  }, []);

  useOrderbookData(market, 1500);

  return (
    <Wrapper>
      <HeaderComponent market={market} info={info} />

      <PriceSectionComponent
        market={market}
        info={info}
        tick={tick}
        sparklineData={sparklineData}
        mainTab={mainTab}
        onTabChange={handleTabChange}
      />

      <SubStatsComponent tick={tick} baseSymbol={info?.base} />

      <Content>
        <MainContent>
          {market ? (
            <>
              <ChartCard>
                <TradingViewChart
                  market={market}
                  exchange="BITHUMB"
                  interval="D"
                  theme="dark"
                  locale="kr"
                  heightPx={580}
                />
              </ChartCard>
              <DataCard>
                <OrderBook />
              </DataCard>
              <DataCard>
                <DepthChart />
              </DataCard>
              <TableCard>
                <DailyTable market={market} dailyData={daily} />
              </TableCard>
            </>
          ) : (
            <ErrorCard>Invalid market</ErrorCard>
          )}
        </MainContent>
        <CoinSidebar currentMarket={market} />
      </Content>
    </Wrapper>
  );
}

export default CoinDetailPage;
