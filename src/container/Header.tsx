import { useRef } from "react";
import styled from "styled-components";
import { IMAGES } from "../constants/images";
import HeaderLogos from "../components/Header/HeaderLogos";

const Container = styled.header`
  width: 100%;
  background: url(${IMAGES.HEADER.BACKGROUND}) repeat;
  position: sticky;
  top: 0;
  z-index: -1;
  /* 로고가 x:100vw 에서 들어오는 동안 생기는 가로 넘침을 자른다(clip 은 sticky 를 깨지 않는다) */
  overflow-x: hidden;
  overflow-x: clip;
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
function Header() {
  const homeHeader = useRef(null);

  return (
    <Container id="home" ref={homeHeader}>
      <Inner>
        <LeftBox>
          <Title>
            I'm SH B<br /> Portfolio/24
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
        <HeaderLogos />
      </Inner>
    </Container>
  );
}
export default Header;
