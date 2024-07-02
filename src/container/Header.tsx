import { useRef } from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  background: url("https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/1fe4bbdc-2b82-4598-e76f-53fd4d9a5400/avatar")
    repeat;
  position: sticky;
  top: 0;
  z-index: -1;
`;

const Inner = styled.div`
  padding: 1rem 2.7vw;
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100vh;
  @media (max-width: 1050px) {
    & {
      padding: 8vw 2.7vw;
    }
  }
  @media (max-width: 430px) {
    & {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
const LeftBox = styled.div`
  padding: 2vw 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 430px) {
    & {
      gap: 20rem;
    }
  }
`;
const Title = styled.span`
  font-family: "Suisse", sans-serif;
  font-size: 11vw;
  letter-spacing: -6px;
  line-height: 0.85;
  @media (max-width: 430px) {
    & {
      font-size: 15vw;
      letter-spacing: -3px;
    }
  }
`;
const SubTitle = styled.span`
  font-family: "Suisse", sans-serif;
  font-size: 3vw;
  @media (max-width: 430px) {
    & {
      font-size: 5vw;
    }
  }
`;
const Discription = styled.p`
  font-size: 1.5vw;
  padding-top: 1rem;
  @media (max-width: 430px) {
    & {
      padding: 0.3rem;
      font-size: 1.5vw;
    }
  }
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1050px) {
    & {
      gap: 0;
    }
  }
  @media (max-width: 430px) {
    & {
      flex-direction: row;
      justify-content: center;
    }
  }
`;
const ItemBox = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:nth-child(even) {
    padding-right: 10vw;
  }
  @media (max-width: 430px) {
    &:nth-child(even) {
      padding-right: 0;
    }
    & {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const Img = styled.img`
  width: 12vw;
  height: 12vw;
  max-width: 218px;
  max-height: 218px;
  border-radius: clamp(5px, 20vw, 40px);
  box-shadow: 0 0 5rem rgba(0, 0, 0, 1);

  @media (max-width: 1920px) {
    & {
      border-radius: 45.42px;
    }
  }
  @media (max-width: 1550px) {
    & {
      border-radius: 30px;
      width: 13vw;
      height: 13vw;
    }
  }
  @media (max-width: 1280px) {
    & {
      border-radius: 30px;
      width: 13vw;
      height: 13vw;
    }
  }
  @media (max-width: 1050px) {
    & {
      border-radius: 30px;
      width: 13vw;
      height: 13vw;
    }
  }
  @media (max-width: 430px) {
    & {
      border-radius: 10px;
      width: 20vw;
      height: 20vw;
    }
  }
`;
const ColorShadowImg = styled(Img)`
  box-shadow: 0 0 3rem rgba(255, 255, 255, 1);
`;
function Header() {
  const homeHeader = useRef(null);

  return (
    <Container id="home" ref={homeHeader}>
      <Inner>
        <LeftBox>
          <Title>
            I'm SH B<br /> Portfolio/23
          </Title>
          <SubTitle>
            Web Developer
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
            <ColorShadowImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/b4554793-5094-4e3d-68b4-b470fc07f700/header"
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
