import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  margin-top: 4vw;
  margin-bottom: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
  font-size: 1.5vw;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
export const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: 900;
  text-transform: uppercase;
`;
export const TextBoxbottom = styled.div`
  text-align: center;
  margin-top: 0.9vw;
  font-size: 1.3vw;
  line-height: 1.4;
  @media (max-width: 429px) {
    & {
      font-size: 0.6rem;
    }
  }
`;
