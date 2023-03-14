import styled from "styled-components";

export const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FontTop = styled.div`
  display: flex;
  gap: 4vw;
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  @media (max-width: 480px) {
    & {
      font-size: 1vw;
    }
  }
`;
export const FontLi = styled.li`
  padding: 20px 0;
  cursor: pointer;
`;
export const FontNameText = styled.div`
  font-size: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: max(20px, 5vw) 0;
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

export const Typography = styled.div`
  padding: 20px 0;
`;
export const ChoiceDiv = styled.div``;
export const ChoiceUl = styled.ul`
  display: flex;
  gap: 2vw;
`;

export const FontStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`;
export const FontDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  padding-bottom: 2vw;
`;
export const FontTittle = styled.div`
  font-family: "ApercuL", sans-serif;
  font-size: 13px;
  @media (max-width: 480px) {
    & {
      font-size: 2vw;
    }
  }
`;
export const LettersNumbers = styled.div`
  background: #f8f8f8;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  padding-bottom: 2vw;
`;
export const FontDetailContentCommon = styled.div`
  font-size: 15vw;
  text-align: center;
`;
export const ContentDivCommon = styled.div`
  font-size: 4vw;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  span {
    line-height: 1.4;
  }
`;
