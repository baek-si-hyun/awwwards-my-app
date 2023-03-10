import styled from "styled-components";
import { IId } from "../../../interface/interface";
import Game from "./Game";
import Music from "./Music";
import Site from "./Site";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
  @media (max-width: 768px) {
    & {
      font-size: 1.5vw;
    }
  }
`;
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  text-align: center;
  width: 20vw;
  margin-top: 0.9vw;
  margin-bottom: 6vw;
  font-size: 1.3vw;
  line-height: 1.4;
  @media (max-width: 768px) {
    & {
      width: 80%;
      font-size: 2.5vw;
    }
  }
`;
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

function About({ id }: IId) {
  return (
    <Container id={id}>
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
