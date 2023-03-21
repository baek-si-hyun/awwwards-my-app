import styled from "styled-components";
import Marquee from "react-fast-marquee";
import AirbnbPreview from "./AirbnbPreview";
import AirbnbFont from "./AirbnbFont";
import AirbnbColor from "./AirbnbColor";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {
  Container,
  Description,
  DescriptionFont,
  DescriptionProject,
  DescriptionProjectContent,
  DescriptionProjectText,
  DescriptionText,
  GuideText,
  InnerContainer,
  TextBottom,
  TextTop,
} from "../../components/routerPagesCommon";

const Inner = styled(Marquee)`
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  background-color: #222;
`;

function Airbnb() {
  return (
    <Container id="sotd">
      <Inner play={true} gradient={false} speed={60}>
        <GuideText>
          <p>
            해당 프로젝트는 AWS로 보여드리고 있습니다. 한번 접속할때마다 제가
            부담하는 비용이 증가합니다. 신중히 접속해 주세요!
          </p>
        </GuideText>
      </Inner>
      <InnerContainer>
        <AirbnbPreview />
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
            <AirbnbFont />
            <AirbnbColor />
          </DescriptionFont>
          <DescriptionProject id="routerAbout">
            <DescriptionProjectText>
              <h3>About "Airbnb clone"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>
                  국비지원학원에서 팀프로젝트로 만든 최초의 프로젝트 입니다.
                  팀은 총 5명으로 이루어 졌으며 1명 프론트 1명 백엔드로 짝을
                  이뤄 프로젝트를 진행했습니다. 나머지 1명은 DB를 관리 및 설계
                  하였습니다. 해당 프로젝트에는 백엔드는 JAVA, Spring, Spring
                  Boot, Oracle Cloud를 사용 하였으며 프론트엔드는 주로 JQuery를
                  사용했으며 javascript, Vue는 배운것을 활용해 보기위해 중간중간
                  사용하였습니다. 총 2달 동안 진행된 이 프로젝트는 1달은 설계 및
                  사이트분석을 하였고 나머지 1달은 개발을 진행하였습니다. 시간
                  관계상 html과 css 개발은 기존 에어비앤비의 코드를 가져와
                  사용하였고 기능, 기술구현만 직접 개발 하였습니다.
                </p>
              </div>
              <div>
                <p>
                  This is the first project made as a team project at a
                  government-supported academy. The team consisted of 5 people,
                  1 front-end and 1 back-end. The other managed and designed the
                  DB. did. The backend of the project is JAVA, Spring, Spring
                  Boot, Oracle Cloud was used, and the front end mainly used
                  JQuery. Javascript, Vue is a medium to use what you learn.
                  used. This project, which took a total of two months, took one
                  month to design and manufacture. We spent the rest of the
                  month analyzing and developing the site. hour html and css
                  development brought the existing Airbnb code as it is. I have
                  used it and developed only the features and technology
                  implementation myself.
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
export default Airbnb;
