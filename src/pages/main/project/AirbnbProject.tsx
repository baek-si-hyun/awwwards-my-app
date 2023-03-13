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
import airbnb from "../../../assets/img/main_img/airbnb.png";
import shb from "../../../assets/img/main_img/shbicon.png";

function AirbnbProject({ visited }: IGetVisitedObject) {
  return (
    <Box to="/Airbnb">
      <InnerBoxImg>
        <Img src={airbnb} />
      </InnerBoxImg>
      <InnerBoxText>
        <TextTop>
          <p>2022. 09. 01.</p>
        </TextTop>
        <TextBottom>
          <h4>AIRBNB clone</h4>
          <TextBottomInner>
            <div>
              <small>by</small>
            </div>
            <InnerFigure>
              <img src={shb} />
              <figcaption>
                <span>SiHyun Baek, 4 others</span>
              </figcaption>
            </InnerFigure>
          </TextBottomInner>
          <Visited>
            <VisitedInner>
              <VisitedInnerTop>Visited Today</VisitedInnerTop>
              <VisitedInnerBottom>{visited.airbnbToday}</VisitedInnerBottom>
            </VisitedInner>
            <VisitedInner>
              <VisitedInnerTop>Total Visited</VisitedInnerTop>
              <VisitedInnerBottom>{visited.airbnbTotal}</VisitedInnerBottom>
            </VisitedInner>
          </Visited>
        </TextBottom>
      </InnerBoxText>
    </Box>
  );
}
export default AirbnbProject;
