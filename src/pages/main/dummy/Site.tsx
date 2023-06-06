import styled from "styled-components";
import { useState } from "react";
import awwwardC from "../../../assets/img/main_img/awwwardC.webp";
import upbitC from "../../../assets/img/main_img/upbitC.webp";
import investingC from "../../../assets/img/main_img/investingC.webp";
import awwwardicon from "../../../assets/img/main_img/awwwardicon.png";
import upbiticon from "../../../assets/img/main_img/upbiticon.png";
import investingicon from "../../../assets/img/main_img/investingicon.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4vw;
  clear: both;
  @media (max-width: 650px) {
    & {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }
  }
`;
const Sitebox = styled.div`
  width: 30.6vw;
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
  @media (max-width: 650px) {
    & {
      width: 100%;
    }
  }
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
  @media (max-width: 650px) {
    & {
      gap: 1rem;
    }
  }
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
  @media (max-width: 650px) {
    & {
      gap: 1rem;
      figcaption {
        span {
          font-size: 1.5rem;
        }
      }
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
  padding: 1rem 1rem;
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
            <SenterBox href="https://www.awwwards.com/" target="_blank">
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
              alt="awwwardicon"
              loading="lazy"
              decoding="async"
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
            <SenterBox href="https://upbit.com/home" target="_blank">
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
              alt="upbiticon"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>UPbit</span>
            </figcaption>
          </InnerFigure>
        </SiteTextBox>
      </Sitebox>
      <Sitebox>
        <SiteImgBox
          url={investingC}
          onMouseOver={() => setHover(3)}
          onMouseOut={() => setHover(0)}
        >
          <HoverBox3 isHover={hover}>
            <SenterBox href="https://kr.investing.com/" target="_blank">
              <span className="material-symbols-outlined">arrow_right_alt</span>
              &nbsp;
              <div>
                <span>Visit Site</span>
              </div>
            </SenterBox>
            <BottomBox>
              <BottomBoxTop>WEBSITE</BottomBoxTop>
              <BottomBoxBottom>INVESTING</BottomBoxBottom>
            </BottomBox>
          </HoverBox3>
        </SiteImgBox>
        <SiteTextBox>
          <div>
            <small>by</small>
          </div>
          <InnerFigure>
            <img
              src={investingicon}
              style={{ width: 30, height: 30, borderRadius: 20 }}
              alt="binanceicon"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>INVESTING</span>
            </figcaption>
          </InnerFigure>
        </SiteTextBox>
      </Sitebox>
    </Container>
  );
}
export default Site;
