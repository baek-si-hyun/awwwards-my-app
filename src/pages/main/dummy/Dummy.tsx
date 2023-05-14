import styled from "styled-components";
import {
  Container,
  InnerContainer,
  TextBox,
  TextBoxTop,
  TextBoxbottom,
  TextBoxMiddle,
} from "../../../components/mainCommon";
import CoinList from "./CoinList";
import Game from "./Game";

import Music from "./Music";
import Site from "./Site";

const SubTextBox = styled.div`
  width: 100%;
  text-align: left;
  margin: 3vw 0px 3vw 0;
  font-size: 2.6vw;
  font-weight: bold;
  span {

    font-size: 1.5vw;
    font-family: "Pretendard", sans-serif;
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

function About() {
  return (
    <Container id="about">
      <InnerContainer>
        <TextBox>
          <TextBoxTop>Si Hyun Baek</TextBoxTop>
          <TextBoxMiddle>just dummy</TextBoxMiddle>
          <TextBoxbottom>Place to practice</TextBoxbottom>
        </TextBox>
        <SubTextBox>
          Using WebSockets and React Query.
          <br />
          <span>
            직접 웹소켓서버를 운영하고 싶었지만 유지비용 문제로 <br />
            업비트 웹소켓을 다이렉트로 연결하였습니다.
          </span>
        </SubTextBox>
        <CoinList />
        <ExplanTextBox>These are my favorite games.</ExplanTextBox>
        <Game />
        <SourceText>Source: Each game company site</SourceText>
        <ExplanTextBox>This is a frequently visited site.</ExplanTextBox>
        <Site />
        <SourceText>Source: Captured from each company site</SourceText>
        <ExplanTextBox>Songs I've been listening to lately</ExplanTextBox>
        <Music />
      </InnerContainer>
    </Container>
  );
}
export default About;
