import styled from "styled-components";
import { useState } from "react";
import Footer from "../../components/Footer";
import KanbanFont from "./KanbanFont";
import KanbanColor from "./KanbanColor";
import KanbanPreview from "./KanbanPreview";
import Nav from "../../components/Nav";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  padding: 5vw 2.7vw;
  width: 100%;
`;
const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;
const TextTop = styled.div`
  font-family: "ApercuL", sans-serif;
  font-size: 1vw;
`;
const TextBottom = styled.div`
  font-size: 3vw;
  font-weight: Bold;
  line-height: 1.2;
`;

const DescriptionFont = styled.div`
  margin: 4vw 0;
`;

const DescriptionProject = styled.div``;
const DescriptionProjectText = styled.div`
  font-size: 2vw;
  font-weight: bold;
  padding: 2vw 0;
  @media (max-width: 480px) {
    & {
      font-size: 1.2rem;
    }
  }
`;
const DescriptionProjectContent = styled.div`
  font-size: 1.2vw;
  line-height: 2;
  font-family: "Pretendard", sans-serif;
  display: flex;
  gap: 4rem;
  word-break: keep-all;
  div {
    width: 50%;
  }
  @media (max-width: 480px) {
    & {
      flex-direction: column;
      gap: 0.5rem;
      div {
        width: 100%;
      }
    }
  }
`;

function Kanban() {
  return (
    <Container id="sotd">
      <InnerContainer>
        <KanbanPreview />
        <Description id="fontColor">
          <DescriptionText>
            <TextTop>
              <h2>Description</h2>
            </TextTop>
            <TextBottom>
              <h3>fonts, colors</h3>
            </TextBottom>
          </DescriptionText>
          <DescriptionFont>
            <KanbanFont />
            <KanbanColor />
          </DescriptionFont>
          <DescriptionProject id="about">
            <DescriptionProjectText>
              <h3>About "KanBan Board"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>
                  "nomadcoders"?????? ?????? ??????????????? ???????????? ?????? ???????????? ??????
                  ?????????????????????.React??? typescript??? ??????????????? ????????? Styled
                  Components, Recoil, react beautiful dnd, react hook form???
                  ?????????????????????. ???????????? "?????????(te6-in)" ?????? ?????? ????????????
                  ??????????????????. ?????? ??????????????? "?????? ?????????", "????????? ??????
                  ????????????", "localStorage??? ?????? ??? ????????????"??? ???????????????
                  ??????????????????.
                </p>
              </div>
              <div>
                <p>
                  Due to a code challenge conducted on a lecture site called
                  "nomadcoders" It was created. React and typescript were
                  combined and other Styled Components, Recoil, react beautiful
                  dnd, react hook form Used. The design is "Kim Joo-i
                  (te6-in)"'s code challenge Referenced. The project is "Move
                  Board", "New Board" Update "Creating", "Saving and Loading to
                  localStorage" Coming soon.
                </p>
              </div>
            </DescriptionProjectContent>
          </DescriptionProject>
        </Description>
      </InnerContainer>
      <Footer />
      <Nav />
    </Container>
  );
}
export default Kanban;
