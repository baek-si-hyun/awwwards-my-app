import styled from "styled-components";
import { IProjectsData } from "../../interface/interface";

const PreviewContaier = styled.div<{ cardBgColorData: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 2.7vw;
  background-color: ${(props) =>
    props.cardBgColorData === "Coin" ? "#3e3e3e" : "#efefef"};
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
`;
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  width: 20vw;
  margin-top: 1.5vw;
  margin-bottom: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`;
const ImgBox = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 1.7vw;
  border-radius: 20px;
  @media (max-width: 640px) {
    & {
      width: 4.7vw;
    }
  }
`;
const ImgText = styled.div`
  font-size: 1.2vw;
  font-weight: 900;
  @media (max-width: 640px) {
    & {
      font-size: 3vw;
    }
  }
`;
const UnderLine = styled.span`
  position: absolute;
`;
const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: max(10px, 3vw);
`;
const Preview = styled.div`
  padding: 4vw;
  border-radius: 15px;
  background-color: #222;
  @media (max-width: 768px) {
    & {
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      border-radius: 7px;
    }
  }
`;
const PrevInner = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: 15px;
  @media (max-width: 768px) {
    & {
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      border-radius: 7px;
    }
  }
`;
const PreviewImg = styled.img`
  width: 100%;
`;
function ProjectPreview({ projectData }: { projectData: IProjectsData }) {
  return (
    <PreviewContaier cardBgColorData={projectData.id}>
      <TextBox>
        <TextBoxTop>
          <h2>{projectData.date}</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>{projectData.name}</h1>
        </TextBoxMiddle>
        <TextBoxbottom>
          <ImgBox>
            <Img src={projectData.logo} />
          </ImgBox>
          <ImgText>
            <p>{projectData.by}</p>
            <UnderLine></UnderLine>
          </ImgText>
        </TextBoxbottom>
      </TextBox>
      <PreviewContainer>
        {projectData.img.map((data) => (
          <Preview>
            <PrevInner>
              <PreviewImg src={data} />
            </PrevInner>
          </Preview>
        ))}
      </PreviewContainer>
    </PreviewContaier>
  );
}
export default ProjectPreview;
