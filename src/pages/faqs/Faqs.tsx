import styled from "styled-components";
import Footer from "../../components/Footer";
import FaqList from "./FaqList";

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
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  text-align: center;
  margin-top: 0.9vw;
  margin-bottom: 6vw;
  font-size: 1.3vw;
  line-height: 1.4;
`;
const FaqsBox = styled.div`
  width: 100%;
`;

function Faqs() {
  return (
    <Container>
      <InnerContainer>
        <TextBox>
          <TextBoxMiddle>FAQS</TextBoxMiddle>
          <TextBoxbottom>
            Here are some questions
            <br /> I think you might be wondering about.
          </TextBoxbottom>
        </TextBox>
        <FaqsBox>
          <FaqList />
        </FaqsBox>
      </InnerContainer>
      <Footer />
    </Container>
  );
}
export default Faqs;
