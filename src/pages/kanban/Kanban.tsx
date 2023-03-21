
import Footer from "../../components/Footer";
import KanbanFont from "./KanbanFont";
import KanbanColor from "./KanbanColor";
import KanbanPreview from "./KanbanPreview";
import Nav from "../../components/Nav";
import {
  Container,
  Description,
  DescriptionFont,
  DescriptionProject,
  DescriptionProjectContent,
  DescriptionProjectText,
  DescriptionText,
  InnerContainer,
  TextBottom,
  TextTop,
} from "../../components/routerPagesCommon";

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
          <DescriptionProject id="routerAbout">
            <DescriptionProjectText>
              <h3>About "KanBan Board"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>
                  "nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해
                  제작되었습니다.React와 typescript를 조합하였고 그외에 Styled
                  Components, Recoil, react beautiful dnd, react hook form을
                  사용하였습니다. 디자인은 "김주이(te6-in)" 님의 코드 챌린지를
                  참고했습니다. 해당 프로젝트는 "보드 옮기기", "새로운 보드
                  생성하기", "localStorage에 저장 및 로드하기"의 업데이트를
                  준비중입니다.
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
