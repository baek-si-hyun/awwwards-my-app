import styled from "styled-components";

export const ColorContainer = styled.div``;
export const ColorInner = styled.div`
  display: flex;
  flex-direction: column;
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
export const ColorText = styled.div`
  width: 15%;
  font-weight: lighter;
  line-height: 1.4;
  font-size: 1vw;
  span {
    font-weight: 900;
  }
  @media (max-width: 480px) {
    & {
      width: 30%;
    }
  }
`;
export const ColorCards = styled.div`
  display: flex;
  padding: 3vw 0;
  justify-content: center;
  align-items: center;
`;
export const CardContainer = styled.div`
  position: relative;
  height: 35vw;
  @media (max-width: 480px) {
    & {
      height: 55vw;
    }
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4vw 1.7vw 1vw 1.7vw;
  width: 22vw;
  height: 32vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  background-color: #ff385c;
  border-radius: 15px;
  color: #fff;
  @media (max-width: 1024px) {
    & {
      border-radius: 12px;
    }
  }
  @media (max-width: 768px) {
    & {
      border-radius: 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      width: 35vw;
      height: 50vw;
      border-radius: 7px;
    }
  }
`;
export const CardTop = styled.div`
  font-size: 1vw;
  span {
    font-weight: 900;
  }
`;
export const CardBottom = styled.div`
  text-align: end;
  font-size: 8vw;
`;
