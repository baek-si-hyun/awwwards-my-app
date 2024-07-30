import styled from "styled-components";
import {
  Inner,
  TextBox,
  TextBoxMiddle,
  TextBoxTop,
} from "../main/common/mainCommon";
<<<<<<< HEAD
import EmailJs from "./EmailJs";
=======
import EmailJs from "../../components/Contact/EmailJs";
>>>>>>> master
const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

const EmailJsContainer = styled.div`
  display: flex;
  gap: 10vw;
  padding-bottom: 13vw;
  @media (max-width: 650px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 15rem;
    }
  }
`;
const Leftbox = styled.div``;
const H2Box = styled.div`
  line-height: 1.4;
  font-size: 1.2vw;
  font-weight: bold;
`;
const H3Box = styled.div`
  font-weight: 100;
  line-height: 1.5;
`;

function Contact() {
  return (
    <Container>
      <Inner>
        <TextBox>
          <TextBoxTop>Contact me</TextBoxTop>
          <TextBoxMiddle>get in touch</TextBoxMiddle>
        </TextBox>
        <EmailJsContainer>
          <Leftbox>
            <H2Box>
              <h2>
                I check my e-mail from 9:00 every morning!
                <br />
                send me an email.
              </h2>
            </H2Box>
            <H3Box>
              <h3>
                If you have any questions, please contact us through this form.
                <br />
                Please also advise.
              </h3>
            </H3Box>
          </Leftbox>
          <EmailJs />
        </EmailJsContainer>
      </Inner>
    </Container>
  );
}
export default Contact;
