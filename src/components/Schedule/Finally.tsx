import styled from "styled-components";
import { Link } from "react-router-dom";
import { IMAGES } from "../../constants/images";

const Container = styled.div`
  width: 100%;
  @media (max-width: 650px) {
    & {
      margin-top: 3rem;
    }
  }
`;

const Inner = styled.div`
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
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 768px) {
    & {
      font-size: 2rem;
    }
  }
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
  background-image: url(${IMAGES.COMMON.LIGHTHOUSE});
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
  border: 1px solid #fff;
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
      <Inner>
        <FinallyText>
          <FinallyH2>
            <h2>Finally</h2>
          </FinallyH2>
          <FinallyTextKo>
            <p>
              제가 준비한 awwward-my-app은 여기까지입니다. 아예 똑같이 클론
              코딩하는건 식상해서 제 창의력?을 조금 첨가해 보았습니다.
              어떠셨나요? 코딩을 배운지는 곧 2년이 다 되어가네요. 혼자
              공부하면서 느낀건 성장이 굉장히 더디다는 점입니다. 누군가가 제
              코드를 보고 피드백을 주는 사람도 없고, 함께 문제에 대한 이야기를
              하며 해결하는 것이 없다보니 그런거같네요. 그런 의미에서 이글을
              보시게 될 선배 개발자분들의 조언을 듣고 싶습니다. 취직에 관한
              조언이나, 코딩에 관한 조언 무엇이든 상관없습니다. 옆의 링크를 통해
              조언해 주세요.
            </p>
          </FinallyTextKo>
          <FinallyTextEn>
            <p>
              This is the end of the awwward-my-app I prepared. 100% identical
              clone Coding was boring, so I tried adding a little bit of my
              creativity. How was it? It's been almost two years since I learned
              coding. alone What I felt while studying was that growth was very
              slow. someone is my There is no one to look at the code and give
              feedback, and talk about problems together. I think it's because
              there is no solution. In that sense, this article I'd like to hear
              advice from senior developers you'll see. About employment Any
              advice or advice on coding is fine. through the link next to
              Please advise.
            </p>
          </FinallyTextEn>
        </FinallyText>
        <FinallyBox>
          <FinallyImgBox>
            <FinallyBoxFlex>
              <MiniText>Share your experience</MiniText>
              <FinallyBoxText>Go to developer job seeker advice</FinallyBoxText>
              <ContactLink to="/contact">Go Contact</ContactLink>
            </FinallyBoxFlex>
            <Qna>
              <span>Got questions? Read me</span>
              <span>
                <FAQsLink to="/faqs">
                  FAQs
                  <span />
                </FAQsLink>
              </span>
            </Qna>
          </FinallyImgBox>
        </FinallyBox>
      </Inner>
    </Container>
  );
}
export default Finally;
