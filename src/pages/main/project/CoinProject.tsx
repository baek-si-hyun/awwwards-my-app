import {
  Box,
  Img,
  InnerBoxImg,
  InnerBoxText,
  InnerFigure,
  TextBottom,
  TextBottomInner,
  TextTop,
  Visited,
  VisitedInner,
  VisitedInnerBottom,
  VisitedInnerTop,
} from "../../../components/projectCommon";
import { IGetVisitedObject } from "../../../interface/interface";
import coin from "../../../assets/img/main_img/coin.png";
import nomad from "../../../assets/img/main_img/nomadicon.png";
function CoinProject({ visited }: IGetVisitedObject) {
  return (
    <Box to="/Coin">
      <InnerBoxImg>
        <Img src={coin} />
      </InnerBoxImg>
      <InnerBoxText>
        <TextTop>
          <p>2023. 01. 11.</p>
        </TextTop>
        <TextBottom>
          <h4>COIN market cap</h4>
          <TextBottomInner>
            <div>
              <small>by</small>
            </div>
            <InnerFigure>
              <img src={nomad} />
              <figcaption>
                <span>Nomad Coders, SiHyun Baek</span>
              </figcaption>
            </InnerFigure>
          </TextBottomInner>
          <Visited>
            <VisitedInner>
              <VisitedInnerTop>Visited Today</VisitedInnerTop>
              <VisitedInnerBottom>{visited.coinToday}</VisitedInnerBottom>
            </VisitedInner>
            <VisitedInner>
              <VisitedInnerTop>Total Visited</VisitedInnerTop>
              <VisitedInnerBottom>{visited.coinTotal}</VisitedInnerBottom>
            </VisitedInner>
          </Visited>
        </TextBottom>
      </InnerBoxText>
    </Box>
  );
}
export default CoinProject;
