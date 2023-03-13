import styled from "styled-components";
import {
  Container,
  InnerContainer,
  TextBox,
  TextBoxTop,
  TextBoxbottom,
  TextBoxMiddle,
} from "../../../components/mainCommon";
import NetflixProject from "./NetflixProject";
import KanbanProject from "./KanbanProject";
import CoinProject from "./CoinProject";
import MyappProject from "./MyappProject";
import AirbnbProject from "./AirbnbProject";
import { useRecoilValue } from "recoil";
import { visited } from "../../../atom";

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
  const getvisited = useRecoilValue(visited);
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
          <NetflixProject visited={getvisited} />
          <KanbanProject visited={getvisited} />
          <CoinProject visited={getvisited} />
          <MyappProject visited={getvisited} />
          <AirbnbProject visited={getvisited} />
        </GridBox>
      </InnerContainer>
    </Container>
  );
}

export default Projects;
