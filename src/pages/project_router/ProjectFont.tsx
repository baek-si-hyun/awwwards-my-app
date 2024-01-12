import { useState } from "react";
import styled, { css } from "styled-components";
import { UnderLine } from "../common/mainCommon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FontTop = styled.div`
  display: flex;
  gap: 4vw;
  ${UnderLine}
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
const FontDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-bottom: 2vw;
  ${UnderLine}
`;
const FontTitle = styled.div`
  font-weight: 100;
  font-size: 13px;

  @media (max-width: 480px) {
    & {
      font-size: 2vw;
    }
  }
`;
const LettersNumbers = styled.div`
  padding-bottom: 2vw;
  ${UnderLine}
`;

const choiceFont = css`
  border-bottom: 2px solid black;
  color: black;
  font-family: "Apercu", sans-serif;
  font-weight: 900;
`;

const common = css<{ toggle: number; fontsData: string[] }>`
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

const FontName = styled.div`
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(20px, 5vw) 0;
  ${UnderLine}
  ${common}
`;

const FontDetailContent = styled.div`
  font-size: 15vw;
  text-align: center;
  ${common}
`;

const ContentDiv = styled.div`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  span {
    line-height: 1.4;
  }
  ${common}
`;

function ProjectFont({ fonts }: { fonts: string[] }) {
  const [toggle, setToggle] = useState(0);

  const ToggleBtn = (index: number) => {
    setToggle(() => index);
  };

  const selectedFont = fonts[toggle];

  return (
    <>
      {fonts && (
        <Container>
          <FontTop>
            <Typography>
              <span>Typography</span>
            </Typography>
            <ToggleDiv>
              <ToggleFont>
                {fonts.map((font, index) => (
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
          <FontName toggle={toggle} fontsData={fonts}>
            <span>{selectedFont}</span>
          </FontName>
          <FontStyle>
            <FontDetail>
              <FontTitle>
                <h3>FONT DETAIL</h3>
              </FontTitle>
              <FontDetailContent toggle={toggle} fontsData={fonts}>
                <span>AaBb</span>
              </FontDetailContent>
            </FontDetail>
            <LettersNumbers>
              <FontTitle>
                <h3>LETTERS + NUMBERS</h3>
              </FontTitle>
              <ContentDiv toggle={toggle} fontsData={fonts}>
                <span>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </span>
                <span>0 1 2 3 4 5 6 7 8 9</span>
              </ContentDiv>
            </LettersNumbers>
          </FontStyle>
        </Container>
      )}
    </>
  );
}
export default ProjectFont;
