import styled from "styled-components";

export const ColorDiv = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
`;
export const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
export const TextBoxbottom = styled.div`
  width: 20vw;
  margin-top: 1.5vw;
  margin-bottom: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`;
export const ImgBox = styled.div`
  position: relative;
`;
export const Img = styled.img`
  width: 1.7vw;
  border-radius: 20px;
  @media (max-width: 640px) {
    & {
      width: 4.7vw;
    }
  }
`;
export const ImgText = styled.div`
  font-size: 1.2vw;
  font-weight: 900;
  @media (max-width: 640px) {
    & {
      font-size: 3vw;
    }
  }
`;
export const UnderLine = styled.span`
  position: absolute;
`;
export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: max(10px, 3vw);
`;
export const Preview = styled.div`
  padding: 4vw;
  border-radius: 15px;
  background-color: #3e3e3e;
  :first-child {
    background-color: #222222;
  }
  @media (max-width: 768px) {
    & {
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      border-radius: 7px;
    }
  }
`;
export const PrevInner = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: 15px;
  @media (max-width: 768px) {
    & {
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      border-radius: 7px;
    }
  }
`;
export const PreviewImg = styled.img`
  width: 100%;
`;
