import styled from "styled-components";
import Footer from "../../components/Footer";
import MyappPreview from "./MyappPreview";
import MyappFont from "./MyappFont";
import MyappColor from "./MyappColor";
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
  padding: 5vw 2.7vw;
  width: 100%;
`;
const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;
const TextTop = styled.div`
  font-family: "ApercuL", sans-serif;
  font-size: 1vw;
  @media (max-width: 480px) {
    & {
      font-size: 2vw;
    }
  }
`;
const TextBottom = styled.div`
  font-size: 3vw;
  font-weight: Bold;
  line-height: 1.2;
  @media (max-width: 480px) {
    & {
      font-size: 5vw;
    }
  }
`;

const DescriptionFont = styled.div`
  margin: 4vw 0;
`;

const DescriptionProject = styled.div``;
const DescriptionProjectText = styled.div`
  font-size: 2vw;
  font-weight: bold;
  padding: 2vw 0;
  @media (max-width: 480px) {
    & {
      font-size: 1.2rem;
    }
  }
`;
const DescriptionProjectContent = styled.div`
  font-size: 1.2vw;
  line-height: 2;
  font-family: "Pretendard", sans-serif;
  display: flex;
  gap: 4rem;
  word-break: keep-all;
  div {
    width: 50%;
  }
  @media (max-width: 480px) {
    & {
      flex-direction: column;
      gap: 0.5rem;
      div {
        width: 100%;
      }
    }
  }
`;
function Myapp() {
  return (
    <Container id="sotd">
      <InnerContainer>
        <MyappPreview />
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
            <MyappFont />
            <MyappColor />
          </DescriptionFont>
          <DescriptionProject id="about">
            <DescriptionProjectText>
              <h3>About "My app"</h3>
            </DescriptionProjectText>
            <DescriptionProjectContent>
              <div>
                <p>
                  제가 처음 리액트를 배운것들을 활용해 보기 위해 제작
                  되었습니다. module css를 사용했으며 다른 특별한 라이브러리들은
                  사용하지 않은 순수 리액트 프로젝트입니다. 첫 Header 컴포넌트의
                  디자인은 프론트엔드 프리랜서 "henriheymans"님의 개인 사이트를
                  참고하여 제작했습니다. Contact 컴포넌트의 디자인은 "wanderful"
                  이라는 해외 숙소 소개 사이트를 참고하였습니다.
                </p>
              </div>
              <div>
                <p>
                  It is built to use what you first learned about React. I used
                  module css and no other special libraries. This is a pure
                  React project. The design of the first header component is as
                  follows. Refer to the personal homepage of front-end
                  freelancer "henriheymans" production. The design of the
                  Contact component was referred to an overseas accommodation
                  introduction site called "wanderful".
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
export default Myapp;
