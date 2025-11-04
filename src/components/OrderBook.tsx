import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { fetchBithumbOrderbook, BithumbOrderbookResult } from "../services/bithumbApi";

const Box = styled.div`
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 14px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: saturate(180%) blur(10px);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

const Title = styled.div`
  padding: 10px 12px;
  font-weight: 800;
  border-bottom: 1px solid rgba(0,0,0,0.06);
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-height: 360px;
  overflow: auto;
`;

const Col = styled.div`
  padding: 8px;
`;

const Row = styled.div<{ color: string; ratio: number }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  padding: 4px 6px;
  font-size: 12px;
  line-height: 1.2;
  border-radius: 4px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${(p) => Math.max(0, Math.min(100, p.ratio * 100))}%;
    background: ${(p) => p.color};
    opacity: 0.12;
    pointer-events: none;
  }
  .price { font-weight: 700; }
  .qty { color: #666; }
`;

function format(n: number) {
  if (!isFinite(n)) return "-";
  return n.toLocaleString();
}

function OrderBook({ market, levels = 10 }: { market: string; levels?: number }) {
  const [data, setData] = useState<BithumbOrderbookResult>({ bids: [], asks: [] });

  useEffect(() => {
    let active = true;
    let timer: any;
    const load = async () => {
      try {
        const ob = await fetchBithumbOrderbook(market);
        if (!active) return;
        setData({
          bids: ob.bids.slice(0, levels),
          asks: ob.asks.slice(0, levels),
        });
      } catch {}
      timer = setTimeout(load, 1500);
    };
    load();
    return () => {
      active = false;
      if (timer) clearTimeout(timer);
    };
  }, [market, levels]);

  const maxQty = useMemo(() => {
    return Math.max(
      1,
      ...data.bids.map((b) => b.quantity),
      ...data.asks.map((a) => a.quantity)
    );
  }, [data]);

  return (
    <Box>
      <Title>Order Book</Title>
      <Grids>
        <Col>
          {data.asks
            .slice()
            .reverse()
            .map((a, i) => (
              <Row key={`a-${i}`} color="#c84a31" ratio={a.quantity / maxQty}>
                <span className="price" style={{ color: "#c84a31" }}>{format(a.price)}</span>
                <span className="qty">{format(a.quantity)}</span>
              </Row>
            ))}
        </Col>
        <Col>
          {data.bids.map((b, i) => (
            <Row key={`b-${i}`} color="#1261c4" ratio={b.quantity / maxQty}>
              <span className="price" style={{ color: "#1261c4" }}>{format(b.price)}</span>
              <span className="qty">{format(b.quantity)}</span>
            </Row>
          ))}
        </Col>
      </Grids>
    </Box>
  );
}

export default OrderBook;
