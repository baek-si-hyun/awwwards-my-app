import styled from "styled-components";
import Footer from "../../components/Footer";
import ProjectPreview from "./ProjectPreview";
import ProjectFont from "./ProjectFont";
import ProjectColor from "./ProjectColor";
import Nav from "../../components/nav/Nav";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  padding: 3vw 2.7vw;
`;
const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;
const TextTop = styled.div`
  font-weight: 100;
  font-size: 1vw;
`;
const TextBottom = styled.div`
  font-size: 3vw;
  font-weight: 900;
  line-height: 1.2;
`;

const DescriptionFont = styled.div`
  margin: 4vw 0;
`;

const DescriptionProject = styled.div`
`;
const DescriptionProjectText = styled.div`
  font-size: 2vw;
  font-weight: 900;
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
  :first-child {
  }
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

function ProjectMain() {
  const { state } = useLocation();
  return (
    <Container id="sotd">
      <InnerContainer>
        <ProjectPreview projectData={state} />
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
            <ProjectFont fonts={state.fonts} />
            <ProjectColor colors={state.colors} />
          </DescriptionFont>
          <DescriptionProject id="routerAbout">
            <DescriptionProjectText>
              <h3>About "{state.name}"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>{state.ko}</p>
              </div>
              <div>
                <p>{state.en}</p>
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
export default ProjectMain;
