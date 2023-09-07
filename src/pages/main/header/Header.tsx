import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IResize } from "../../../interface/iproject";

const Container = styled.div`
  width: 100%;
  background: url("https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/1fe4bbdc-2b82-4598-e76f-53fd4d9a5400/avatar")
    repeat;
  position: sticky;
  top: 0;
  z-index: -9999;
  filter: blur(0);
  transition: filter 0.5s ease;
`;

const Inner = styled.div`
  padding: 2.7vw;
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media (max-width: 1050px) {
    & {
      padding: 8vw 2.7vw;
    }
  }
`;
const LeftBox = styled.div`
  padding-top: 1.3vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.span`
  font-family: "Suisse", sans-serif;
  font-size: 11vw;
  letter-spacing: -6px;
  line-height: 0.85;
`;
const SubTitle = styled.span`
  font-family: "Suisse", sans-serif;
  font-size: 4rem;
  color: #af2f00;
`;
const Discription = styled.p`
  font-size: 1.5rem;
  padding-top: 1rem;
`;
const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  &:nth-child(even) {
    padding-right: 10vw;
  }
`;

const Img = styled.img`
  width: 12vw;
  max-width: 218px;
  border-radius: clamp(5px, 20vw, 40px);
  box-shadow: 0 0 5rem rgba(0, 0, 0, 1);

  @media (max-width: 1920px) {
    & {
      border-radius: 45.42px;
    }
  }
  @media (max-width: 1050px) {
    & {
      width: 40vw;
    }
  }
`;

const ColorImg = styled(Img)`
  box-shadow: 0 0 5rem #ff4400;
  z-index: 3;
`;
function Header() {
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const maxBlur = 10;
      const newBlurValue = Math.min(scrollPercentage * maxBlur, maxBlur);
      setBlurValue(newBlurValue);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const getResizeWidth = useSelector(
  //   ({ resizeWidthSlice }: { resizeWidthSlice: IResize }) => {
  //     return resizeWidthSlice.resizeWidth;
  //   }
  // );
  // const [speed, setSpeed] = useState(130);

  // useEffect(() => {
  //   const graphMode = () => {
  //     if (getResizeWidth > 1280) {
  //       setSpeed(130);
  //     }
  //     if (getResizeWidth <= 1280) {
  //       setSpeed(90);
  //     }
  //     if (getResizeWidth <= 768) {
  //       setSpeed(60);
  //     }
  //     if (getResizeWidth <= 429) {
  //       setSpeed(40);
  //     }
  //   };
  //   graphMode();
  // }, [getResizeWidth]);
  return (
    <Container id="header">
      <Inner>
        <LeftBox>
          <Title>
            I'm SH B<br /> Portfolio/23
          </Title>
          <SubTitle>
            Fornt-end Developer
            <br />
            <Discription>
              Welcome! You can explore the projects
              <br /> I've created while studying <br />
              and discover the features I've wanted to build
            </Discription>
          </SubTitle>
        </LeftBox>
        <RightBox>
          <ItemBox>
            <Img
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/2806124f-ade6-41a9-98d7-d2b35b46c600/header"
              alt="headerimg"
              loading="lazy"
              decoding="async"
            />
          </ItemBox>
          <ItemBox>
            <ColorImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/8c6ec1ba-c816-4fdf-3102-996cab814100/header"
              alt="headerimg"
              loading="lazy"
              decoding="async"
            />
          </ItemBox>
          <ItemBox>
            <Img
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/16c32083-717f-4635-741a-538903476500/header"
              alt="headerimg"
              loading="lazy"
              decoding="async"
            />
          </ItemBox>
          <ItemBox>
            <Img
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/95b80677-9e42-4952-08da-009ff4ea9e00/header"
              alt="headerimg"
              loading="lazy"
              decoding="async"
            />
          </ItemBox>
        </RightBox>
      </Inner>
    </Container>
  );
}
export default Header;
{
  /* <Wrap>
          <InnerWrap play={true} gradient={false} speed={speed}>
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
          </InnerWrap>
        </Wrap> */
}
