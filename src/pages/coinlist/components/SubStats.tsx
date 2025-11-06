import { memo } from "react";
import styled from "styled-components";
import { ICoinHttpTickers } from "../../../interface/icoin";

const COLOR_UP = "#c84a31";
const COLOR_DOWN = "#1261c4";

const SubStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 0 24px 0;
  padding: 16px;
  background: #181a20;
  border-bottom: 1px solid #1e2329;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  small {
    color: #8c8d9a;
    font-size: 12px;
    font-weight: 500;
    display: block;
  }

  strong {
    font-size: 16px;
    font-weight: 600;
    display: block;
    color: #e8ecef;
  }
`;

interface SubStatsProps {
  tick: ICoinHttpTickers | null;
  baseSymbol?: string;
}

function SubStatsComponent({ tick, baseSymbol }: SubStatsProps) {
  return (
    <SubStats>
      <div>
        <small>고가(24H)</small>
        <strong style={{ color: COLOR_UP }}>
          {tick?.high_price_24h ? tick.high_price_24h.toLocaleString() : "-"}
        </strong>
      </div>
      <div>
        <small>저가(24H)</small>
        <strong style={{ color: COLOR_DOWN }}>
          {tick?.low_price_24h ? tick.low_price_24h.toLocaleString() : "-"}
        </strong>
      </div>
      <div>
        <small>거래량(24H)</small>
        <strong>
          {tick?.acc_trade_volume_24h
            ? tick.acc_trade_volume_24h.toLocaleString()
            : "-"}{" "}
          {baseSymbol}
        </strong>
      </div>
      <div>
        <small>거래대금(24H)</small>
        <strong>
          {tick?.acc_trade_price_24h
            ? tick.acc_trade_price_24h.toLocaleString()
            : "-"}{" "}
          KRW
        </strong>
      </div>
    </SubStats>
  );
}

export default memo(SubStatsComponent);

