import { useState } from "react";
import styled from "styled-components";
import { UnderLine } from "../../components/mainCommon";

const ColorContainer = styled.div``;
const ColorInner = styled.div`
  display: flex;
  flex-direction: column;
  ${UnderLine}
`;
const ColorText = styled.div`
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
const ColorCards = styled.div`
  display: flex;
  padding: 3vw 0;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
  position: relative;
  height: 35vw;
  @media (max-width: 480px) {
    & {
      height: 55vw;
    }
  }
`;
const Cards = styled.div`
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
const CardTop = styled.div<{ isHover: boolean }>`
  font-size: 1vw;
  transition: opacity 0.3s ease-in 0.2s;
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  span {
    font-weight: 900;
  }
`;
const CardBottom = styled.div`
  text-align: end;
  font-size: 8vw;
`;

const Card = styled(Cards)<{
  isHover: boolean;
  colorData: string;
  colorDataLength: number;
}>`
  :first-child {
    background-color: ${(props) => props.colorData};
    border-radius: 15px 0px 0px 15px;
    color: #fff;
    transform: ${(props) =>
      props.colorDataLength === 2
        ? props.isHover
          ? "translateX(-98%)"
          : "translateX(-62%)"
        : ""};
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
  }
  :last-child {
    background-color: ${(props) => props.colorData};
    border-radius: 15px;
    color: #fff;
    transform: ${(props) =>
      props.colorDataLength === 2
        ? props.isHover
          ? "translateX(-2%)"
          : "translateX(-38%)"
        : ""};
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
  }
`;

function ProjectColor({ colors }: { colors: string[] }) {
  const [hover, sethover] = useState(false);
  return (
    <ColorContainer>
      <ColorInner>
        <ColorText>
          <h3>
            This website uses a color palette of <span>{colors.length}</span>
            colors
          </h3>
        </ColorText>
        <ColorCards>
          <CardContainer>
            {colors.map((data) => (
              <Card
                onMouseOver={() => sethover(true)}
                onMouseOut={() => sethover(false)}
                isHover={hover}
                colorData={data}
                colorDataLength={colors.length}
              >
                <CardTop isHover={hover}>
                  <p>
                    <span>HEX</span>&nbsp;{data}
                  </p>
                </CardTop>
                <CardBottom>Aa</CardBottom>
              </Card>
            ))}
          </CardContainer>
        </ColorCards>
      </ColorInner>
    </ColorContainer>
  );
}
export default ProjectColor;
