import styled from "styled-components";
import Footer from "../../components/Footer";
import CoinPreview from "./CoinPreview";
import CoinFont from "./CoinFont";
import CoinColor from "./CoinColor";
import Nav from "../../components/Nav";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  width: 100%;
  padding: 5vw 2.7vw;
`;
const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;
const TextTop = styled.div`
  font-family: "ApercuL";
  font-size: 1vw;
`;
const TextBottom = styled.div`
  font-size: 3vw;
  font-weight: Bold;
  line-height: 1.2;
`;

const DescriptionFont = styled.div`
  margin: 4vw 0;
`;

const DescriptionProject = styled.div``;
const DescriptionProjectText = styled.div`
  font-size: 2vw;
  font-weight: bold;
  padding: 2vw 0;
`;
const DescriptionProjectContent = styled.div`
  font-size: 1.2vw;
  line-height: 2;
  font-family: "Pretendard";
  display: flex;
  gap: 4rem;
  word-break: keep-all;
  div {
    width: 50%;
  }
`;
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
          <DescriptionProject id="about">
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
      <Nav/>
    </Container>
  );
}
export default Coin;
