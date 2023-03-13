import styled from "styled-components";
import shb from "../../assets/img/main_img/shbicon.png";
import myapp1 from "../../assets/img/project_img/projectmyapp1.jpg";
import myapp2 from "../../assets/img/project_img/projectmyapp2.jpg";
import myapp3 from "../../assets/img/project_img/projectmyapp3.jpg";
import myapp4 from "../../assets/img/project_img/projectmyapp4.jpg";
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
  background-color: #e8ebe6;
`;

function MyappPreview() {
  return (
    <DivBackground>
      <TextBox>
        <TextBoxTop>
          <h2>2022. 12. 25.</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>My App</h1>
        </TextBoxMiddle>
        <TextBoxbottom>
          <ImgBox>
            <Img src={shb} />
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
            <PreviewImg src={myapp1} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={myapp2} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={myapp3} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={myapp4} />
          </PrevInner>
        </Preview>
      </PreviewContainer>
    </DivBackground>
  );
}
export default MyappPreview;
