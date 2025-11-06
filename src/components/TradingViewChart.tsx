import { memo, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div<{ heightPx?: number }>`
  width: 100%;
  height: ${(p) => (p.heightPx ? `${p.heightPx}px` : "70vh")};
  min-height: 400px;
`;

function loadTvScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.TradingView) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://s3.tradingview.com/tv.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("tv.js failed to load")));
      return;
    }
    const s = document.createElement("script");
    s.src = "https://s3.tradingview.com/tv.js";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("tv.js failed to load"));
    document.body.appendChild(s);
  });
}

export interface TradingViewChartProps {
  market: string; // e.g., "KRW-BTC"
  exchange?: string; // e.g., "BITHUMB"
  interval?: string; // e.g., "D", "60"
  theme?: "light" | "dark";
  locale?: string; // e.g., "kr"
  heightPx?: number;
}

function toTvSymbol(exchange: string, market: string): string {
  // market like "KRW-BTC" -> base=BTC, quote=KRW -> "BTC KRW" in Bithumb
  const [quote, base] = market.split("-");
  const tvSym = `${exchange}:${base}${quote}`; // e.g., BITHUMB:BTCKRW
  return tvSym;
}

const TradingViewChart = ({
  market,
  exchange = "BITHUMB",
  interval = "D",
  theme = "light",
  locale = "kr",
  heightPx,
}: TradingViewChartProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const symbol = useMemo(() => toTvSymbol(exchange, market), [exchange, market]);

  useEffect(() => {
    let disposed = false;
    loadTvScript()
      .then(() => {
        if (disposed) return;
        setReady(true);
      })
      .catch(() => setReady(false));
    return () => {
      disposed = true;
    };
  }, []);

  useEffect(() => {
    if (!ready || !window.TradingView || !ref.current) return;
    const containerId = `tv_${Math.random().toString(36).slice(2)}`;
    ref.current.id = containerId;
    const tv = new window.TradingView.widget({
      symbol,
      interval,
      container_id: containerId,
      autosize: true,
      timezone: "Asia/Seoul",
      theme,
      locale,
      toolbar_bg: "#f1f3f6",
      hide_top_toolbar: false,
      hide_side_toolbar: true,
      withdateranges: true,
      allow_symbol_change: false,
      studies: [],
      details: false,
      overrides: {
        "mainSeriesProperties.candleStyle.upColor": "#c84a31",
        "mainSeriesProperties.candleStyle.downColor": "#1261c4",
        "mainSeriesProperties.candleStyle.borderUpColor": "#c84a31",
        "mainSeriesProperties.candleStyle.borderDownColor": "#1261c4",
        "mainSeriesProperties.candleStyle.wickUpColor": "#c84a31",
        "mainSeriesProperties.candleStyle.wickDownColor": "#1261c4",
        "volumePaneSize": "medium",
        "paneProperties.background": "#ffffff",
        "paneProperties.backgroundType": "solid",
      },
      studies_overrides: {
        "volume.volume.color.0": "#1261c4",
        "volume.volume.color.1": "#c84a31",
      },
    });
    return () => {
      // Charting library disposes automatically when container removed, but make safe
      try {
        // @ts-ignore
        if (tv && typeof tv.remove === "function") tv.remove();
      } catch {}
    };
  }, [ready, symbol, interval, theme, locale]);

  return <Container ref={ref} heightPx={heightPx} />;
};

export default memo(TradingViewChart);
