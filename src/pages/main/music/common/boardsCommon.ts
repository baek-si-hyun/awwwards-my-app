import styled from "styled-components";
import { ButtonDiv, ControllBtn } from "../../../../components/Music/MusicSet";

export const Container = styled.div`
  width: 100%;
  padding: 8vw 0 15vw 0;
  background-color: #000;
  color: #fff;
  z-index: 3;
`;
export const Board = styled.div`
  padding: 0px 40px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 480px) {
    & {
      padding: 0px 20px;
    }
  }
`;

export const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 2vw;
  background-color: ${(props) =>
    props.isDragging ? "#1d1d1d" : "transparent"};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  font-size: 1vw;
  border-bottom: 1px solid #1d1d1d;
  border-radius: ${(props) => (props.isDragging ? "10px" : "none")};
  transition: background-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  will-change: background-color, border-radius;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: #1d1d1d;
    ${ButtonDiv} {
      opacity: 0.9;
    }
    ${ControllBtn} {
      opacity: 1;
    }
  }
  @media (max-width: 650px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 429px) {
    & {
      font-size: 0.6rem;
    }
  }
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;
  :nth-child(2) {
    padding-left: 20%;
  }
  :nth-child(3) {
    padding-left: 20%;
  }
  @media (max-width: 768px) {
    & {
    }
  }
  @media (max-width: 650px) {
    & {
      :last-child {
        display: none;
      }
    }
  }
`;

export const ImgDiv = styled.div`
  position: relative;
`;

export const Title = styled.div``;
