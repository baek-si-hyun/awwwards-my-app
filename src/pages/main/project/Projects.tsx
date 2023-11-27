import styled from "styled-components";
import {
  Inner,
  TextBox,
  TextBoxbottom,
  TextBoxMiddle,
} from "../../common/mainCommon";
import ProjectsLinkBox from "./ProjectsLinkBox";

const Container = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 1vw 0 13vw 0;
  border-radius: 5vw;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
  margin-top: -1rem;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
function Projects() {
  return (
    <Container id="projects">
      <Inner>
        <TextBox>
          <TextBoxMiddle>
            <h3>projects</h3>
          </TextBoxMiddle>
          <TextBoxbottom>
            지금까지 공부하며 만든 프로젝트들입니다.
          </TextBoxbottom>
        </TextBox>
        <GridBox>
          <ProjectsLinkBox />
        </GridBox>
      </Inner>
    </Container>
  );
}

export default Projects;
