import styled from "styled-components";
import shb from "../../assets/img/main_img/shbicon.png";
import airbnb1 from "../../assets/img/project_img/projectairbnb1.jpg";
import airbnb2 from "../../assets/img/project_img/projectairbnb2.jpg";
import airbnb3 from "../../assets/img/project_img/projectairbnb3.jpg";
import airbnb4 from "../../assets/img/project_img/projectairbnb4.jpg";
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
  background-color: #f7f1ef;
`;
const PreviewChange = styled(Preview)`
  background-color: #222222;
`;

function AirbnbPreview() {
  return (
    <DivBackground>
      <TextBox>
        <TextBoxTop>
          <h2>2023. 1. 11.</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>Airbnb clone</h1>
        </TextBoxMiddle>
        <TextBoxbottom>
          <ImgBox>
            <Img src={shb} />
          </ImgBox>
          <ImgText>
            <p>SiHyun Baek, 4 others</p>
            <UnderLine></UnderLine>
          </ImgText>
        </TextBoxbottom>
      </TextBox>
      <PreviewContainer>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={airbnb1} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={airbnb2} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={airbnb3} />
          </PrevInner>
        </PreviewChange>
        <PreviewChange>
          <PrevInner>
            <PreviewImg src={airbnb4} />
          </PrevInner>
        </PreviewChange>
      </PreviewContainer>
    </DivBackground>
  );
}
export default AirbnbPreview;
