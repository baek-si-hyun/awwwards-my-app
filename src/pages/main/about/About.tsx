import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import war from "../../../assets/img/main_img/war.jpg";
import bdo from "../../../assets/img/main_img/bdo.jpg";
import lol from "../../../assets/img/main_img/lol.jpg";
import awwwardC from "../../../assets/img/main_img/awwwardC.png";
import upbitC from "../../../assets/img/main_img/upbitC.png";
import binanceC from "../../../assets/img/main_img/binanceC.png";
import awwwardicon from "../../../assets/img/main_img/awwwardicon.png";
import upbiticon from "../../../assets/img/main_img/upbiticon.png";
import binanceicon from "../../../assets/img/main_img/binanceicon.png";
import newjeans from "../../../assets/img/main_img/newjeans.jpg";
import NewJeans from "./NewJeans";
import AllSongs from "./AllSongs";
import all from "../../../assets/img/recommended_song/allsong.jpg";
import { IId } from "../../../interface/Interface";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
`;
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  text-align: center;
  width: 20vw;
  margin-top: 0.9vw;
  margin-bottom: 6vw;
  font-size: 1.3vw;
  line-height: 1.4;
`;
const SubTextBox = styled.div`
  width: 100%;
  text-align: left;
  margin: 3vw 0;
  font-size: 2.6vw;
  font-weight: bold;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  height: clamp(300px, 50vw, 1000px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: clamp(300px, 48vw, 1000px);
  border-radius: 13px;
  overflow: hidden;
  z-index: 2;
  clear: both;
`;

const BoxText = styled(motion.div)<{ isboxhover: boolean }>`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 4vw;
  opacity: ${(props) => (props.isboxhover ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  position: relative;
  span {
    position: absolute;
    left: 6vw;
    bottom: 6vw;
  }
`;

const boxVariants = {
  enter: (direction: boolean) => ({
    x: direction ? -window.outerWidth : window.outerWidth,
  }),
  center: {
    x: 0,
  },
  exit: (direction: boolean) => ({
    x: direction ? window.outerWidth : -window.outerWidth,
  }),
};

const PrevButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 1%;
  background: none;
  border: none;
  width: 10rem;
  height: 10%;
  cursor: pointer;
  z-index: 3;
  span {
    font-size: 40px;
    color: #fff;
    transition: text-shadow 0.2s ease-in-out;
  }
  :hover {
    span {
      text-shadow: 0px 0px 10px #fff;
    }
  }
`;
const NextButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 1%;
  background: none;
  border: none;
  width: 10rem;
  height: 10%;
  cursor: pointer;
  z-index: 3;
  span {
    font-size: 40px;
    color: #fff;
    transition: text-shadow 0.2s ease-in-out;
  }
  :hover {
    span {
      text-shadow: 0px 0px 10px #fff;
    }
  }
`;

const SourceText = styled.span`
  margin-top: 4vw;
  font-size: 1vw;
`;
const ExplanTextBox = styled.div`
  margin: 15vw 0px 5vw 0;
  line-height: 1.4;
  width: 100%;
  text-align: left;
  font-size: 2.6vw;
  font-weight: bold;
`;

const SiteWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4vw;
  clear: both;
`;
const Sitebox = styled.div`
  width: clamp(200px, 30.6vw, 590px);
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
`;
const SiteImgBox = styled.div<{ url: string }>`
  aspect-ratio: 4/3;
  border-radius: 15px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  overflow: hidden;
`;
const SiteTextBox = styled.div`
  display: flex;
  align-items: center;
`;

const InnerFigure = styled.figure`
  display: flex;
  align-items: center;
  img {
    margin: 0 0.5vw;
    object-fit: cover;
  }
  figcaption {
    span {
      font-weight: bold;
      font-size: 1.3vw;
      border-bottom: 2px solid #b7b7b7;
    }
  }
`;

const HoverBox = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-in-out;
`;
const HoverBox1 = styled(HoverBox)<{ isHover: number }>`
  opacity: ${(props) => (props.isHover === 1 ? 1 : 0)};
`;
const HoverBox2 = styled(HoverBox)<{ isHover: number }>`
  opacity: ${(props) => (props.isHover === 2 ? 1 : 0)};
`;
const HoverBox3 = styled(HoverBox)<{ isHover: number }>`
  opacity: ${(props) => (props.isHover === 3 ? 1 : 0)};
`;

const SenterBox = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1vw 1.5vw;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #3e3e3e;
    color: #fff;
  }
  a {
    font-size: 0.85vw;
  }
`;
const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  position: absolute;
  left: 5%;
  bottom: 8%;
  color: #fff;
`;

const BottomBoxTop = styled.div`
  font-weight: lighter;
`;
const BottomBoxBottom = styled.div`
  font-size: 1.5vw;
  font-weight: 500;
`;
const swipeConfidenceThreshold = 1000;

const MusicWrapper = styled.div`
  width: 100%;
`;
const MusicBox = styled.div`
  width: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;

const InnerMusicBox1 = styled.div`
  position: relative;
`;
const MusicImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const MusicTextBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  div {
    position: absolute;
    left: 5%;
    bottom: 10%;
  }
  h2 {
    font-weight: bold;
    font-size: 2vw;
    margin-bottom: 1vw;
  }
  h3 {
    font-size: 1vw;
    line-height: 1.4;
  }
`;
const InnerMusicBox2 = styled.div`
  border: 1px solid black;
  background: #000;
  padding: 8vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7vw;
  color: #fff;
  p {
    font-size: 2.2vw;
    text-align: center;
  }
`;

const InnerMusicBox3 = styled.div`
  position: relative;
`;
const AllMusicTextBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  h2 {
    font-weight: lighter;
    font-size: 2.2vw;
  }
`;
const InnerMusicBox4 = styled.div`
  background: #000;
  padding: 8vw 0;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7vw;
  color: #fff;
  p {
    font-size: 2.2vw;
    text-align: center;
  }
`;
function About({ id }: IId) {
  const [visible, setVisible] = useState(0);
  const [boxHover, setBoxHover] = useState(false);
  const [back, setBack] = useState(false);
  const src = [lol, war, bdo];
  const text = [
    "League of Legends (칼바람, 우르프)",
    "War Thunder (밀덕 아님)",
    "Black Desert (무 기약 휴식중)",
  ];
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 2 ? prev - 2 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? prev + 2 : prev - 1));
  };
  const [hover, setHover] = useState(0);
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  return (
    <Container id={id}>
      <InnerContainer>
        <TextBox>
          <TextBoxTop>Si Hyun Baek</TextBoxTop>
          <TextBoxMiddle>about me</TextBoxMiddle>
          <TextBoxbottom>Could be TMI...</TextBoxbottom>
        </TextBox>
        <SubTextBox>These are my favorite games.</SubTextBox>
        <Wrapper>
          <AnimatePresence mode="wait" custom={back} initial={false}>
            <Box
              key={visible}
              src={src[visible]}
              custom={back}
              variants={boxVariants}
              transition={{ type: "tween" }}
              initial="enter"
              animate="center"
              exit="exit"
              onMouseOver={() => setBoxHover(true)}
              onMouseOut={() => setBoxHover(false)}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  nextPlease();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevPlease();
                }
              }}
            >
              <BoxText isboxhover={boxHover}>
                <span>{text[visible]}</span>
              </BoxText>
            </Box>
          </AnimatePresence>
          <PrevButton onClick={prevPlease}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </PrevButton>
          <NextButton onClick={nextPlease}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </NextButton>
        </Wrapper>
        <SourceText>Source: Each game company site</SourceText>
        <ExplanTextBox>This is a frequently visited site.</ExplanTextBox>
        <SiteWrapper>
          <Sitebox>
            <SiteImgBox
              url={awwwardC}
              onMouseOver={() => setHover(1)}
              onMouseOut={() => setHover(0)}
            >
              <HoverBox1 isHover={hover}>
                <SenterBox href="https://www.awwwards.com/">
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                  &nbsp;
                  <div>
                    <span>Visit Site</span>
                  </div>
                </SenterBox>
                <BottomBox>
                  <BottomBoxTop>WEBSITE</BottomBoxTop>
                  <BottomBoxBottom>awwwards</BottomBoxBottom>
                </BottomBox>
              </HoverBox1>
            </SiteImgBox>
            <SiteTextBox>
              <div>
                <small>by</small>
              </div>
              <InnerFigure>
                <img
                  src={awwwardicon}
                  style={{ width: 30, height: 30, borderRadius: 20 }}
                />
                <figcaption>
                  <span>awwwards</span>
                </figcaption>
              </InnerFigure>
            </SiteTextBox>
          </Sitebox>
          <Sitebox>
            <SiteImgBox
              url={upbitC}
              onMouseOver={() => setHover(2)}
              onMouseOut={() => setHover(0)}
            >
              <HoverBox2 isHover={hover}>
                <SenterBox href="https://upbit.com/home">
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                  &nbsp;
                  <div>
                    <span>Visit Site</span>
                  </div>
                </SenterBox>
                <BottomBox>
                  <BottomBoxTop>WEBSITE</BottomBoxTop>
                  <BottomBoxBottom>UPbit</BottomBoxBottom>
                </BottomBox>
              </HoverBox2>
            </SiteImgBox>
            <SiteTextBox>
              <div>
                <small>by</small>
              </div>
              <InnerFigure>
                <img
                  src={upbiticon}
                  style={{ width: 30, height: 30, borderRadius: 20 }}
                />
                <figcaption>
                  <span>UPbit</span>
                </figcaption>
              </InnerFigure>
            </SiteTextBox>
          </Sitebox>
          <Sitebox>
            <SiteImgBox
              url={binanceC}
              onMouseOver={() => setHover(3)}
              onMouseOut={() => setHover(0)}
            >
              <HoverBox3 isHover={hover}>
                <SenterBox href="https://www.binance.com/en">
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                  &nbsp;
                  <div>
                    <span>Visit Site</span>
                  </div>
                </SenterBox>
                <BottomBox>
                  <BottomBoxTop>WEBSITE</BottomBoxTop>
                  <BottomBoxBottom>BINANCE</BottomBoxBottom>
                </BottomBox>
              </HoverBox3>
            </SiteImgBox>
            <SiteTextBox>
              <div>
                <small>by</small>
              </div>
              <InnerFigure>
                <img
                  src={binanceicon}
                  style={{ width: 30, height: 30, borderRadius: 20 }}
                />
                <figcaption>
                  <span>BINANCE</span>
                </figcaption>
              </InnerFigure>
            </SiteTextBox>
          </Sitebox>
        </SiteWrapper>
        <SourceText>Source: Captured from each company site</SourceText>
        <ExplanTextBox>Songs I've been listening to lately</ExplanTextBox>
        <MusicWrapper>
          <MusicBox>
            <InnerMusicBox1>
              <MusicImg src={newjeans} />
              <MusicTextBox>
                <div>
                  <h2>NewJeans</h2>
                  <h3>
                    NewJeans는 2022년 7월 22일에 데뷔한 대한민국의 5인조 걸
                    그룹으로, 소속사는 HYBE 산하의 레이블인
                    <br /> ADOR이다. SM 엔터테인먼트 디렉터 출신으로 HYBE에
                    영입된 민희진이 프로듀서로 나서서 발굴한
                    <br /> 걸그룹이다. 2022년 8월 18일 《엠카운트다운》에서 데뷔
                    3주만에 첫 1위를 차지하였다.
                  </h3>
                </div>
              </MusicTextBox>
            </InnerMusicBox1>
            <InnerMusicBox2>
              <div>
                <p>"an easy song to listen to"</p>
              </div>
              <div>
                <p>Recommended List</p>
              </div>
              <NewJeans />
            </InnerMusicBox2>
            <InnerMusicBox3>
              <MusicImg src={all} />
              <AllMusicTextBox>
                <div>
                  <h2>"Subjective"</h2>
                </div>
              </AllMusicTextBox>
            </InnerMusicBox3>
            <InnerMusicBox4>
              <div>
                <p>Recommended List</p>
              </div>
              <AllSongs />
            </InnerMusicBox4>
          </MusicBox>
        </MusicWrapper>
      </InnerContainer>
    </Container>
  );
}
export default About;
