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
  :first-child {
  }
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
  transform: translateX(-50%);
  top: 0;
  background-color: #e51013;
  border-radius: 15px;
  color: #fff;
`;
const CardTop = styled.div`
  font-size: 1vw;
  span {
    font-weight: Bold;
  }
`;
const CardBottom = styled.div`
  text-align: end;
  font-size: 8vw;
`;
function NetflixColor() {
  return (
    <ColorContainer>
      <ColorInner>
        <ColorText>
          <h3>
            This website uses a color palette of <span>1</span>
            colors
          </h3>
        </ColorText>
        <ColorCards>
          <CardContainer>
            <Card>
              <CardTop>
                <p>
                  <span>HEX</span>&nbsp;#e51013
                </p>
              </CardTop>
              <CardBottom>Aa</CardBottom>
            </Card>
          </CardContainer>
        </ColorCards>
      </ColorInner>
    </ColorContainer>
  );
}
export default NetflixColor;
