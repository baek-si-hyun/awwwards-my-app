import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { IId } from "../../../interface/Interface";
import { useState, useRef } from "react";
import iconpng from "../../../assets/img/main_img/iconpng.png";
import shb from "../../../assets/img/main_img/shbicon.png";
import { AnimatePresence, motion } from "framer-motion";
import { useInterval } from "usehooks-ts";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d7d7d7;
`;
const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  text-align: center;
  font-size: 12.7vw;
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
    font-family: "ApercuL";
    font-weight: lighter;
  }
`;

const HeaderImg = styled.img`
  position: absolute;
  top: -1vw;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  text-align: center;
  font-size: 1vw;
  margin: 3vw 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const LogoImg = styled.img`
  width: 2vw;
  border-radius: 20px;
`;
const HeaderImgBox = styled.div`
  margin-top: 2.1vw;
  overflow: hidden;
  aspect-ratio: 16/7;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const MotionBox = styled.div`
  width: 100%;
  padding: 1vw 3vw;
`;

const InnerMotionBox = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1.7vw 5.8vw auto;
  gap: 0.5rem;
`;

const MotionTop = styled.div`
  position: relative;
  overflow: hidden;
`;
const MotionBottom = styled.div`
  position: relative;
  overflow: hidden;
`;
const TopBox = styled(motion.div)`
  font-size: 1.3vw;
  position: absolute;
`;
const BottomBox = styled(motion.div)`
  font-size: 5.3vw;
  font-weight: Bold;
  position: absolute;
`;

function Header({ id }: IId) {
  const topList = ["tools", "by", "Date"];
  const bottomList = ["Figma", "Si Hyun Baek", "2022. 12. 28."];
  const [visible, setVisible] = useState(0);
  useInterval(() => {
    if (visible !== 2) {
      setVisible(visible + 1);
    }
    if (visible === 2) {
      setVisible(0);
    }
  }, 6000);
  return (
    <Container id={id}>
      <InnerContainer>
        <Title>site of the day</Title>
        <Wrap>
          <Inner play={true} gradient={false} speed={130}>
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
        <HeaderImgBox>
          <HeaderImg src={iconpng} />
          <MotionBox>
            <InnerMotionBox>
              <MotionTop>
                <AnimatePresence>
                  <TopBox
                    key={visible}
                    transition={{ type: "tween", duration: 0.5 }}
                    initial={{ y: 50, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                  >
                    {topList[visible]}
                  </TopBox>
                </AnimatePresence>
              </MotionTop>

              <MotionBottom>
                <AnimatePresence>
                  <BottomBox
                    key={visible}
                    transition={{ type: "tween", duration: 0.5 }}
                    initial={{ y: 100, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                  >
                    {bottomList[visible]}
                  </BottomBox>
                </AnimatePresence>
              </MotionBottom>
            </InnerMotionBox>
          </MotionBox>
        </HeaderImgBox>
        <TextBox>
          <LogoImg src={shb} />
          <span>SiHyun-Baek initial logo</span>
        </TextBox>
      </InnerContainer>
    </Container>
  );
}
export default Header;
