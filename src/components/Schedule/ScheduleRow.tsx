import { memo } from "react";
import styled from "styled-components";
import { IScheduleData } from "../../interface/iproject";

const Row = styled.div`
  overflow: hidden;
  min-width: 123rem;
  position: relative;
  display: grid;
  grid-template-columns: 200px repeat(11, 161px);
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
    "left:13rem;gap:8rem;background-color:#aaeec4;color:#000;"};
  ${(props) =>
    props.indexNum === 1 &&
    "left:22.8rem;gap:0.5rem;background-color:#502bd8;"};
  ${(props) => props.indexNum === 2 && "left:33rem;gap:34rem;"};
  ${(props) => props.indexNum === 3 && "left:33rem;gap:3rem;"};
  ${(props) => props.indexNum === 4 && "left:43rem;gap:3rem;"};
  ${(props) => props.indexNum === 5 && "left:43rem;gap:3rem;"};
  ${(props) => props.indexNum === 6 && "left:53rem;gap:13.5rem;"};
  ${(props) => props.indexNum === 7 && "left:55rem;gap:2rem;"};
  ${(props) => props.indexNum === 8 && "left:68rem;gap:3rem;"};
  ${(props) =>
    props.indexNum === 9 && "left:73.5rem;gap:80rem;background-color:#ca0101;"};
  ${(props) => props.indexNum === 10 && "left:73.5rem;gap:0.1rem;"};
  ${(props) =>
    props.indexNum === 11 && "left:81rem;gap:15rem;background-color:#aaeec4;color:#000;"};
  ${(props) =>
    props.indexNum === 12 && "left:87rem;gap:10.5rem;background-color:#502bd8;"};
  ${(props) => props.indexNum === 13 && "display: none;"};
`;

const InnerBox = styled.div`
  display: flex;
  align-items: center;
`;

interface ScheduleRowProps {
  scheduleData: IScheduleData;
  isGraph: boolean;
}

function ScheduleRow({ scheduleData, isGraph }: ScheduleRowProps) {
  if (isGraph) {
    return (
      <Row>
        <Box>{scheduleData.text[0]}</Box>
        <Box>{scheduleData.absoluteBox}</Box>
        <Box>{scheduleData.date}</Box>
      </Row>
    );
  }

  return (
    <Row>
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
  );
}

export default memo(ScheduleRow);

