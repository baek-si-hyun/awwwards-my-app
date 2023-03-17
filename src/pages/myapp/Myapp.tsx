import styled from "styled-components";
import Footer from "../../components/Footer";
import MyappPreview from "./MyappPreview";
import MyappFont from "./MyappFont";
import MyappColor from "./MyappColor";
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
