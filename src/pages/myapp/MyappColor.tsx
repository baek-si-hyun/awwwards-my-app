import { useState } from "react";
import styled from "styled-components";
import {
  Card,
  CardBottom,
  CardContainer,
  CardTop,
  ColorCards,
  ColorContainer,
  ColorInner,
  ColorText,
} from "../../components/colorCommon";

const Card1 = styled(Card)<{ isHover: boolean }>`
  background-color: #3e9d89;
  border-radius: 15px 0px 0px 15px;
  color: #fff;
  transform: ${(props) =>
    props.isHover ? "translateX(-98%)" : "translateX(-62%)"};
  transition: transform 0.2s ease-in-out 0s;
  @media (max-width: 1024px) {
    & {
      border-radius: 12px 0px 0px 12px;
    }
  }
  @media (max-width: 768px) {
    & {
      border-radius: 10px 0px 0px 10px;
    }
  }
  @media (max-width: 480px) {
    & {
      border-radius: 7px 0px 0px 7px;
    }
  }
`;
const Card2 = styled(Card)<{ isHover: boolean }>`
  background-color: #1e3d5c;
  border-radius: 15px;
  color: #fff;
  transform: ${(props) =>
    props.isHover ? "translateX(-2%)" : "translateX(-38%)"};
  transition: transform 0.2s ease-in-out 0s;
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
      border-radius: 7px;
    }
  }
`;

const CardTop1 = styled(CardTop)<{ isHover: boolean }>`
  transition: opacity 0.3s ease-in 0.2s;
  opacity: ${(props) => (props.isHover ? 1 : 0)};
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
