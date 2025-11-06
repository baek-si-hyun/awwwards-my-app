import { memo, useMemo } from "react";
import styled from "styled-components";
import { useMySelector } from "../../libs/useMySelector";
import { schedule } from "../../services/listData";
import ScheduleRow from "./ScheduleRow";

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

const Inner = styled.div`
  overflow-x: scroll;
`;

function PastSchedule() {
  const getResizeWidth = useMySelector(
    (state) => state.resizeWidthSlice.resizeWidth
  );

  const isGraph = useMemo(() => getResizeWidth <= 1000, [getResizeWidth]);

  return (
    <Container>
      <Inner>
        {schedule.map((scheduleData) => (
          <ScheduleRow
            key={scheduleData.id}
            scheduleData={scheduleData}
            isGraph={isGraph}
          />
        ))}
      </Inner>
    </Container>
  );
}
export default memo(PastSchedule);
