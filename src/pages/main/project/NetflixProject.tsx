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
import netflix from "../../../assets/img/main_img/netflix.png";
import nomad from "../../../assets/img/main_img/nomadicon.png";

function NetflixProject({ visited }: IGetVisitedObject) {
  return (
    <Box to="/Netflix">
      <InnerBoxImg>
        <Img src={netflix} />
      </InnerBoxImg>
      <InnerBoxText>
        <TextTop>
          <p>SOON</p>
        </TextTop>
        <TextBottom>
          <h4>NETFLIX clone</h4>
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
              <VisitedInnerBottom>{visited.netflixToday}</VisitedInnerBottom>
            </VisitedInner>
            <VisitedInner>
              <VisitedInnerTop>Total Visited</VisitedInnerTop>
              <VisitedInnerBottom>{visited.netflixTotal}</VisitedInnerBottom>
            </VisitedInner>
          </Visited>
        </TextBottom>
      </InnerBoxText>
    </Box>
  );
}
export default NetflixProject;
