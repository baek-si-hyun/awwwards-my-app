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
import todo from "../../../assets/img/main_img/todo.png";
import nomad from "../../../assets/img/main_img/nomadicon.png";
function KanbanProject({ visited }: IGetVisitedObject) {
  return (
    <Box to="/Kanban">
      <InnerBoxImg>
        <Img src={todo} />
      </InnerBoxImg>
      <InnerBoxText>
        <TextTop>
          <p>2023. 02. 01.</p>
        </TextTop>
        <TextBottom>
          <h4>KANBAN Borad</h4>
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
              <VisitedInnerBottom>{visited.kanbanToday}</VisitedInnerBottom>
            </VisitedInner>
            <VisitedInner>
              <VisitedInnerTop>Total Visited</VisitedInnerTop>
              <VisitedInnerBottom>{visited.kanbanTotal}</VisitedInnerBottom>
            </VisitedInner>
          </Visited>
        </TextBottom>
      </InnerBoxText>
    </Box>
  );
}
export default KanbanProject;
