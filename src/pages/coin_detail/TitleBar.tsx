/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import { useCoinTickersSocket } from "../../services/coinApi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ICoins } from "../../interface/icoin";
import useCoinNames from "../../libs/useCoinNames";

const TitleBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  border: 1px solid #d9dadb;
  border-bottom: none;
  background-color: #fff;
`;
const SymbolBar = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 4px solid #e0e3eb;
  & div + div {
    display: flex;
  }
`;
const ImgBox = styled.div`
  padding: 7px 10px 7px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  max-width: 26px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const CoinName = styled.span`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -2px;
`;
const CoinSymbol = styled.span`
  font-size: 12px;
  font-weight: 500;
`;
const MarketBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 14px 20px;
`;
const PriceData = styled.div<{ change: string }>`
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: ${(props) =>
    props.change === "RISE"
      ? "#089981"
      : props.change === "FALL"
      ? "#F23645"
      : "#222"};
  will-change: color;
`;
const TradePriceBox = styled.div`
  display: flex;
  align-items: end;
  gap: 2px;
`;
const TradePrice = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
const KRW = styled.div`
  margin-bottom: 3px;
  font-size: 14px;
`;
const ChangeBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  gap: 4px;
`;
const ChangeRate = styled.div``;
const ChangePrice = styled.div`
  display: flex;
  align-items: center;
`;
const SimpleData = styled.div`
  width: 550px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
const Data = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-child(odd) {
    margin-right: 20px;
  }
  &:nth-child(1),
  &:nth-child(2) {
    border-bottom: 1px solid #e0e3eb;
    padding-bottom: 9px;
    margin-bottom: 9px;
  }
`;
const Label = styled.span`
  font-size: 12px;
`;
const Value = styled.span`
  font-size: 14px;
`;
const High = styled(Value)`
  color: #089981;
`;
const Low = styled(Value)`
  color: #F23645;
`;
const Unit = styled.span`
  color: #999999;
  font-weight: normal;
  font-size: 11px;
`;
const Svg = styled.svg<{ change: string }>`
  fill: ${(props) =>
    props.change === "RISE"
      ? "#089981"
      : props.change === "FALL"
      ? "#F23645"
      : "#222"};
  will-change: color;
`;
function TitleBar({nameData} : {nameData : ICoins[]}) {
  const { pathname } = useLocation();
  const [coinName, setCoinName] = useState("");
  const [nameObj, setNameObj] = useState<ICoins>();
  const { data: tickerSocketData } = useCoinTickersSocket([coinName]!);
  useEffect(() => {
    const editPathname = pathname.replace(/\/coin-detail\/UPBIT:|KRW/g, "");
    setNameObj(nameData?.find((item) => item.market.includes(editPathname)));
    const coinWithPrefix = "KRW-" + editPathname;
    setCoinName(coinWithPrefix);
  }, [pathname, nameData]);

  return (
    <>
      {tickerSocketData && (
        <TitleBarContainer>
          <SymbolBar>
            <ImgBox>
              <Img
                src={`https://static.upbit.com/logos/${nameObj?.market.substring(
                  4
                )}.png`}
                alt="coin_icon"
                loading="lazy"
                decoding="async"
              />
            </ImgBox>
            <TextBox>
              <CoinName>{nameObj?.korean_name}</CoinName>
              <CoinSymbol>
                {nameObj?.market.split("-").reverse().join("/")}
              </CoinSymbol>
            </TextBox>
          </SymbolBar>
          <MarketBar>
            <PriceData change={tickerSocketData[0].change}>
              <TradePriceBox>
                <TradePrice>
                  {tickerSocketData[0].trade_price.toLocaleString()}
                </TradePrice>{" "}
                <KRW>KRW</KRW>
              </TradePriceBox>
              <ChangeBox>
                <ChangeRate>
                  {tickerSocketData[0].change === "RISE"
                    ? "+"
                    : tickerSocketData[0].change === "FALL"
                    ? "-"
                    : ""}
                  {(tickerSocketData[0].change_rate * 100 || 0).toFixed(2) +
                    "%"}
                </ChangeRate>
                <ChangePrice>
                  {tickerSocketData[0].change === "RISE" ? (
                    <Svg
                      change={tickerSocketData[0].change}
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 -960 960 960"
                      width="14"
                    >
                      <path d="m80-160 400-640 400 640H80Z" />
                    </Svg>
                  ) : tickerSocketData[0].change === "FALL" ? (
                    <Svg
                      change={tickerSocketData[0].change}
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 -960 960 960"
                      width="14"
                      style={{ transform: "rotate(180deg)" }}
                    >
                      <path d="m80-160 400-640 400 640H80Z" />
                    </Svg>
                  ) : (
                    ""
                  )}{" "}
                  {tickerSocketData[0].change_price.toLocaleString()}
                </ChangePrice>
              </ChangeBox>
            </PriceData>
            <SimpleData>
              <Data>
                <Label>고가:</Label>{" "}
                <High>{tickerSocketData[0].high_price.toLocaleString()}</High>
              </Data>
              <Data>
                <Label>거래량(24h)</Label>
                <Value>
                  {tickerSocketData[0].acc_trade_volume_24h.toLocaleString()}
                  <Unit> {nameObj?.market.substring(4)}</Unit>
                </Value>
              </Data>
              <Data>
                <Label>저가:</Label>{" "}
                <Low>{tickerSocketData[0].low_price.toLocaleString()}</Low>
              </Data>
              <Data>
                <Label>거래대금(24h)</Label>
                <Value>
                  {tickerSocketData[0].acc_trade_price_24h
                    .toLocaleString()
                    .replace(/\.\d+/, "")}{" "}
                  <Unit>KRW</Unit>
                </Value>
              </Data>
            </SimpleData>
          </MarketBar>
        </TitleBarContainer>
      )}
    </>
  );
}

export default TitleBar;
