import styled from "styled-components";
import {
  Inner,
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../pages/main/common/mainCommon";
import PastSchedule from "../components/Schedule/PastSchedule";
import Finally from "../components/Schedule/Finally";

const Container = styled.section`
  width: 100%;
  margin-top: -7rem;
  background-color: #f6feff;
  border-radius: 5vw 5vw 0 0;
  padding: 3vw 0 13vw 0;
  position: relative;
  z-index: 4;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.1);
`;
const ScheduleBox = styled.div`
  width: 100%;
`;

function Schedule() {
  return (
    <Container id="schedule">
      <Inner>
        <TextBox>
          <TextBoxMiddle>past schedule</TextBoxMiddle>
          <TextBoxbottom>
            제가 지금까지 무엇을 했는가에 대한 일정표 입니다.
          </TextBoxbottom>
        </TextBox>
        <ScheduleBox>
          <PastSchedule />
        </ScheduleBox>
        <Finally />
      </Inner>
    </Container>
  );
}

export default Schedule;
