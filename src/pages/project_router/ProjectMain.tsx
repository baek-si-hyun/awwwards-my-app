import styled from "styled-components";
import Footer from "../../components/Footer";
import ProjectPreview from "./ProjectPreview";
import ProjectFont from "./ProjectFont";
import ProjectColor from "./ProjectColor";
import Nav from "../../components/Nav";
import { useLocation } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  background-color: #222;
`;
export const GuideText = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
  color: red;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  padding: 3vw 2.7vw;
`;
export const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;
export const TextTop = styled.div`
  font-weight: 100;
  font-size: 1vw;
`;
export const TextBottom = styled.div`
  font-size: 3vw;
  font-weight: 900;
  line-height: 1.2;
`;

export const DescriptionFont = styled.div`
  margin: 4vw 0;
`;

export const DescriptionProject = styled.div``;
export const DescriptionProjectText = styled.div`
  font-size: 2vw;
  font-weight: 900;
  padding: 2vw 0;
  @media (max-width: 480px) {
    & {
      font-size: 1.2rem;
    }
  }
`;
export const DescriptionProjectContent = styled.div`
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

function Myapp() {
  const { state } = useLocation();
  console.log(state);
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
            <ProjectFont projectData={state} />
            <ProjectColor projectData={state} />
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
export default Myapp;
