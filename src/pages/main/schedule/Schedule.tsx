import styled from "styled-components";
import {
  Container,
  Inner,
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../../common/mainCommon";
import Finally from "./Finally";
import PastSchedule from "./PastSchedule";

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
