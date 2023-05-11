import styled from "styled-components";
import { scheduleData } from "../../../services/listData";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { resizeWidth } from "../../../atom";

const Container = styled.div`
  padding: 6vw 0;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    & {
      display: block;
    }
  }
`;

const Row = styled.div`
  width: 1816.3px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(11, minmax(161.47px, auto));
  grid-template-rows: clamp(60px, 5vw, 100px);
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
    width: 200px;
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
      :last-child {
        background-image: none;
      }
    }
  }
`;
const AbsoluteBox = styled.div<{ indexNum: number }>`
  font-weight: lighter;
  font-size: 1rem;
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
  ${(props) => props.indexNum === 2 && "left:1010px;gap:55px;"};
  ${(props) => props.indexNum === 3 && "left:1172px;gap:55px;"};
  ${(props) => props.indexNum === 4 && "left:1332px;gap:55px;"};
  ${(props) => props.indexNum === 5 && "left:1495px;gap:55px;"};
  ${(props) => props.indexNum === 6 && "left:1495px;gap:170px;"};
  ${(props) => props.indexNum === 7 && "display: none"};
`;
const Schedule = styled.div`
  @media (max-width: 1919px) {
    & {
      overflow-x: scroll;
    }
  }
`;
const InnerBox = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  vertical-align: bottom;
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
      <Schedule>
        {graph ? (
          <>
            {scheduleData.map((scheduleData) => (
              <Row>
                <Box>{scheduleData.text[0]}</Box>
                <Box>{scheduleData.absoluteBox}</Box>
                <Box>{scheduleData.date}</Box>
              </Row>
            ))}
          </>
        ) : (
          <>
            {scheduleData.map((scheduleData) => (
              <Row>
                {scheduleData.text.map((data) => (
                  <Box>{data}</Box>
                ))}
                <AbsoluteBox indexNum={scheduleData.id}>
                  {scheduleData.absoluteBox}
                  <InnerBox>
                    <Span className="material-symbols-outlined">schedule</Span>
                  </InnerBox>
                </AbsoluteBox>
              </Row>
            ))}
          </>
        )}
      </Schedule>
    </Container>
  );
}
export default PastSchedule;