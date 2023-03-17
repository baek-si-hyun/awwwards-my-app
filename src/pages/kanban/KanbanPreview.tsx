import styled from "styled-components";
import nomad from "../../assets/img/main_img/nomadicon.png";
import kanban1 from "../../assets/img/project_img/projectkanban1.jpg";
import kanban2 from "../../assets/img/project_img/projectkanban2.jpg";
import kanban3 from "../../assets/img/project_img/projectkanban3.jpg";
import kanban4 from "../../assets/img/project_img/projectkanban4.jpg";
import {
  ColorDiv,
  Img,
  ImgBox,
  ImgText,
  Preview,
  PreviewContainer,
  PreviewImg,
  PrevInner,
  TextBox,
  TextBoxbottom,
  TextBoxMiddle,
  TextBoxTop,
  UnderLine,
} from "../../components/previewCommon";

const DivBackground = styled(ColorDiv)`
  background-color: #efefef;
`;
const PreviewChange = styled(Preview)`
  background-color: #222222;
`;
function KanbanPreview() {
  return (
    <DivBackground>
      <TextBox>
        <TextBoxTop>
          <h2>2022. 2. 1.</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>KANBAN Board</h1>
        </TextBoxMiddle>
        <TextBoxbottom>
          <ImgBox>
            <Img src={nomad} />
          </ImgBox>
          <ImgText>
            <p>Nomad Coders, SiHyun Baek</p>
            <UnderLine></UnderLine>
          </ImgText>
        </TextBoxbottom>
      </TextBox>
      <PreviewContainer>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={kanban1} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={kanban2} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={kanban3} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={kanban4} />
          </PrevInner>
        </PreviewChange>
      </PreviewContainer>
    </DivBackground>
  );
}
export default KanbanPreview;
