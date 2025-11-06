import styled, { css } from "styled-components";
import { IProjectData } from "../../interface/iproject";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

const Contaier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 2.7vw;
  background-color: #efefef;
`;

const Inner = styled.div`
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
const Img = styled(ImageWithSkeleton)`
  width: 1.7vw;
  border-radius: 20px;
  aspect-ratio: 1 / 1;
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
const common = css`
  border-radius: 15px;
  @media (max-width: 768px) {
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    border-radius: 7px;
  }
`;
const Preview = styled.div<{ cardBgColorData: string }>`
  padding: 4vw;
  background-color: ${(props) =>
    props.cardBgColorData === "CRYPTO TRACKER" ? "#3e3e3e" : "#222"};
  ${common}
`;
const PrevInner = styled.div`
  object-fit: cover;
  overflow: hidden;
  ${common}
`;
const PreviewImg = styled(ImageWithSkeleton)`
  width: 100%;
`;

function ProjectPreview({ projectData }: { projectData: IProjectData }) {
  return (
    <Contaier>
      <Inner>
        <TextBoxTop>
          <h2>{projectData.date}</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>{projectData.name}</h1>
        </TextBoxMiddle>
        <TextBoxbottom>
          <ImgBox>
            <Img
              sources={projectData.logo}
              alt="maker_logo"
              fullWidth
              fullHeight
              objectFit="cover"
            />
          </ImgBox>
          <ImgText>
            <p>{projectData.by}</p>
            <UnderLine></UnderLine>
          </ImgText>
        </TextBoxbottom>
      </Inner>
      <PreviewContainer>
        {projectData.imgs.map((data: string, index: number) =>
          data ? (
            <Preview cardBgColorData={projectData.name} key={index}>
              <PrevInner>
                <PreviewImg
                  sources={data}
                  alt="preview"
                  fullWidth
                  objectFit="cover"
                  placeholderAspectRatio="16 / 9"
                />
              </PrevInner>
            </Preview>
          ) : null
        )}
      </PreviewContainer>
    </Contaier>
  );
}

export default ProjectPreview;
