import styled from "styled-components";
import nomad from "../../assets/img/main_img/nomadicon.png";
import kanban1 from "../../assets/img/project_img/projectkanban1.jpg";
import kanban2 from "../../assets/img/project_img/projectkanban2.jpg";
import kanban3 from "../../assets/img/project_img/projectkanban3.jpg";
import kanban4 from "../../assets/img/project_img/projectkanban4.jpg";

const ColorDiv = styled.div`
  padding: 3vw 2.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;
`;

const TextBox = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBoxTop = styled.div`
  margin-bottom: 2.1vw;
  font-size: 0.8vw;
`;
const TextBoxMiddle = styled.div`
  font-size: 9vw;
  font-weight: bold;
  text-transform: uppercase;
`;
const TextBoxbottom = styled.div`
  width: 20vw;
  margin-top: 1.5vw;
  margin-bottom: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
`;
const ImgBox = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 1.7vw;
  border-radius: 20px;
`;
const ImgText = styled.div`
  font-size: 1.2vw;
  font-weight: Bold;
`;
const UnderLine = styled.span`
  position: absolute;
`;
const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: max(10px, 3vw);
`;
const Preview = styled.div`
  padding: 4vw;
  border-radius: 15px;
  background-color: #3e3e3e;
  :first-child {
    background-color: #222222;
  }
`;
const PrevInner = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: 15px;
`;
const PreviewImg = styled.img`
  width: 100%;
`;

function KanbanPreview() {
  return (
    <ColorDiv>
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
        <Preview>
          <PrevInner>
            <PreviewImg src={kanban1} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={kanban2} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={kanban3} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={kanban4} />
          </PrevInner>
        </Preview>
      </PreviewContainer>
    </ColorDiv>
  );
}
export default KanbanPreview;
