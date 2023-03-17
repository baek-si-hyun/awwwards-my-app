import styled from "styled-components";
import nomad from "../../assets/img/main_img/nomadicon.png";
import nexflix1 from "../../assets/img/project_img/projectnetflix1.jpg";
import nexflix2 from "../../assets/img/project_img/projectnetflix2.jpg";
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
const PreviewChange = styled(Preview)`
  background-color: #222222;
`;
function NetflixPreview() {
  return (
    <ColorDiv>
      <TextBox>
        <TextBoxTop>
          <h2>SOON</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>NETFLIX clone</h1>
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
            <PreviewImg src={nexflix1} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={nexflix2} />
          </PrevInner>
        </PreviewChange>
      </PreviewContainer>
    </ColorDiv>
  );
}
export default NetflixPreview;
