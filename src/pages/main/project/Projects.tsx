import styled from "styled-components";
import {
  Container,
  InnerContainer,
  TextBox,
  TextBoxTop,
  TextBoxbottom,
  TextBoxMiddle,
} from "../../../components/mainCommon";
import ProjectsRouter from "./ProjectsLinkBox";


const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
function Projects() {
  return (
    <Container id="projects">
      <InnerContainer>
        <TextBox>
          <TextBoxTop>
            <h2>Si Hyun Baek</h2>
          </TextBoxTop>
          <TextBoxMiddle>
            <h3>projects</h3>
          </TextBoxMiddle>
          <TextBoxbottom>
            <span>Projects are constantly improving!</span>
          </TextBoxbottom>
        </TextBox>
        <GridBox>
          <ProjectsRouter/>
        </GridBox>
      </InnerContainer>
    </Container>
  );
}

export default Projects;
