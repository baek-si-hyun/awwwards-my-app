import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  background-color: #222;
`;
export const GuideText = styled.div`
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
  color: red;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
  width: 100%;
  padding: 5vw 2.7vw;
`;
export const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;
export const TextTop = styled.div`
  font-weight: 100;
  font-size: 1vw;
`;
export const TextBottom = styled.div`
  font-size: 3vw;
  font-weight: 900;
  line-height: 1.2;
`;

export const DescriptionFont = styled.div`
  margin: 4vw 0;
`;

export const DescriptionProject = styled.div``;
export const DescriptionProjectText = styled.div`
  font-size: 2vw;
  font-weight: 900;
  padding: 2vw 0;
  @media (max-width: 480px) {
    & {
      font-size: 1.2rem;
    }
  }
`;
export const DescriptionProjectContent = styled.div`
  font-size: 1.2vw;
  line-height: 2;
  font-family: "Pretendard", sans-serif;
  display: flex;
  gap: 4rem;
  word-break: keep-all;
  :first-child {
  }
  div {
    width: 50%;
  }
  @media (max-width: 480px) {
    & {
      flex-direction: column;
      gap: 0.5rem;
      div {
        width: 100%;
      }
    }
  }
`;
