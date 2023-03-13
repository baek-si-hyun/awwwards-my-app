import styled from "styled-components";
import {
  Container,
  InnerContainer,
  TextBox,
  TextBoxTop,
  TextBoxbottom,
  TextBoxMiddle,
} from "../../../components/mainCommon";
import Game from "./Game";
import Music from "./Music";
import Site from "./Site";

const SubTextBox = styled.div`
  width: 100%;
  text-align: left;
  margin: 3vw 0;
  font-size: 2.6vw;
  font-weight: bold;
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
          <TextBoxMiddle>about me</TextBoxMiddle>
          <TextBoxbottom>Could be TMI...</TextBoxbottom>
        </TextBox>
        <SubTextBox>These are my favorite games.</SubTextBox>
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
