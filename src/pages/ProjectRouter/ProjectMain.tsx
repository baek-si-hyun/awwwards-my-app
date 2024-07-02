import styled from "styled-components";
import ProjectPreview from "../../components/ProjectRouter/ProjectPreview";
import ProjectFont from "../../components/ProjectRouter/ProjectFont";
import ProjectColor from "../../components/ProjectRouter/ProjectColor";
import { useLocation } from "react-router-dom";
import Nav from "../../components/nav/Nav";

const Container = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20rem;
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

const DescriptionProject = styled.div``;
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
    <>
      <Container id="sotd">
        <Inner>
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
                  <span>{state.ko}</span>
                </div>
                <div>
                  <span>{state.en}</span>
                </div>
              </DescriptionProjectContent>
            </DescriptionProject>
          </Description>
        </Inner>
      </Container>
      <Nav />
    </>
  );
}
export default ProjectMain;
