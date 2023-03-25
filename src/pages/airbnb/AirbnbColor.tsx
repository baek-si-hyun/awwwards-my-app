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

function AirbnbColor() {
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
                  <span>HEX</span>&nbsp;#ff385c
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
export default AirbnbColor;
