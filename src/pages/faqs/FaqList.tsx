import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchFaqs } from "../../services/listData";
import { IFaqsLists } from "../../interface/interface";

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
const FaqA = styled.div<{ selected: boolean }>`
  overflow: hidden;
  font-family: "Pretendard", sans-serif;
  transition: height 0.3s;
  height: ${(props) => (props.selected ? "3rem" : "0")};
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
  const [listNum, setListNum] = useState(-1);
  const [faqList, setFaqList] = useState<IFaqsLists[]>([]);
  useEffect(() => {
    const getFaqs = async () => {
      const faqs = await fetchFaqs();
      setFaqList(() => faqs);
    };
    getFaqs();
  }, []);

  const makeFaqList = () => {
    let newFaqList: JSX.Element[] = [];
    faqList.forEach((data, i) => {
      newFaqList.push(
        <Faq key={i}>
          <FaqQ>
            <Question>
              <p>{data.faqs_question}</p>
            </Question>
            <BtnBox>
              <Btn onClick={() => setListNum(i === listNum ? -1 : i)}>
                View More
              </Btn>
            </BtnBox>
          </FaqQ>
          <FaqA selected={i === listNum}>
            <Answer>
              <p>{data.faqs_answer}</p>
            </Answer>
          </FaqA>
        </Faq>
      );
    });
    return newFaqList;
  };

  return <><FaqsList>{makeFaqList()}</FaqsList></>;
}
export default FaqList;
