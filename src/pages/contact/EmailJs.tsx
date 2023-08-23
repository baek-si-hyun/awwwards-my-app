import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  width: 32vw;
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
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
  height: 3vw;
  margin-bottom: 1rem;
  font-size: 18px;
  font-family: "Apercu", sans-serif;
  color: #222222;
  border: none;
  transition: border 0.3s ease-in-out 0s;
  will-change: border;
  :focus {
    border-bottom: 2px solid #e9e9e9;
    outline: none;
  }

  @media (max-width: 1024px) {
    & {
      height: 4vw;
    }
  }
  @media (max-width: 640px) {
    & {
      height: 6vw;
    }
  }
  @media (max-width: 480px) {
    & {
      height: 8vw;
    }
  }
`;
const Textarea = styled.textarea`
  height: 13rem;
  margin-bottom: 4vw;
  font-size: 18px;
  font-family: "Apercu", sans-serif;
  color: #222222;
  border: none;
  transition: all 0.3s ease-in-out 0s;
  will-change: border;
  :focus {
    border-bottom: 2px solid #e9e9e9;
    outline: none;
  }
`;
interface iinaisd {
  service: string | undefined;
  template: string | undefined;
  key: string | undefined;
}
function EmailJs() {
  const form = useRef() as any;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_API_KEYS}`
      )
      .then(
        (result) => {
          alert("전송 되었습니다");
          console.log(result.text);
        },
        (error) => {
          alert("실패 하였습니다.");
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
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
    </Container>
  );
}
export default EmailJs;
