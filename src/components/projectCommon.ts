import { Link } from "react-router-dom";
import styled from "styled-components";

export const Box = styled(Link)`
  display: flex;
  gap: 2vw;
  padding: 2vw 0px;
  border-bottom: 1px black;
  transition: background-color 0.2s ease-in-out;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34, 1) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
  }
`;

export const InnerBoxImg = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
`;
export const Img = styled.img`
  aspect-ratio: 4/3;
  width: 90%;
  object-fit: cover;
  border-radius: 10px;
`;
export const InnerBoxText = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextTop = styled.div``;
export const TextBottom = styled.div`
  line-height: 1.7;
  font-size: 1.3vw;
  @media (max-width: 768px) {
    & {
      font-size: 2.5vw;
    }
  }
`;
export const TextBottomInner = styled.div`
  display: flex;
  align-items: center;
`;

export const InnerFigure = styled.figure`
  display: flex;
  align-items: center;

  img {
    margin: 0 0.3rem;
    object-fit: fill;
    width: 2vw;
    height: 2vw;
    border-radius: 100%;
    @media (max-width: 480px) {
      & {
        width: 20px;
        height: 20px;
      }
    }
  }
  figcaption {
    span {
      font-weight: 600;
      border-bottom: 2px solid #b7b7b7;
    }
  }
`;

export const Visited = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
  display: flex;
  margin-top: 1vw;
  @media (max-width: 480px) {
    & {
      width: 90%;
    }
  }
`;

export const VisitedInner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  flex: 1;
  :first-child {
    border-right: 1px solid black;
  }
`;

export const VisitedInnerTop = styled.div`
  font-size: 0.4vw;
  padding: 0.2vw 0;
`;
export const VisitedInnerBottom = styled.div`
  border-top: 1px solid black;
  font-size: 0.4vw;
  padding: 0.3vw 0;
  font-weight: bold;
`;
