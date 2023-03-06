import { useState } from "react";
import styled from "styled-components";

const ColorContainer = styled.div``;
const ColorInner = styled.div`
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
const ColorText = styled.div`
  width: 15%;
  font-family: "ApercuL";
  line-height: 1.4;
  font-size: 1vw;
  span {
    font-weight: Bold;
  }
`;
const ColorCards = styled.div`
  display: flex;
  padding: 3vw 0;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
  position: relative;
  height: 580px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4vw 1.7vw 1vw 1.7vw;
  width: 400px;
  height: 580px;
  position: absolute;
  left: 50%;
  top: 0;
`;

const Card1 = styled(Card)<{ isHover: boolean }>`
  background-color: #3e9d89;
  border-radius: 15px 0px 0px 15px;
  color: #fff;
  transform: ${(props) =>
    props.isHover ? "translateX(-98%)" : "translateX(-62%)"};
  transition: transform 0.2s ease-in-out 0s;
`;
const Card2 = styled(Card)<{ isHover: boolean }>`
  background-color: #1e3d5c;
  border-radius: 15px;
  color: #fff;
  transform: ${(props) =>
    props.isHover ? "translateX(-2%)" : "translateX(-38%)"};
  transition: transform 0.2s ease-in-out 0s;
`;
const CardTop = styled.div`
  font-size: 1vw;
  span {
    font-weight: Bold;
  }
`;
const CardTop1 = styled(CardTop)<{ isHover: boolean }>`
  transition: opacity 0.3s ease-in 0.2s;
  opacity: ${(props) => (props.isHover ? 1 : 0)};
`;
const CardBottom = styled.div`
  text-align: end;
  font-size: 8vw;
`;
function MyappColor() {
  const [hover, sethover] = useState(false);
  return (
    <ColorContainer>
      <ColorInner>
        <ColorText>
          <h3>
            This website uses a color palette of <span>2</span>
            colors
          </h3>
        </ColorText>
        <ColorCards>
          <CardContainer>
            <Card1
              onMouseOver={() => sethover(true)}
              onMouseOut={() => sethover(false)}
              isHover={hover}
            >
              <CardTop1 isHover={hover}>
                <p>
                  <span>HEX</span>&nbsp;#3e9d89
                </p>
              </CardTop1>
              <CardBottom>Aa</CardBottom>
            </Card1>
            <Card2 isHover={hover}>
              <CardTop>
                <p>
                  <span>HEX</span>&nbsp;#1e3d5c
                </p>
              </CardTop>
              <CardBottom>Aa</CardBottom>
            </Card2>
          </CardContainer>
        </ColorCards>
      </ColorInner>
    </ColorContainer>
  );
}
export default MyappColor;
