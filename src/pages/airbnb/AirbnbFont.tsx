import styled from "styled-components";
import { useState } from "react";

const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FontTop = styled.div`
  display: flex;
  gap: 4vw;
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;

const Typography = styled.div`
  padding: 20px 0;
`;
const ChoiceDiv = styled.div``;
const ChoiceUl = styled.ul`
  display: flex;
  gap: 2vw;
`;
const Font = styled.li`
  padding: 20px 0;
  cursor: pointer;
  color: #a7a7a7;
  font-family: "ApercuL";
`;

const choiceFont =
  "border-bottom: 2px solid black;color:black;font-family:Apercu";
const Font1 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 0 ? choiceFont : "")}
`;
const Font2 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 1 ? choiceFont : "")}
`;
const Font3 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 2 ? choiceFont : "")}
`;
const Font4 = styled(Font)<{ toggle: number }>`
  ${(props) => (props.toggle === 3 ? choiceFont : "")}
`;

const FontName = styled.div<{ toggle: number }>`
  font-family: ${(props) =>
    props.toggle === 0
      ? "GothamMedium"
      : props.toggle === 1
      ? "Helvetica"
      : props.toggle === 2
      ? "ProductSans"
      : props.toggle === 3
      ? "Roboto"
      : "GothamMedium"};
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(20px, 5vw) 0;
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
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
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  padding-bottom: 2vw;
`;
const FontTittle = styled.div`
  font-family: "ApercuL";
  font-size: 13px;
`;
const FontDetailContent = styled.div<{ toggle: number }>`
  font-family: ${(props) =>
    props.toggle === 0
      ? "GothamMedium"
      : props.toggle === 1
      ? "Helvetica"
      : props.toggle === 2
      ? "ProductSans"
      : props.toggle === 3
      ? "Roboto"
      : "GothamMedium"};
  font-size: 15vw;
  text-align: center;
`;
const LettersNumbers = styled.div`
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  padding-bottom: 2vw;
`;
const ContentDiv = styled.div<{ toggle: number }>`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  font-family: ${(props) =>
    props.toggle === 0
      ? "GothamMedium"
      : props.toggle === 1
      ? "Helvetica"
      : props.toggle === 2
      ? "ProductSans"
      : props.toggle === 3
      ? "Roboto"
      : "GothamMedium"};
  gap: 1vw;
  span {
    line-height: 1.4;
  }
`;
function AirbnbFont() {
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

  const ChangeToggle4 = () => {
    setToggle(3);
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
              <span>GothamMedium</span>
            </Font1>
            <Font2 toggle={toggle} onClick={ChangeToggle2}>
              <span>Helvetica</span>
            </Font2>
            <Font3 toggle={toggle} onClick={ChangeToggle3}>
              <span>ProductSans</span>
            </Font3>
            <Font4 toggle={toggle} onClick={ChangeToggle4}>
              <span>Roboto</span>
            </Font4>
          </ChoiceUl>
        </ChoiceDiv>
      </FontTop>
      <FontName toggle={toggle}>
        <span>
          {toggle === 0
            ? "GothamMedium"
            : toggle === 1
            ? "Helvetica"
            : toggle === 2
            ? "ProductSans"
            : toggle === 3
            ? "Roboto"
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
export default AirbnbFont;
