import { ReactElement, useState } from "react";
import styled from "styled-components";
import { faqList } from "../../services/listData";
import { UnderLine } from "../main/common/mainCommon";

const Container = styled.ul`
  ${UnderLine}
`;
const Faq = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 1vw;
  ${UnderLine}
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
const FaqA = styled.div<{ selected: boolean }>`
  overflow: hidden;
  font-family: "Pretendard", sans-serif;
  height: ${(props) => (props.selected ? "3rem" : "0")};
  transition: height 0.3s;
  will-change: height;
`;
const Btn = styled.span`
  border: 1px solid black;
  border-radius: 7px;
  padding: 12px 20px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  will-change: background-color, border-color, color;
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
  const [listNum, setListNum] = useState(-1);
  const makeFaqList = () => {
    let newFaqList: ReactElement[] = [];
    faqList.forEach((data, i) => {
      newFaqList.push(
        <Faq key={i}>
          <FaqQ>
            <Question>
              <p>{data.q}</p>
            </Question>
            <Btn onClick={() => setListNum(i === listNum ? -1 : i)}>
              View More
            </Btn>
          </FaqQ>
          <FaqA selected={i === listNum}>
            <Answer>
              <p>{data.a}</p>
            </Answer>
          </FaqA>
        </Faq>
      );
    });
    return newFaqList;
  };

  return (
    <>
      <Container>{makeFaqList()}</Container>
    </>
  );
}
export default FaqList;
