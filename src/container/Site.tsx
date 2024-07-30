import styled from "styled-components";
import {
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../pages/main/common/mainCommon";
import { siteList } from "../services/listData";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.4vw;
  padding: 8vw 2.7vw 15vw 2.7vw;
  margin-top: -5rem;
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 0;
  height: 100%;
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
  position: relative;
  top: 0;
  left: 0;

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
const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 20px;
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
        {siteList.map((item, i) => (
          <Sitebox key={i}>
            <SiteImgBox>
              <SiteImg
                src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/${item.img}/public`}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <HoverBox>
                <SenterBox href={item.href} target="_blank">
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
                  <BottomBoxBottom>{item.alt}</BottomBoxBottom>
                </BottomBox>
              </HoverBox>
            </SiteImgBox>
            <SiteTextBox>
              <div>
                <small>by</small>
              </div>
              <InnerFigure>
                <LogoImg
                  src={`https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/${item.icon}/icon`}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>{item.alt}</span>
                </figcaption>
              </InnerFigure>
            </SiteTextBox>
          </Sitebox>
        ))}
      </FlexBox>
    </Container>
  );
}
export default Site;
