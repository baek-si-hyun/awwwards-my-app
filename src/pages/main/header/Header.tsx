import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { IId } from "../../../interface/Interface";
import shb from "../../../assets/img/main_img/shbicon.png";
import HeaderMainImg from "./HeaderMainImg";

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
    font-family: "ApercuL", sans-serif;
    font-weight: lighter;
  }
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

function Header({ id }: IId) {
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
        <HeaderMainImg />
        <TextBox>
          <LogoImg src={shb} />
          <span>SiHyun-Baek initial logo</span>
        </TextBox>
      </InnerContainer>
    </Container>
  );
}
export default Header;
