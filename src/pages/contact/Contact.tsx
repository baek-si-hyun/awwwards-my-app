import styled from "styled-components";
import Footer from "../../components/Footer";
import EmailJs from "./EmailJs";

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
const EmailJsContainer = styled.div`
  margin-top: 6vw;
  display: flex;
  gap: 10vw;
`;
const Leftbox = styled.div``;
const H2Box = styled.div`
  line-height: 1.4;
  font-size: 1.2vw;
  font-weight: bold;
`;
const H3Box = styled.div`
  font-family: "ApercuL";
  line-height: 3;
`;

function Contact() {
  return (
    <Container>
      <InnerContainer>
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
      </InnerContainer>
      <Footer />
    </Container>
  );
}
export default Contact;
