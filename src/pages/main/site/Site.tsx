import styled from "styled-components";
import { TextBox, TextBoxMiddle, TextBoxbottom } from "../../common/mainCommon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4vw;
  padding: 8vw 2.7vw 15vw 2.7vw;
  margin-top: -5rem;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 0;
  backdrop-filter: blur(10px);
  @media (max-width: 1050px) {
    & {
      padding-bottom: 12rem;
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

const SiteImgBox = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 650px) {
    & {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }
  }
`;

const SiteImg = styled.img``;

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
      border-bottom: 2px solid #222;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 99;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    & {
      opacity: 1;
    }
  }
`;

const SenterBox = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1vw 1vw;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  will-change: background-color, color;
  font-size: 0.8vw;
  :hover {
    background-color: #3e3e3e;
    color: #fff;
  }
  @media (max-width: 1024px) {
    & {
      opacity: 1;
    }
  }
  @media (max-width: 650px) {
    & {
      font-size: 1rem;
      padding: 1rem 1rem;
    }
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
  @media (max-width: 650px) {
    & {
      font-size: 3vw;
    }
  }
`;
const BottomBoxBottom = styled.div`
  font-size: 1.5vw;
  font-weight: 500;
  @media (max-width: 650px) {
    & {
      font-size: 5vw;
    }
  }
`;
function Site() {
  return (
    <Container>
      <TextBox>
        <TextBoxMiddle>reference site</TextBoxMiddle>
        <TextBoxbottom>
          프로젝트를 제작하며 참고한 사이트들 입니다.
        </TextBoxbottom>
      </TextBox>
      <FlexBox>
        <Sitebox>
          <SiteImgBox>
            <img
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/49cd31ba-6549-4f5c-823e-06ee522be100/public"
              alt="awwwards"
              loading="lazy"
              decoding="async"
            />
            <HoverBox>
              <SenterBox href="https://www.awwwards.com/" target="_blank">
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
            </HoverBox>
          </SiteImgBox>
          <SiteTextBox>
            <div>
              <small>by</small>
            </div>
            <InnerFigure>
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e1f7fdb0-746c-4598-7dd0-c37a0b344d00/icon"
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
          <SiteImgBox>
            <SiteImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0b467ebf-f1d9-46f9-37d9-e4b9c08ac600/public"
              alt="upbit"
              loading="lazy"
              decoding="async"
            />
            <HoverBox>
              <SenterBox href="https://upbit.com/home" target="_blank">
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
            </HoverBox>
          </SiteImgBox>
          <SiteTextBox>
            <div>
              <small>by</small>
            </div>
            <InnerFigure>
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/aaca2829-bf16-4dfc-1bcd-d50e53b57a00/icon"
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
          <SiteImgBox>
            <SiteImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/b55e5689-87bc-4c9d-5ab6-f151077beb00/public"
              alt="investing"
              loading="lazy"
              decoding="async"
            />
            <HoverBox>
              <SenterBox href="https://coinmarketcap.com/ko/" target="_blank">
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
                <BottomBoxBottom>CoinMarketCap</BottomBoxBottom>
              </BottomBox>
            </HoverBox>
          </SiteImgBox>
          <SiteTextBox>
            <div>
              <small>by</small>
            </div>
            <InnerFigure>
              <img
                src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/00f10618-d1f1-42ce-0ede-651abcd38200/icon"
                style={{ width: 30, height: 30, borderRadius: 20 }}
                alt="investingicon"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>CoinMarketCap</span>
              </figcaption>
            </InnerFigure>
          </SiteTextBox>
        </Sitebox>
      </FlexBox>
    </Container>
  );
}
export default Site;
