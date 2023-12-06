/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TitleBar from "./TitleBar";
import useCoinNames from "../../libs/useCoinNames";
import Sidebar from "./Sidebar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  align-items: center;
  height: 100vh;
  padding: 3vw 5vw;
  margin-bottom: 8vh;
  font-family: Roboto;
`;

const TradingviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const TradingviewInner = styled.div`
  flex: 1;
`;
const Tradingview = styled.div`
  width: 100%;
  height: 100%;
`;
const CoinSidebar = styled.div``;

function CoinDetail() {
  const { pathname } = useLocation();
  let tvScriptLoadingPromise: Promise<void>;
  const onLoadScriptRef = useRef<(() => void) | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => {
      onLoadScriptRef.current = null;
    };
  }, []);

  function createWidget(): void {
    if (
      document.getElementById("tradingview_e032d") &&
      "TradingView" in window
    ) {
      new window.TradingView.widget({
        autosize: true,
        symbol: pathname.slice(13),
        interval: "D",
        timezone: "Asia/Seoul",
        theme: "light",
        style: "1",
        locale: "kr",
        toolbar_bg: "#fff",
        enable_publishing: true,
        allow_symbol_change: false,
        hide_side_toolbar: false,
        details: false,
        container_id: "tradingview_e032d",
      });
    }
  }
  const { nameData } = useCoinNames(false);

  return (
    <>
      {nameData && (
        <Container>
          <TradingviewContainer>
            {<TitleBar nameData={nameData} />}
            <TradingviewInner className="tradingview-widget-container">
              <Tradingview id="tradingview_e032d" />
              <div className="tradingview-widget-copyright">
                <a
                  href="https://kr.tradingview.com/"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                ></a>
              </div>
            </TradingviewInner>
          </TradingviewContainer>
          <Sidebar nameData={nameData} />
        </Container>
      )}
    </>
  );
}

export default CoinDetail;
