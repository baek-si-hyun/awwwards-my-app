import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { fetchBithumbOrderbook, BithumbOrderbookResult } from "../services/bithumbApi";

const Wrap = styled.div`
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: saturate(180%) blur(10px);
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

const Title = styled.div`
  font-weight: 800;
  margin-bottom: 8px;
`;

const Svg = styled.svg`
  width: 100%;
  height: 220px;
  display: block;
`;

function DepthChart({ market }: { market: string }) {
  const [data, setData] = useState<BithumbOrderbookResult>({ bids: [], asks: [] });

  useEffect(() => {
    let active = true;
    let timer: any;
    const load = async () => {
      try {
        const ob = await fetchBithumbOrderbook(market);
        if (!active) return;
        setData({
          bids: ob.bids.slice(0, 30).sort((a, b) => b.price - a.price),
          asks: ob.asks.slice(0, 30).sort((a, b) => a.price - b.price),
        });
      } catch {}
      timer = setTimeout(load, 2000);
    };
    load();
    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
  }, [market]);

  const view = useMemo(() => {
    const bids = data.bids;
    const asks = data.asks;
    if (!bids.length || !asks.length) return null;
    const minPrice = bids[bids.length - 1].price;
    const maxPrice = asks[asks.length - 1].price;
    const width = 640;
    const height = 220;
    const cumBid: { x: number; y: number }[] = [];
    let acc = 0;
    for (let i = bids.length - 1; i >= 0; i--) {
      acc += bids[i].quantity;
      const px = (bids[i].price - minPrice) / (maxPrice - minPrice) * width;
      cumBid.push({ x: px, y: acc });
    }
    const cumAsk: { x: number; y: number }[] = [];
    acc = 0;
    for (let i = 0; i < asks.length; i++) {
      acc += asks[i].quantity;
      const px = (asks[i].price - minPrice) / (maxPrice - minPrice) * width;
      cumAsk.push({ x: px, y: acc });
    }
    const maxQty = Math.max(1, ...cumBid.map((d) => d.y), ...cumAsk.map((d) => d.y));
    const yScale = (v: number) => height - (v / maxQty) * (height - 20);
    const area = (pts: { x: number; y: number }[], side: "left" | "right") => {
      if (pts.length === 0) return "";
      const start = side === "left" ? `M 0 ${height} L ${pts[0].x} ${height}` : `M ${width} ${height} L ${pts[0].x} ${height}`;
      const line = pts.map((p) => `L ${p.x} ${yScale(p.y)}`).join(" ");
      const end = side === "left" ? `L 0 ${height} Z` : `L ${width} ${height} Z`;
      return `${start} ${line} ${end}`;
    };
    return {
      width,
      height,
      bidPath: area(cumBid, "left"),
      askPath: area(cumAsk, "right"),
    };
  }, [data]);

  return (
    <Wrap>
      <Title>Market Depth</Title>
      <Svg viewBox={`0 0 ${view?.width || 640} ${view?.height || 220}`} preserveAspectRatio="none">
        <path d={view?.bidPath || ""} fill="#1261c4" opacity={0.18} />
        <path d={view?.askPath || ""} fill="#c84a31" opacity={0.18} />
      </Svg>
    </Wrap>
  );
}

export default DepthChart;
