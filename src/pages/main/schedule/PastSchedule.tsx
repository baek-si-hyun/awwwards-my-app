import styled from "styled-components";

const Container = styled.div`
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
  font-family: "ApercuL", sans-serif;
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
const ScheduleBox = styled.div`
  width: 100%;
`;
const InnerBox = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  vertical-align: bottom;
`;
function PastSchedule() {
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
    <Container>
      <ScheduleBox>
        {rowData.map((value) => (
          <Row key={value.id}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val, index) => (
              <Box key={index}>
                {index === 0
                  ? value.arr.map((text) => (text.num === 0 ? text.text : ""))
                  : ""}
                {value.id === 8
                  ? value.arr.map((text) => (text.num === val ? text.text : ""))
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
                  <Span className="material-symbols-outlined">schedule</Span>
                </InnerBox>
              </AbsoluteBox>
            )}
          </Row>
        ))}
      </ScheduleBox>
    </Container>
  );
}
export default PastSchedule;
