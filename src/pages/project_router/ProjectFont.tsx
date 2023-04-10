import { useState } from "react";
import styled from "styled-components";
import { UnderLine } from "../../components/mainCommon";
import { IProjectsData } from "../../interface/interface";

const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FontTop = styled(UnderLine)`
  display: flex;
  gap: 4vw;

  @media (max-width: 480px) {
    & {
      font-size: 1vw;
    }
  }
`;

const Typography = styled.div`
  padding: 20px 0;
`;
const ToggleDiv = styled.div``;
const ToggleFont = styled.div`
  display: flex;
  gap: 2vw;
`;

const FontStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`;
const FontDetail = styled(UnderLine)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
 
  padding-bottom: 2vw;
`;
const FontTittle = styled.div`
  font-weight: 100;
  font-size: 13px;
  @media (max-width: 480px) {
    & {
      font-size: 2vw;
    }
  }
`;
const LettersNumbers = styled((UnderLine))`
  padding-bottom: 2vw;
`;

const choiceFont =
  "border-bottom: 2px solid black;color:black;font-family:'Apercu', sans-serif;font-weight: 900;";
const Font = styled.div<{ toggle: number; num: number }>`
  padding: 20px 0;
  cursor: pointer;
  color: #a7a7a7;
  font-weight: 100;
  :nth-child(1) {
    ${(props) => (props.toggle === 0 ? choiceFont : "")}
  }
  :nth-child(2) {
    ${(props) => (props.toggle === 1 ? choiceFont : "")}
  }
  :nth-child(3) {
    ${(props) => (props.toggle === 2 ? choiceFont : "")}
  }
  :nth-child(4) {
    ${(props) => (props.toggle === 3 ? choiceFont : "")}
  }
`;

const FontName = styled(UnderLine)<{ toggle: number; fontsData: string[] }>`
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(20px, 5vw) 0;
  font-family: ${(props) =>
      props.toggle === 0
        ? props.fontsData[0]
        : props.toggle === 1
        ? props.fontsData[1]
        : props.toggle === 2
        ? props.fontsData[2]
        : props.toggle === 3
        ? props.fontsData[3]
        : ""},
    sans-serif;
`;

const FontDetailContent = styled.div<{ toggle: number; fontsData: string[] }>`
  font-size: 15vw;
  text-align: center;
  font-family: ${(props) =>
      props.toggle === 0
        ? props.fontsData[0]
        : props.toggle === 1
        ? props.fontsData[1]
        : props.toggle === 2
        ? props.fontsData[2]
        : props.toggle === 3
        ? props.fontsData[3]
        : ""},
    sans-serif;
`;

const ContentDiv = styled.div<{ toggle: number; fontsData: string[] }>`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  span {
    line-height: 1.4;
  }
  font-family: ${(props) =>
      props.toggle === 0
        ? props.fontsData[0]
        : props.toggle === 1
        ? props.fontsData[1]
        : props.toggle === 2
        ? props.fontsData[2]
        : props.toggle === 3
        ? props.fontsData[3]
        : ""},
    sans-serif;
`;

function ProjectFont({ projectData }: { projectData: IProjectsData }) {
  const [toggle, setToggle] = useState(0);
  const ToggleBtn = (index: number) => {
    if (index === 0) {
      setToggle(0);
    }
    if (index === 1) {
      setToggle(1);
    }
    if (index === 2) {
      setToggle(2);
    }
    if (index === 3) {
      setToggle(3);
    }
  };

  return (
    <FontContainer>
      <FontTop>
        <Typography>
          <span>Typography</span>
        </Typography>
        <ToggleDiv>
          <ToggleFont>
            {projectData.fonts.map((font, index) => (
              <Font
                key={index}
                num={index}
                toggle={toggle}
                onClick={() => ToggleBtn(index)}
              >
                <span>{font}</span>
              </Font>
            ))}
          </ToggleFont>
        </ToggleDiv>
      </FontTop>
      <FontName toggle={toggle} fontsData={projectData.fonts}>
        <span>
          {toggle === 0
        ? projectData.fonts[0]
        : toggle === 1
        ? projectData.fonts[1]
        : toggle === 2
        ? projectData.fonts[2]
        : toggle === 3
        ? projectData.fonts[3]
        : ""}
        </span>
      </FontName>
      <FontStyle>
        <FontDetail>
          <FontTittle>
            <h3>FONT DETAIL</h3>
          </FontTittle>
          <FontDetailContent toggle={toggle} fontsData={projectData.fonts}>
            <span>AaBb</span>
          </FontDetailContent>
        </FontDetail>
        <LettersNumbers>
          <FontTittle>
            <h3>LETTERS + NUMBERS</h3>
          </FontTittle>
          <ContentDiv toggle={toggle} fontsData={projectData.fonts}>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <span>0 1 2 3 4 5 6 7 8 9</span>
          </ContentDiv>
        </LettersNumbers>
      </FontStyle>
    </FontContainer>
  );
}
export default ProjectFont;
