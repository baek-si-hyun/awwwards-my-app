import styled from "styled-components";
import {
  Container,
  InnerContainer,
  TextBox,
  TextBoxTop,
  TextBoxbottom,
  TextBoxMiddle,
} from "../../../components/mainCommon";
import Finally from "./Finally";
import PastSchedule from "./PastSchedule";

const ScheduleBox = styled.div`
  width: 100%;
`;
const ScheduleExplan = styled.div``;
const TextBox1 = styled.div`
  font-size: 3vw;
  font-weight: Bold;
  line-height: 1.2;
  margin-bottom: 17px;
  @media (max-width: 429px) {
    & {
      font-size: 1rem;
    }
  }
`;
const TextBox2 = styled.div`
  font-size: 1.1vw;
  line-height: 1.4;
  @media (max-width: 429px) {
    & {
      font-size: 0.7rem;
    }
  }
`;
function Schedule() {
  return (
    <Container id="schedule">
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
          <PastSchedule />
        </ScheduleBox>
        <Finally />
      </InnerContainer>
    </Container>
  );
}

export default Schedule;
