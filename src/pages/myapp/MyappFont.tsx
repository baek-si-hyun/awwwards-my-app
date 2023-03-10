import { useState } from "react";
import styled from "styled-components";
import {
  ChoiceDiv,
  ChoiceUl,
  ContentDivCommon,
  FontContainer,
  FontDetail,
  FontDetailContentCommon,
  FontLi,
  FontNameText,
  FontStyle,
  FontTittle,
  FontTop,
  LettersNumbers,
  Typography,
} from "../../components/fontCommon";

const Font = styled(FontLi)`
  padding: 20px 0;
  cursor: pointer;
  color: #a7a7a7;
  font-family: "ApercuL", sans-serif;
`;
const choiceFont =
  "border-bottom: 2px solid black;color:black;font-family:'Apercu', sans-serif";
const Font1 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 0 ? choiceFont : "")}
`;
const Font2 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 1 ? choiceFont : "")}
`;
const Font3 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 2 ? choiceFont : "")}
`;

const propsToggle = `props.toggle === 0
? "Yasashii"
: props.toggle === 1
? "Exo2"
: props.toggle === 2
? "NanumSquareRoundOTFR"
: ""`;
const FontName = styled(FontNameText)<{ toggle: number }>`
  font-family: ${(props) => propsToggle}, sans-serif;
`;

const FontDetailContent = styled(FontDetailContentCommon)<{ toggle: number }>`
  font-family: ${(props) => propsToggle}, sans-serif;
`;

const ContentDiv = styled(ContentDivCommon)<{ toggle: number }>`
  font-family: ${(props) => propsToggle}, sans-serif;
`;

function MyappFont() {
  const [toggle, setToggle] = useState(0);
  const ChangeToggle1 = () => {
    setToggle(0);
  };
  const ChangeToggle2 = () => {
    setToggle(1);
  };
  const ChangeToggle3 = () => {
    setToggle(2);
  };

  return (
    <FontContainer>
      <FontTop>
        <Typography>
          <span>Typography</span>
        </Typography>
        <ChoiceDiv>
          <ChoiceUl>
            <Font1 toggle={toggle} onClick={ChangeToggle1}>
              <span>Yasashii</span>
            </Font1>
            <Font2 toggle={toggle} onClick={ChangeToggle2}>
              <span>Exo2</span>
            </Font2>
            <Font3 toggle={toggle} onClick={ChangeToggle3}>
              <span>NanumSquareRound</span>
            </Font3>
          </ChoiceUl>
        </ChoiceDiv>
      </FontTop>
      <FontName toggle={toggle}>
        <span>
          {toggle === 0
            ? "YasashiiBold"
            : toggle === 1
            ? "Exo2 VariableFont"
            : toggle === 2
            ? `NanumSquare`
            : ""}
        </span>
      </FontName>
      <FontStyle>
        <FontDetail>
          <FontTittle>
            <h3>FONT DETAIL</h3>
          </FontTittle>
          <FontDetailContent toggle={toggle}>
            <span>AaBb</span>
          </FontDetailContent>
        </FontDetail>
        <LettersNumbers>
          <FontTittle>
            <h3>LETTERS + NUMBERS</h3>
          </FontTittle>
          <ContentDiv toggle={toggle}>
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
export default MyappFont;
