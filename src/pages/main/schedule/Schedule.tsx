import styled from "styled-components";
import { IId } from "../../../interface/Interface";
import Finally from "./Finally";

import PastSchedule from "./PastSchedule";

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
function Schedule({ id }: IId) {
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
          <PastSchedule />
        </ScheduleBox>
        <Finally />
      </InnerContainer>
    </Container>
  );
}

export default Schedule;
