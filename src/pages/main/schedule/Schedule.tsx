import { Link } from "react-router-dom";
import styled from "styled-components";
import { IId } from "../../../interface/Interface";
import lighthouse from "../../../assets/img/main_img/lighthouse.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
`;
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  text-align: center;
  width: 20vw;
  margin-top: 0.9vw;
  margin-bottom: 6vw;
  font-size: 1.3vw;
  line-height: 1.4;
`;

const ScheduleBox = styled.div`
  width: 100%;
`;
const ScheduleExplan = styled.div``;
const TextBox1 = styled.div`
  font-size: 3vw;
  font-weight: Bold;
  line-height: 1.2;
  margin-bottom: 17px;
`;
const TextBox2 = styled.div`
  font-size: 1.1vw;
  line-height: 1.4;
`;
const PastSchedule = styled.div`
  padding: 120px 0;
`;

const Row = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 100px;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  font-family: "ApercuL";
  color: #4e4e4e;
  :last-child {
    div {
      background-image: none;
    }
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: right top;
  background-repeat: repeat-y;
  background-size: 1px 8px;
  justify-content: center;
  :first-child {
    justify-content: flex-start;
    width: 10.5vw;
  }
`;
const AbsoluteBox = styled.div<{ indexNum: number }>`
  font-weight: lighter;
  font-size: 0.8vw;
  padding: 15px;
  border-radius: 7px;
  background-color: #222222;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  ${(props) =>
    props.indexNum === 1
      ? " left:11vw;gap: max(20px, 22.8vw);background-color:#aaeec4;color:#000;"
      : ""};
  ${(props) =>
    props.indexNum === 2
      ? " left:40vw;gap: max(20px,16.3vw);background-color:#502bd8;"
      : ""};
  ${(props) =>
    props.indexNum === 3 ? " left:53vw;gap: max(10px, 1.4vw);" : ""};
  ${(props) =>
    props.indexNum === 4 ? " left:61.3vw;gap: max(10px, 1vw);" : ""};
  ${(props) => (props.indexNum === 5 ? " left:65vw;gap: max(10px, 1vw);" : "")};
  ${(props) =>
    props.indexNum === 6 ? " left:69.7vw;gap: max(10px, 1vw);" : ""};
  ${(props) => (props.indexNum === 7 ? " left:78vw;gap: max(10px, 6vw);" : "")};
`;

const InnerBox = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  vertical-align: bottom;
`;
const Finally = styled.div`
  width: 100%;
`;

const FinallyInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
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
`;
const FinallyTextKo = styled.div`
  p {
    line-height: 2;
    word-break: keep-all;
    font-family: "Pretendard";
  }
`;
const FinallyTextEn = styled.div`
  p {
    line-height: 2;
    word-break: keep-all;
  }
`;
const FinallyBox = styled.div``;
const FinallyImgBox = styled.div`
  background-image: url(${lighthouse});
  aspect-ratio: 4/3;
  background-size: cover;
  border-radius: 20px;
  color: #fff;
  padding: 4vw 4vw 2vw 4vw;
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
`;
const MiniText = styled.h2`
  font-family: "ApercuL";
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
`;
const Qna = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 10vw;
  width: 100%;
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
function Schedule({ id }: IId) {
  const rowData = [
    {
      id: 1,
      arr: [{ num: 0, text: "academy project" }],
    },
    { id: 2, arr: [{ num: 0, text: "Surgery & Recovery" }] },
    { id: 3, arr: [{ num: 0, text: "My app" }] },
    {
      id: 4,
      arr: [{ num: 0, text: "COIN market cap" }],
    },
    {
      id: 5,
      arr: [{ num: 0, text: "KANBAN Borad" }],
    },
    {
      id: 6,
      arr: [{ num: 0, text: "NETFLIX clone" }],
    },
    {
      id: 7,
      arr: [{ num: 0, text: "awwwards clone" }],
    },
    {
      id: 8,
      arr: [
        { num: 2, text: "2022.6" },
        { num: 3, text: "2022.7" },
        { num: 4, text: "2022.8" },
        { num: 5, text: "2022.9" },
        { num: 6, text: "2022.10" },
        { num: 7, text: "2022.11" },
        { num: 8, text: "2022.12" },
        { num: 9, text: "2023.1" },
        { num: 10, text: "2023.2" },
        { num: 11, text: "2023.3" },
      ],
    },
  ];
  const absoluteBoxData = [
    {
      id: 1,
      text: "Institution training & Team Project",
    },
    { id: 2, text: "Surgery & Recovery" },
    { id: 3, text: "First React" },
    { id: 4, text: "Code Challenge" },
    { id: 5, text: "Code Challenge" },
    { id: 6, text: "Code Challenge" },
    {
      id: 7,
      text: "apply project",
    },
  ];

  return (
    <Container id={id}>
      <InnerContainer>
        <TextBox>
          <TextBoxTop>Si Hyun Baek</TextBoxTop>
          <TextBoxMiddle>past schedule</TextBoxMiddle>
          <TextBoxbottom>
            From the beginning of institutional training until now...
          </TextBoxbottom>
        </TextBox>
        <ScheduleBox>
          <ScheduleExplan>
            <TextBox1>
              <span>
                What have
                <br />I done so far?
              </span>
            </TextBox1>
            <TextBox2>
              <span>
                What have I been doing since I first attended the <br />
                "a state-funded academy"... Interviewers and friends <br />
                may be curious about this.
              </span>
            </TextBox2>
          </ScheduleExplan>
          <PastSchedule>
            <ScheduleBox>
              {rowData.map((value) => (
                <Row key={value.id}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val, index) => (
                    <Box key={index}>
                      {index === 0
                        ? value.arr.map((text) =>
                            text.num === 0 ? text.text : ""
                          )
                        : ""}
                      {value.id === 8
                        ? value.arr.map((text) =>
                            text.num === val ? text.text : ""
                          )
                        : ""}
                    </Box>
                  ))}
                  {value.id === 8 ? (
                    ""
                  ) : (
                    <AbsoluteBox indexNum={value.id}>
                      <div>
                        {absoluteBoxData.map((id) =>
                          id.id === value.id ? id.text : ""
                        )}
                      </div>
                      <InnerBox>
                        <Span className="material-symbols-outlined">
                          schedule
                        </Span>
                      </InnerBox>
                    </AbsoluteBox>
                  )}
                </Row>
              ))}
            </ScheduleBox>
          </PastSchedule>
        </ScheduleBox>
        <Finally>
          <FinallyInner>
            <FinallyText>
              <FinallyH2>
                <h2>Finally</h2>
              </FinallyH2>
              <FinallyTextEn>
                <p>
                  This is the end of the awwward clone I prepared. It's boring
                  to clone code 100% exactly the same. So I added a bit of my
                  creativity. How was it? coding It will soon be one year since
                  you learned it. However, I decided to grow as a front-end
                  developer. It's been a little over 3 months since I decided to
                  study. What I Learned While Studying Alone That growth is very
                  slow. someone looking at my code No one giving feedback. and
                  solving problems together I guess it's because there isn't. In
                  that sense, seniors who will see this article I'd love to hear
                  from the developers. Employment advice, coding Any advice, no
                  matter what. Please advise using the link next to it.
                </p>
              </FinallyTextEn>
              <FinallyTextKo>
                <p>
                  제가 준비한 awwward clone은 여기까지입니다. 아예 똑같이 클론
                  코딩하는건 식상해서 제 창의력?을 조금 첨가해 보았습니다.
                  어떠셨나요? 코딩을 배운지는 곧 1년이 다 되어 가지만 프론트엔드
                  개발자로 성장하기로 마음먹고 공부한건 3개월이 좀 넘었네요.
                  혼자 공부하면서 느낀건 성장이 굉장히 더디다는 점입니다.
                  누군가가 제 코드를 보고 피드백을 주는 사람도 없고, 함께 문제에
                  대한 이야기를 하며 해결하는 것이 없다보니 그런거같네요. 그런
                  의미에서 이글을 보시게 될 선배 개발자분들의 조언을 듣고
                  싶습니다. 취직에 관한 조언이나, 코딩에 관한 조언 무엇이든
                  상관없습니다. 옆의 링크를 통해 조언해 주세요.
                </p>
              </FinallyTextKo>
            </FinallyText>
            <FinallyBox>
              <FinallyImgBox>
                <FinallyBoxFlex>
                  <MiniText>Share your experience</MiniText>
                  <FinallyBoxText>
                    Go to developer job seeker advice
                  </FinallyBoxText>
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
        </Finally>
      </InnerContainer>
    </Container>
  );
}

export default Schedule;
