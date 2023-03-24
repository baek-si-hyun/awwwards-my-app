import Footer from "../../components/Footer";
import CoinPreview from "./CoinPreview";
import CoinFont from "./CoinFont";
import CoinColor from "./CoinColor";
import Nav from "../../components/Nav";
import {
  Container,
  Description,
  DescriptionFont,
  DescriptionProject,
  DescriptionProjectContent,
  DescriptionProjectText,
  DescriptionText,
  InnerContainer,
  TextBottom,
  TextTop,
} from "../../components/routerPagesCommon";

function Coin() {
  return (
    <Container id="sotd">
      <InnerContainer>
        <CoinPreview />
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
            <CoinFont />
            <CoinColor />
          </DescriptionFont>
          <DescriptionProject id="routerAbout">
            <DescriptionProjectText>
              <h3>About "Coin Market Cap"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>
                  "nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해
                  제작되었습니다.React와 typescript를 조합하였고 그외에 Styled
                  Components, Recoil, React Query, apexcharts를 사용하였습니다.
                </p>
              </div>
              <div>
                <p>
                  Due to a code challenge conducted on a lecture site called
                  "nomadcoders" it was created React and typescript combined and
                  different styled Components, Recoil, React Query and
                  apexcharts were used.
                </p>
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
export default Coin;
