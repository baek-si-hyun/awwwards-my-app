import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailJsContainer = styled.div`
  width: 32vw;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
  color: #a1a1a1;
`;
const Input = styled.input`
  width: 32vw;
  height: 2.5vw;
  margin-bottom: 1rem;
  font-size: 18px;
  font-family: "Apercu";
  color: #222222;
  border: none;
  transition: border 0.3s ease-in-out 0s;
  :focus {
    border-bottom: 2px solid #e9e9e9;
    outline: none;
  }
`;
const Textarea = styled.textarea`
  height: 10rem;
  margin-bottom: 4vw;
  font-size: 18px;
  font-family: "Apercu";
  color: #222222;
  border: none;
  transition: all 0.3s ease-in-out 0s;
  :focus {
    border-bottom: 2px solid #e9e9e9;
    outline: none;
  }
`;
function EmailJs() {
  const form = useRef() as any;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.currentTarget,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <EmailJsContainer>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="user_name" />
        <Label>E-mail</Label>
        <Input type="email" name="user_email" />
        <Label>Message</Label>
        <Textarea name="message" />
        <Input
          type="submit"
          style={{
            backgroundColor: "#222222",
            color: "#fff",
            borderRadius: "7px",
            height: "3.7rem",
          }}
          value="SEND MESSAGE"
        />
      </Form>
    </EmailJsContainer>
  );
}
export default EmailJs;
