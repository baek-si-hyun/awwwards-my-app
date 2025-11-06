import { memo, useMemo } from "react";
import styled from "styled-components";
import { useMySelector } from "../libs/useMySelector";

const Wrap = styled.div`
  border: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8d9a;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #1e2329;
`;

const Svg = styled.svg`
  width: 100%;
  height: 220px;
  display: block;
`;

function DepthChart() {
  const { data: orderbookData, error } = useMySelector((state) => ({
    data: state.orderbookSlice.data,
    error: state.orderbookSlice.error,
  }));

  const data = useMemo(() => {
    return {
      bids: orderbookData.bids.slice(0, 30).sort((a, b) => b.price - a.price),
      asks: orderbookData.asks.slice(0, 30).sort((a, b) => a.price - b.price),
    };
  }, [orderbookData]);

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

  if (error) {
    return (
      <Wrap>
        <Title>Market Depth</Title>
        <div style={{ padding: "40px", textAlign: "center", color: "#8c8d9a" }}>
          데이터를 불러올 수 없습니다.
        </div>
      </Wrap>
    );
  }

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

export default memo(DepthChart);
