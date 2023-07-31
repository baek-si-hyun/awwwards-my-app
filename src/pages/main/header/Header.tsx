import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import shb from "../../../assets/img/main_img/shbicon.png";
import HeaderMainImg from "./HeaderMainImg";
import { useSelector } from "react-redux";
import { IResize } from "../../../interface/iproject";

const Container = styled.div`
  width: 100%;
  background-color: #d7d7d7;
`;
const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
`;
const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 12.31vw;
  font-weight: 700;
`;
const Wrap = styled.div`
  margin: 1.5vw 0;
`;
const Inner = styled(Marquee)`
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
`;
const MarqueeText = styled.div`
  font-size: 2vw;
  white-space: nowrap;
  margin-right: 0.6vw;
  font-weight: Bold;
  span {
    font-weight: 100;
  }
  @media (max-width: 800px) {
    & {
      font-size: 3vw;
    }
  }
`;

const TextBox = styled.div`
  text-align: center;
  font-size: 1.5vw;
  margin: 3vw 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;
const LogoImg = styled.img`
  width: 2.5vw;
  border-radius: 100%;
`;

function Header() {
  const getResizeWidth = useSelector(
    ({ resizeWidthSlice }: { resizeWidthSlice: IResize }) => {
      return resizeWidthSlice.resizeWidth;
    }
  );
  const [speed, setSpeed] = useState(130);

  useEffect(() => {
    const graphMode = () => {
      if (getResizeWidth > 1280) {
        setSpeed(130);
      }
      if (getResizeWidth <= 1280) {
        setSpeed(90);
      }
      if (getResizeWidth <= 768) {
        setSpeed(60);
      }
      if (getResizeWidth <= 429) {
        setSpeed(40);
      }
    };
    graphMode();
  }, [getResizeWidth]);
  return (
    <Container id="header">
      <InnerContainer>
        <Title>site of the day</Title>
        <Wrap>
          <Inner play={true} gradient={false} speed={speed}>
            <MarqueeText>
              MY APP<span> — Site of the Day - </span>100
              <span> — Dec 25, 2022 — </span>MY APP
              <span> — Site of the Day - </span>100
              <span> — Dec 25, 2022 — </span>
            </MarqueeText>
            <MarqueeText>
              MY APP<span> — Site of the Day - </span>100
              <span> — Dec 25, 2022 — </span>MY APP
              <span> — Site of the Day - </span>100
              <span> — Dec 25, 2022 — </span>
            </MarqueeText>
            <MarqueeText>
              MY APP<span> — Site of the Day - </span>100
              <span> — Dec 25, 2022 — </span>MY APP
              <span> — Site of the Day - </span>100
              <span> — Dec 25, 2022 — </span>
            </MarqueeText>
          </Inner>
        </Wrap>
        <HeaderMainImg />
        <TextBox>
          <LogoImg src={shb} alt="maker_logo" />
          <span>SiHyun-Baek initial logo</span>
        </TextBox>
      </InnerContainer>
    </Container>
  );
}
export default Header;
