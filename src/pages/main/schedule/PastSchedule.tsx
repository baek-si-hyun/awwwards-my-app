import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { resizeWidth } from "../../../atom";
import { absoluteBoxData, date, rowData } from "../../../services/listData";

const Container = styled.div`
  padding: 6vw 0;
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
  font-weight: 100;
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
    padding-right: 10px;
    width: 10.5vw;
    line-height: 1.2;
  }
`;
const AbsoluteBox = styled.div<{ indexNum: number }>`
  font-weight: lighter;
  font-size: 1rem;
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
      ? "left:11vw;gap: max(20px, 22.8vw);background-color:#aaeec4;color:#000;"
      : ""};
  ${(props) =>
    props.indexNum === 2
      ? "left:40vw;gap: max(20px,16.3vw);background-color:#502bd8;"
      : ""};
  ${(props) =>
    props.indexNum === 3 ? "left:53vw;gap: max(10px, 1.4vw);" : ""};
  ${(props) =>
    props.indexNum === 4 ? "left:61.3vw;gap: max(10px, 1vw);" : ""};
  ${(props) => (props.indexNum === 5 ? "left:65vw;gap: max(10px, 1vw);" : "")};
  ${(props) =>
    props.indexNum === 6 ? "left:69.7vw;gap: max(10px, 1vw);" : ""};
  ${(props) => (props.indexNum === 7 ? "left:78vw;gap: max(10px, 1vw);" : "")};
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

const SimpleSchedule = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;
const SimpleRow = styled.div`
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const SimpleBox = styled.div`
  display: flex;
  align-items: center;
  div {
    height: 100%;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
      & {
        font-size: 0.7rem;
        padding: 1.5rem 0.5rem;
      }
    }
  }
  background-image: linear-gradient(
    to bottom,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: right;
  background-repeat: repeat-y;
  background-size: 1px 8px;
  :last-child {
    background-image: none;
  }
`;
function PastSchedule() {
  const [graph, setGraph] = useState(false);
  const getResizeWidth = useRecoilValue(resizeWidth);
  useEffect(() => {
    const graphMode = () => {
      if (getResizeWidth.resizeWidth <= 1000) {
        setGraph(true);
      }
      if (getResizeWidth.resizeWidth > 1000) {
        setGraph(false);
      }
    };
    graphMode();
  }, [getResizeWidth]);
  return (
    <Container>
      {graph ? (
        <SimpleSchedule>
          {rowData.map((value) =>
            value.id === 8 ? (
              ""
            ) : (
              <SimpleRow key={value.id}>
                {[1, 2, 3].map((val) => (
                  <SimpleBox key={val}>
                    {val === 1 ? (
                      <div>
                        <span>{value.arr.map((text) => text.text)}</span>
                      </div>
                    ) : val === 2 ? (
                      <div>
                        {absoluteBoxData.map((text) =>
                          text.id === value.id ? text.text : ""
                        )}
                      </div>
                    ) : val === 3 ? (
                      <div>
                        {date.map((text) =>
                          text.id === value.id ? text.text : ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </SimpleBox>
                ))}
              </SimpleRow>
            )
          )}
        </SimpleSchedule>
      ) : (
        <ScheduleBox>
          {rowData.map((value) => (
            <Row key={value.id}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val, index) => (
                <Box key={index}>
                  {index === 0
                    ? value.arr.map((text) => (text.num === 0 ? text.text : ""))
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
                    <Span className="material-symbols-outlined">schedule</Span>
                  </InnerBox>
                </AbsoluteBox>
              )}
            </Row>
          ))}
        </ScheduleBox>
      )}
    </Container>
  );
}
export default PastSchedule;
