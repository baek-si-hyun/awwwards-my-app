import styled from "styled-components";
import { Link } from "react-router-dom";
import lighthouse from "../../../assets/img/main_img/lighthouse.webp";

const Container = styled.div`
  width: 100%;
  @media (max-width: 650px) {
    & {
      margin-top: 3rem;
    }
  }
`;

const FinallyInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  @media (max-width: 480px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
const FinallyH2 = styled.div`
  font-size: 3vw;
  font-weight: bold;
`;
const FinallyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2vw;
  font-size: 1vw;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
const FinallyTextKo = styled.div`
  p {
    line-height: 2;
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
  }
`;
const FinallyTextEn = styled.div`
  p {
    line-height: 2;
    word-break: keep-all;
  }
  @media (max-width: 650px) {
    & {
      display: none;
    }
  }
`;
const FinallyBox = styled.div``;
const FinallyImgBox = styled.div`
  background-image: url(${lighthouse});
  height: 100%;
  background-size: cover;
  border-radius: 20px;
  color: #fff;
  padding: 4vw 4vw 2vw 4vw;
  @media (max-width: 480px) {
    & {
      height: 20rem;
    }
  }
`;
const FinallyBoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FinallyBoxText = styled.h3`
  font-size: 3vw;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 3vw;
  width: 50%;
  @media (max-width: 480px) {
    & {
      font-size: 6vw;
    }
  }
`;
const MiniText = styled.h2`
  font-weight: 100;
  margin-bottom: 1.5vw;
`;

const ContactLink = styled(Link)`
  border: 1px solid white;
  border-radius: 10px;
  padding: 2rem;
  width: 11rem;
  font-size: 1.3rem;
  transition: background-color 0.2s;
  :hover {
    background-color: #f8f8f8;
    color: #000;
  }
  @media (max-width: 650px) {
    & {
      width: 6rem;
      padding: 0.8rem;
      font-size: 0.7rem;
      border-radius: 7px;
    }
  }
`;
const Qna = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 10vw;
  width: 100%;
  @media (max-width: 650px) {
    & {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 480px) {
    & {
      margin-top: 6rem;
    }
  }
`;
const FAQsLink = styled(Link)`
  display: flex;
  flex-direction: column;
  span {
    background-color: #fff;
    width: 100%;
    height: 2px;
  }
`;
function Finally() {
  return (
    <Container>
      <FinallyInner>
        <FinallyText>
          <FinallyH2>
            <h2>Finally</h2>
          </FinallyH2>
          <FinallyTextEn>
            <p>
              This is the end of the awwward clone I prepared. 100% equally
              cloned I'm tired of coding, so I added a little bit of my
              creativity. How was it? It's been a little over a year since I
              learned to code, but the frontend It's been a little over 5 months
              since I decided to grow as a developer and studied. alone What I
              noticed while studying was that growth was very slow. someone my
              No one looking at the code and giving feedback, talking about
              problems together. It seems that it is because there is nothing to
              solve. In that sense, this article I would like to hear the advice
              of the senior developers you will see. about employment Advice,
              coding advice, whatever. via the link below Please advise.
            </p>
          </FinallyTextEn>
          <FinallyTextKo>
            <p>
              제가 준비한 awwward clone은 여기까지입니다. 아예 똑같이 클론
              코딩하는건 식상해서 제 창의력?을 조금 첨가해 보았습니다.
              어떠셨나요? 코딩을 배운지는 곧 1년이 좀 넘었지만 프론트엔드
              개발자로 성장하기로 마음먹고 공부한건 5개월이 좀 넘었네요. 혼자
              공부하면서 느낀건 성장이 굉장히 더디다는 점입니다. 누군가가 제
              코드를 보고 피드백을 주는 사람도 없고, 함께 문제에 대한 이야기를
              하며 해결하는 것이 없다보니 그런거같네요. 그런 의미에서 이글을
              보시게 될 선배 개발자분들의 조언을 듣고 싶습니다. 취직에 관한
              조언이나, 코딩에 관한 조언 무엇이든 상관없습니다. 옆의 링크를 통해
              조언해 주세요.
            </p>
          </FinallyTextKo>
        </FinallyText>
        <FinallyBox>
          <FinallyImgBox>
            <FinallyBoxFlex>
              <MiniText>Share your experience</MiniText>
              <FinallyBoxText>Go to developer job seeker advice</FinallyBoxText>
              <ContactLink to="/Contact">Go Contact</ContactLink>
            </FinallyBoxFlex>
            <Qna>
              <span>Got questions? Read me</span>
              <span>
                <FAQsLink to="/Faqs">
                  FAQs
                  <span />
                </FAQsLink>
              </span>
            </Qna>
          </FinallyImgBox>
        </FinallyBox>
      </FinallyInner>
    </Container>
  );
}
export default Finally;
