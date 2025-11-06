import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #1e2329;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #e8ecef;
`;

const Back = styled(Link)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #8c8d9a;
  text-decoration: none;
  border: 1px solid #1e2329;
  border-radius: 4px;
  padding: 8px 16px;
  background: #181a20;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #2b3139;
    background: #1e2329;
    color: #e8ecef;
  }
`;

interface HeaderProps {
  market: string;
  info: {
    base: string;
    quote: string;
    english_name: string;
    korean_name: string;
  } | null;
}

function HeaderComponent({ market, info }: HeaderProps) {
  const titleText = useMemo(() => {
    if (!info) return market;
    return `${info.english_name} (${info.base}) / ${info.quote}`;
  }, [info, market]);

  return (
    <Header>
      <Title>{titleText}</Title>
      <Back to="/coinlist">← Coin List</Back>
    </Header>
  );
}

export default memo(HeaderComponent);

