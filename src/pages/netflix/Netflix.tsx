import styled from "styled-components";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import NetflixColor from "./NetflixColor";
import NetflixFont from "./NetflixFont";
import NetflixPreview from "./NetflixPreview";
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
function Netflix() {
  return (
    <Container id="sotd">
      <InnerContainer>
        <NetflixPreview />
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
            <NetflixFont />
            <NetflixColor />
          </DescriptionFont>
          <DescriptionProject id="about">
            <DescriptionProjectText>
              <h3>About "Netflix clone"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>
                  "nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해
                  제작되었습니다.React와 typescript를 조합하였고 그외에 Styled
                  Components, framer-motion을 사용하였습니다. 해당 프로젝트는
                  "framer-motion"을 활용하기 위해 제작되었습니다. 안타깝게도
                  해당 프로젝트의 완성이 늦춰지고 있습니다. 사유는 1.데이터를
                  제공해주는 TMDB의 회원가입이 거부당하는 문제가
                  있습니다.(제보한지 1달이 넘었는데도 답변 안오고, 문제 해결도
                  안됨) 2.강의에 찍힌 넷플릭스의 홈페이지가 리메이크 되면서
                  클론코딩을 하기 어려워졌습니다.(리메이크전 홈페이지구조를 알
                  방법이 없다. 그렇다고 리메이크된 홈페이지를 클론코딩하자니
                  framer-motion을 사용할 필요가 없어 프로젝트 취지에 어긋남)
                  해당 문제들이 해결될 경우 프로젝트가 다시 진행될 예정입니다.
                </p>
              </div>
              <div>
                <p>
                  Due to a code challenge conducted on a lecture site called
                  "nomadcoders" It was created. React and typescript were
                  combined and other Styled Components, framer-motion were used.
                  that project Built to take advantage of "framer-motion".
                  Unfortunately Completion of the project is being delayed.
                  Reason 1. Data The problem of being denied join the membership
                  of TMDB provided There is. (It has been more than a month
                  since I reported it, but there is no answer, and there is a
                  problem 2. Netflix's homepage taken in the lecture was remade
                  It has become difficult to do clone coding. no method. So,
                  let's clone-code the remade homepage? No need to use
                  framer-motion, which goes against the purpose of the project)
                  The project will resume once these issues are resolved.
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
export default Netflix;
