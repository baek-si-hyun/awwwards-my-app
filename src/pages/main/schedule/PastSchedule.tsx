import styled from "styled-components";
import { schedule } from "../../../services/listData";
import { useEffect, useState } from "react";
import { IResize } from "../../../interface/iproject";
import { useMySelector } from "../../../libs/useMySelector";

const Container = styled.div`
  padding: 1vw 0 6vw 0;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    & {
      display: block;
    }
  }
`;

const Row = styled.div`
  width: 203.9rem;
  position: relative;
  display: grid;
  grid-template-columns: 200px repeat(19, 161px);
  grid-template-rows: clamp(60px, 5vw, 70px);
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: top;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  font-weight: 100;
  /* color: #4e4e4e; */
  :last-child {
    div {
      background-image: none;
    }
  }
  @media (max-width: 1000px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      font-size: 1.5vw;
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: right top;
  background-repeat: repeat-y;
  background-size: 1px 8px;
  justify-content: center;
  &:first-child {
    justify-content: flex-start;
    @media (max-width: 1000px) {
      & {
        width: 100%;
      }
    }
  }
  @media (max-width: 1000px) {
    & {
      width: 100%;
      padding: 2vw;
      white-space: wrap;
      font-size: 2vw;
      :last-child {
        background-image: none;
      }
    }
  }
`;

const AbsoluteBox = styled.div<{ indexNum: number }>`
  white-space: nowrap;
  padding: clamp(5px, 0.7vw, 15px);
  border-radius: 7px;
  background-color: #222222;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  ${(props) =>
    props.indexNum === 0 &&
    "left:210px;gap:270px;background-color:#aaeec4;color:#000;"};
  ${(props) =>
    props.indexNum === 1 && "left:760px;gap:300px;background-color:#502bd8;"};
  ${(props) => props.indexNum === 2 && "left:1060px;gap:155px;"};
  ${(props) => props.indexNum === 3 && "left:1200px;gap:35px;"};
  ${(props) => props.indexNum === 4 && "left:1332px;gap:60px;"};
  ${(props) => props.indexNum === 5 && "left:1495px;gap:420px;"};
  ${(props) => props.indexNum === 6 && "left:1700px;gap:70px;"};
  ${(props) => props.indexNum === 7 && "left:1860px;gap:150px;"};
  ${(props) => props.indexNum === 8 && "left:1900px;gap:110px;"};
  ${(props) =>
    props.indexNum === 9 && "left:2350px;gap:410px;background-color:#077e03;"};
  ${(props) =>
    props.indexNum === 10 && "left:2200px;gap:140px;background-color:#ca0101;"};
  ${(props) =>
    props.indexNum === 11 && "left:2620px;gap:150px;background-color:#077e03;"};
  ${(props) =>
    props.indexNum === 12 && "left:2620px;gap:300px;background-color:#077e03;"};
  ${(props) => props.indexNum === 13 && "display: none;"};
`;
const Inner = styled.div`
  overflow-x: scroll;
`;
const InnerBox = styled.div`
  display: flex;
  align-items: center;
`;

function PastSchedule() {
  const [graph, setGraph] = useState(false);
  const getResizeWidth = useMySelector(
    ({ resizeWidthSlice }: { resizeWidthSlice: IResize }) =>
      resizeWidthSlice.resizeWidth
  );
  useEffect(() => {
    const graphMode = () => {
      if (getResizeWidth <= 1000) {
        setGraph(true);
      }
      if (getResizeWidth > 1000) {
        setGraph(false);
      }
    };
    graphMode();
  }, [getResizeWidth]);

  return (
    <Container>
      <Inner>
        {graph ? (
          <>
            {schedule.map((scheduleData, scheduleIndex) => (
              <Row key={scheduleIndex}>
                <Box>{scheduleData.text[0]}</Box>
                <Box>{scheduleData.absoluteBox}</Box>
                <Box>{scheduleData.date}</Box>
              </Row>
            ))}
          </>
        ) : (
          <>
            {schedule.map((scheduleData, scheduleIndex) => (
              <Row key={scheduleIndex}>
                {scheduleData.text.map((data, index) => (
                  <Box key={index}>{data}</Box>
                ))}
                <AbsoluteBox indexNum={scheduleData.id}>
                  {scheduleData.absoluteBox}
                  <InnerBox>
                    <span className="material-symbols-outlined">schedule</span>
                  </InnerBox>
                </AbsoluteBox>
              </Row>
            ))}
          </>
        )}
      </Inner>
    </Container>
  );
}
export default PastSchedule;
