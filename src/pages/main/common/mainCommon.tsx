import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 5vw 5vw 0 0;
  padding: 3vw 0 13vw 0;
`;
export const Inner = styled.div`
  padding: 3vw 2.7vw 6vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextBox = styled.div`
  width: 100%;
  margin-top: 6rem;
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
      font-size: 1rem;
    }
  }
`;
export const TextBoxMiddle = styled.div`
  text-align: center;
  font-size: 6vw;
  text-transform: uppercase;
  font-weight: 600;
  @media (max-width: 650px) {
    & {
      font-size: 3rem;
    }
  }
  @media (max-width: 429px) {
    & {
      font-size: 3rem;
    }
  }
`;
export const TextBoxbottom = styled.div`
  margin-top: 0.9vw;
  text-align: center;
  font-size: 1.3vw;
  line-height: 2;
  font-family: "Pretendard", sans-serif;
  @media (max-width: 650px) {
    & {
      font-size: 1rem;
    }
  }
  @media (max-width: 429px) {
    & {
      font-size: 0.8rem;
    }
  }
`;
export const UnderLine = css`
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;
