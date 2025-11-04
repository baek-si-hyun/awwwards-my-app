import { useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import bithumbLogo from "../assets/img/new-logo-default.1a222f9b007db3fce4e0.webp";

const popIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Fab = styled.button`
  position: fixed;
  left: 20px;
  top: 24px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: none;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 9999;
  animation: ${popIn} 240ms ease-out both;
  font-family: "Apercu", sans-serif;
  font-weight: 700;
  color: #222;
`;

const Logo = styled.img`
  height: 18px;
  width: auto;
  display: block;
`;

const Close = styled.span`
  margin-left: 4px;
  font-size: 14px;
  color: #888;
`;

function FloatingCoinListButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("coinListFabHidden");
    if (stored === "1") setHidden(true);
  }, []);

  const shouldShow = useMemo(() => {
    if (hidden) return false;
    // Hide on coin list and coin detail pages
    const onCoinList = pathname.endsWith("/coinlist");
    const onCoinDetail = pathname.includes("/coin/");
    return !(onCoinList || onCoinDetail);
  }, [hidden, pathname]);

  if (!shouldShow) return null;

  return (
    <Fab
      aria-label="Go to Coin List"
      onClick={() => {
        navigate("/coinlist");
      }}
      title="Open Coin List"
    >
      <Logo src={bithumbLogo} alt="Bithumb" />
      Coin List
      <Close
        role="button"
        aria-label="dismiss"
        onClick={(e) => {
          e.stopPropagation();
          setHidden(true);
          window.localStorage.setItem("coinListFabHidden", "1");
        }}
      >
        ×
      </Close>
    </Fab>
  );
}

export default FloatingCoinListButton;
