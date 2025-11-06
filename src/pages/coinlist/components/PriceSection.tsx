import { memo, useMemo, useCallback } from "react";
import styled from "styled-components";
import Sparkline from "../../../components/Sparkline";
import { ICoinHttpTickers } from "../../../interface/icoin";

const COLOR_UP = "#c84a31";
const COLOR_DOWN = "#1261c4";
const COLOR_NEUTRAL = "#8c8d9a";

const PriceSection = styled.div`
  margin-bottom: 24px;
`;

const PriceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 16px;
`;

const CoinTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 20px;
    font-weight: 600;
    color: #e8ecef;
  }
`;

const Symbol = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8c8d9a;
  padding: 4px 8px;
  border-radius: 4px;
  background: #1e2329;
`;

const Tabs = styled.div`
  display: flex;
  gap: 0;
  margin: 0 0 16px 0;
  border-bottom: 1px solid #1e2329;

  button {
    font-family: "Inter", sans-serif;
    border: none;
    background: transparent;
    border-radius: 0;
    padding: 12px 24px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    color: #8c8d9a;
    transition: color 0.2s ease;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
  }

  button:hover {
    color: #e8ecef;
  }

  .on {
    color: #f0b90b;
    border-bottom-color: #f0b90b;
  }
`;

const PriceCard = styled.div<{ change?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 24px;
  border-radius: 0;
  background: #181a20;
  margin-bottom: 16px;
  font-weight: 600;
  color: #e8ecef;
  border-bottom: 1px solid #1e2329;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PriceValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const KRW = styled.span`
  font-size: 0.5em;
  font-weight: 500;
  opacity: 0.7;
  margin-left: 6px;
  color: #8c8d9a;
`;

const ChangeInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

const ChangeBadge = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
`;

const ChangeAmount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8c8d9a;
`;

const SparklineWrapper = styled.div`
  margin-left: auto;
  width: 200px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
`;

const InfoMessage = styled.span`
  color: #8c8d9a;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: block;
  width: 100%;
`;

interface PriceSectionProps {
  market: string;
  info: {
    base: string;
    quote: string;
    english_name: string;
    korean_name: string;
  } | null;
  tick: ICoinHttpTickers | null;
  sparklineData: number[];
  mainTab: "price" | "info";
  onTabChange: (tab: "price" | "info") => void;
}

function PriceSectionComponent({
  market,
  info,
  tick,
  sparklineData,
  mainTab,
  onTabChange,
}: PriceSectionProps) {
  const priceColor = useMemo(() => {
    if (!tick?.signed_change_rate) return COLOR_NEUTRAL;
    return tick.signed_change_rate < 0 ? COLOR_DOWN : COLOR_UP;
  }, [tick?.signed_change_rate]);

  const hasSparkline = sparklineData.length > 1;

  const handlePriceClick = useCallback(() => {
    onTabChange("price");
  }, [onTabChange]);

  const handleInfoClick = useCallback(() => {
    onTabChange("info");
  }, [onTabChange]);

  const changeRateText = useMemo(() => {
    if (typeof tick?.signed_change_rate !== "number") return "-";
    return `${tick.signed_change_rate > 0 ? "+" : ""}${(
      tick.signed_change_rate * 100
    ).toFixed(2)}%`;
  }, [tick?.signed_change_rate]);

  const changePriceText = useMemo(() => {
    if (typeof tick?.signed_change_price !== "number") return "-";
    return `${
      tick.signed_change_price > 0 ? "+" : ""
    }${tick.signed_change_price.toLocaleString()}`;
  }, [tick?.signed_change_price]);

  const priceText = useMemo(() => {
    return tick?.trade_price?.toLocaleString() ?? "-";
  }, [tick?.trade_price]);

  return (
    <PriceSection>
      <PriceHeader>
        <CoinTitle>
          <span>{info?.english_name}</span>
          <Symbol>{info?.base}</Symbol>
        </CoinTitle>
        <Tabs>
          <button
            className={mainTab === "price" ? "on" : ""}
            onClick={handlePriceClick}
          >
            시세
          </button>
          <button
            className={mainTab === "info" ? "on" : ""}
            onClick={handleInfoClick}
          >
            정보
          </button>
        </Tabs>
      </PriceHeader>

      {mainTab === "price" ? (
        <PriceCard change={tick?.signed_change_rate}>
          <PriceInfo>
            <PriceValue style={{ color: priceColor }}>
              {priceText} <KRW>KRW</KRW>
            </PriceValue>
            <ChangeInfo>
              <ChangeBadge
                className="chg"
                style={{
                  color: priceColor,
                  background:
                    priceColor === COLOR_NEUTRAL
                      ? "#1e2329"
                      : `${priceColor}20`,
                }}
              >
                {changeRateText}
              </ChangeBadge>
              <ChangeAmount
                style={{
                  color:
                    priceColor === COLOR_NEUTRAL ? "#8c8d9a" : priceColor,
                }}
              >
                {changePriceText}
              </ChangeAmount>
            </ChangeInfo>
          </PriceInfo>
          <SparklineWrapper>
            {hasSparkline ? (
              <Sparkline
                data={sparklineData}
                width={200}
                height={60}
                color={priceColor}
              />
            ) : null}
          </SparklineWrapper>
        </PriceCard>
      ) : (
        <PriceCard>
          <InfoMessage>코인 정보는 추후 추가됩니다.</InfoMessage>
        </PriceCard>
      )}
    </PriceSection>
  );
}

export default memo(PriceSectionComponent);

