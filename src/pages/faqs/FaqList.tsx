import { useState } from "react";
import styled from "styled-components";
import { IFaqs } from "../../interface/interface";

const FaqsList = styled.ul`
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;
const Faq = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  @media (max-width: 1024px) {
    & {
      font-size: 1.5vw;
    }
  }
  @media (max-width: 1024px) {
    & {
      font-size: 2vw;
    }
  }
  @media (max-width: 480px) {
    & {
      font-size: 2.5vw;
    }
  }
`;
const FaqQ = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
`;
const FaqA = styled.div<{ list: IFaqs }>`
  overflow: hidden;
  font-family: "Pretendard", sans-serif;
  transition: height 0.3s;
`;
const FaqA1 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA2 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA3 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA4 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA5 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA6 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA7 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA8 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const FaqA9 = styled(FaqA)`
  height: ${(props) => (props.list.value ? "3rem" : "0")};
`;
const BtnBox = styled.div``;
const Btn = styled.span`
  border: 1px solid black;
  border-radius: 7px;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  :hover {
    background-color: #222222;
    border-color: #222222;
    color: #fff;
  }
  @media (max-width: 480px) {
    & {
      font-size: 2.5vw;
      padding: 8px 10px;
    }
  }
`;
const Question = styled.div``;
const Answer = styled.div`
  margin-top: 10px;
`;
function FaqList() {
  const [list, setList] = useState<IFaqs[]>([
    { id: "q1", value: false },
    { id: "q2", value: false },
    { id: "q3", value: false },
    { id: "q4", value: false },
    { id: "q5", value: false },
    { id: "q6", value: false },
    { id: "q7", value: false },
    { id: "q8", value: false },
    { id: "q9", value: false },
  ]);

  const onClick = (e: any) => {
    const { id } = e.target;
    let findIndex = list.findIndex((list) => list.id === id);
    let copiedItems = [...list];
    copiedItems[findIndex].value = !copiedItems[findIndex].value;
    console.log(copiedItems);
    setList(copiedItems);
  };
  return (
    <FaqsList>
      <Faq>
        <FaqQ>
          <Question>
            <p>국비지원학원을 다니기 전엔 무엇을 하셧나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q1" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA1 list={list[0]}>
          <Answer>
            <p>다리 조인트 교체 및 설치 노동을 했습니다.</p>
          </Answer>
        </FaqA1>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>국비지원학원을 다니게 된 계기가 있나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q2" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA2 list={list[1]}>
          <Answer>
            <p>
              효율적이고 빠르게 취업하고 싶어하는 저에게 군대 동기가
              추천해주었습니다.
            </p>
          </Answer>
        </FaqA2>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>대학을 안나온? 못나온? 이유가 있나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q3" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA3 list={list[2]}>
          <Answer>
            <p>
              대학을 나올정도의 성적은 되었지만 대학에 대해 굉장히 부정적이어서
              가지 않았습니다.
            </p>
          </Answer>
        </FaqA3>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>고졸 문제는 어떻게 해결하실 건가요?</p>
          </Question>
          <BtnBox>
            <Btn id="q4" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA4 list={list[3]}>
          <Answer>
            <p>
              취업 후 제가 회사에 민폐 끼치질 않을 정도의 실력되면
              사이버대학으로 졸업장을 취득할거같습니다.
            </p>
          </Answer>
        </FaqA4>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>대학에 관심이 없었다면 왜 특성화고에 가지 않았나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q5" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA5 list={list[4]}>
          <Answer>
            <p>
              부모님의 반대가 매우 심했습니다. 개발자라는 직업도 마찬가지 였지만
              지금은 설득에 성공했습니다.
            </p>
          </Answer>
        </FaqA5>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>국비지원학원 끝난지가 좀 됐는데 왜 지금 구직활동을 하시나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q6" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA6 list={list[5]}>
          <Answer>
            <p>
              부정교합으로 인한 수술이 국비지원학원 수료후에 바로
              예정되어있었고, 회복기간까지 필요하다보니 이제서야 하게 됐네요.
              +프론트공부
            </p>
          </Answer>
        </FaqA6>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>프론트엔드에 개발자가 되기로 마음먹은 이유가 있나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q7" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA7 list={list[6]}>
          <Answer>
            <p>
              팀 프로젝트를 진행하며 백, 프론트 둘다 해보니 프론트엔드 쪽이
              백엔드보다 잘맞는거같아서 마음 먹었습니다.
            </p>
          </Answer>
        </FaqA7>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>사용할줄 아는 언어, 라이브러리, 프레임워크는 뭔가요?</p>
          </Question>
          <BtnBox>
            <Btn id="q8" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA8 list={list[7]}>
          <Answer>
            <p>
              javascript, jquery, react, typescript가 있습니다.
            </p>
          </Answer>
        </FaqA8>
      </Faq>
      <Faq>
        <FaqQ>
          <Question>
            <p>java, spring, python, DB도 배웠다던데 사용 할줄 아시나요?</p>
          </Question>
          <BtnBox>
            <Btn id="q9" onClick={onClick}>
              View More
            </Btn>
          </BtnBox>
        </FaqQ>
        <FaqA9 list={list[8]}>
          <Answer>
            <p>기본적인 문법은 사용하지만 다시 공부해야 합니다.</p>
          </Answer>
        </FaqA9>
      </Faq>
    </FaqsList>
  );
}
export default FaqList;
