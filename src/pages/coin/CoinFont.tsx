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
  border-bottom: 2px solid black;
  color: black;
`;
const FontName = styled(FontNameText)`
  font-family: "Pretendard", sans-serif;
`;

const FontDetailContent = styled(FontDetailContentCommon)`
  font-family: "Pretendard", sans-serif;
`;

const ContentDiv = styled(ContentDivCommon)`
  font-family: "Pretendard", sans-serif;
`;
function CoinFont() {
  return (
    <FontContainer>
      <FontTop>
        <Typography>
          <span>Typography</span>
        </Typography>
        <ChoiceDiv>
          <ChoiceUl>
            <Font>
              <span>Pretendard</span>
            </Font>
          </ChoiceUl>
        </ChoiceDiv>
      </FontTop>
      <FontName>
        <span>Pretendard Regular</span>
      </FontName>
      <FontStyle>
        <FontDetail>
          <FontTittle>
            <h3>FONT DETAIL</h3>
          </FontTittle>
          <FontDetailContent>
            <span>AaBb</span>
          </FontDetailContent>
        </FontDetail>
        <LettersNumbers>
          <FontTittle>
            <h3>LETTERS + NUMBERS</h3>
          </FontTittle>
          <ContentDiv>
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
export default CoinFont;
