import styled from "styled-components";
import { useState } from "react";
import awwwardC from "../../../assets/img/main_img/awwwardC.png";
import upbitC from "../../../assets/img/main_img/upbitC.png";
import binanceC from "../../../assets/img/main_img/binanceC.png";
import awwwardicon from "../../../assets/img/main_img/awwwardicon.png";
import upbiticon from "../../../assets/img/main_img/upbiticon.png";
import binanceicon from "../../../assets/img/main_img/binanceicon.png";

const Container = styled.div`
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

function Site() {
  const [hover, setHover] = useState(0);
  return (
    <Container>
      <Sitebox>
        <SiteImgBox
          url={awwwardC}
          onMouseOver={() => setHover(1)}
          onMouseOut={() => setHover(0)}
        >
          <HoverBox1 isHover={hover}>
            <SenterBox href="https://www.awwwards.com/">
              <span className="material-symbols-outlined">arrow_right_alt</span>
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
              <span className="material-symbols-outlined">arrow_right_alt</span>
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
              <span className="material-symbols-outlined">arrow_right_alt</span>
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
    </Container>
  );
}
export default Site;
