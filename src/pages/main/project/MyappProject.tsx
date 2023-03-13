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
import myapp from "../../../assets/img/main_img/myapp.png";
import shb from "../../../assets/img/main_img/shbicon.png";
function MyappProject({ visited }: IGetVisitedObject) {
  return (
    <Box to="/Myapp">
      <InnerBoxImg>
        <Img src={myapp} />
      </InnerBoxImg>
      <InnerBoxText>
        <TextTop>
          <p>2022. 12. 25.</p>
        </TextTop>
        <TextBottom>
          <h4>MY APP</h4>
          <TextBottomInner>
            <div>
              <small>by</small>
            </div>
            <InnerFigure>
              <img src={shb} />
              <figcaption>
                <span>SiHyun Baek</span>
              </figcaption>
            </InnerFigure>
          </TextBottomInner>
          <Visited>
            <VisitedInner>
              <VisitedInnerTop>Visited Today</VisitedInnerTop>
              <VisitedInnerBottom>{visited.myappToday}</VisitedInnerBottom>
            </VisitedInner>
            <VisitedInner>
              <VisitedInnerTop>Total Visited</VisitedInnerTop>
              <VisitedInnerBottom>{visited.myappTotal}</VisitedInnerBottom>
            </VisitedInner>
          </Visited>
        </TextBottom>
      </InnerBoxText>
    </Box>
  );
}
export default MyappProject;
