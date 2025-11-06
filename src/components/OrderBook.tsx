import { memo, useMemo } from "react";
import styled from "styled-components";
import { useMySelector } from "../libs/useMySelector";

const Box = styled.div`
  border: none;
  border-radius: 0;
  background: transparent;
  overflow: hidden;
`;

const Title = styled.div`
  padding: 0 0 12px 0;
  font-weight: 600;
  font-size: 14px;
  color: #8c8d9a;
  border-bottom: 1px solid #1e2329;
  margin-bottom: 12px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-height: 400px;
  overflow: auto;

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

const Col = styled.div`
  padding: 0 8px;
`;

const Row = styled.div<{ color: string; ratio: number }>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  padding: 6px 8px;
  font-size: 13px;
  line-height: 1.4;
  border-radius: 0;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${(p) => Math.max(0, Math.min(100, p.ratio * 100))}%;
    background: ${(p) => p.color};
    opacity: 0.15;
    pointer-events: none;
  }
  .price { 
    font-weight: 600; 
    color: ${(p) => p.color};
  }
  .qty { 
    color: #8c8d9a; 
    font-weight: 500;
  }
`;

const format = (n: number): string => {
  if (!isFinite(n)) return "-";
  return n.toLocaleString();
};

const COLOR_ASK = "#c84a31";
const COLOR_BID = "#1261c4";

const ASK_STYLE = { color: COLOR_ASK };
const BID_STYLE = { color: COLOR_BID };

function OrderBook({ levels = 10 }: { levels?: number }) {
  const { data: orderbookData, error } = useMySelector((state) => ({
    data: state.orderbookSlice.data,
    error: state.orderbookSlice.error,
  }));

  const data = useMemo(() => {
    return {
      bids: orderbookData.bids.slice(0, levels),
      asks: orderbookData.asks.slice(0, levels),
    };
  }, [orderbookData, levels]);

  const reversedAsks = useMemo(() => {
    return [...data.asks].reverse();
  }, [data.asks]);

  const maxQty = useMemo(() => {
    if (data.bids.length === 0 && data.asks.length === 0) return 1;
    return Math.max(
      1,
      ...data.bids.map((b) => b.quantity),
      ...data.asks.map((a) => a.quantity)
    );
  }, [data]);
  
  if (error) {
    return (
      <Box>
        <Title>Order Book</Title>
        <div style={{ padding: "20px", textAlign: "center", color: "#8c8d9a" }}>
          데이터를 불러올 수 없습니다.
        </div>
      </Box>
    );
  }

  return (
    <Box>
      <Title>Order Book</Title>
      <Grids>
        <Col>
          {reversedAsks.map((a, i) => (
            <Row key={`a-${a.price}-${i}`} color={COLOR_ASK} ratio={a.quantity / maxQty}>
              <span className="price" style={ASK_STYLE}>{format(a.price)}</span>
              <span className="qty">{format(a.quantity)}</span>
            </Row>
          ))}
        </Col>
        <Col>
          {data.bids.map((b, i) => (
            <Row key={`b-${b.price}-${i}`} color={COLOR_BID} ratio={b.quantity / maxQty}>
              <span className="price" style={BID_STYLE}>{format(b.price)}</span>
              <span className="qty">{format(b.quantity)}</span>
            </Row>
          ))}
        </Col>
      </Grids>
    </Box>
  );
}

export default memo(OrderBook);
