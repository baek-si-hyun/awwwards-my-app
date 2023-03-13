import styled from "styled-components";
import nomad from "../../assets/img/main_img/nomadicon.png";
import coin2 from "../../assets/img/project_img/projectcoin1.jpg";
import coin1 from "../../assets/img/project_img/projectcoin2.jpg";
import coin3 from "../../assets/img/project_img/projectcoin3.jpg";
import coin4 from "../../assets/img/project_img/projectcoin4.jpg";
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
function CoinPreview() {
  return (
    <DivBackground>
      <TextBox>
        <TextBoxTop>
          <h2>2023. 1. 11.</h2>
        </TextBoxTop>
        <TextBoxMiddle>
          <h1>Coin Market Cap</h1>
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
            <PreviewImg src={coin1} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={coin2} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={coin3} />
          </PrevInner>
        </Preview>
        <Preview>
          <PrevInner>
            <PreviewImg src={coin4} />
          </PrevInner>
        </Preview>
      </PreviewContainer>
    </DivBackground>
  );
}
export default CoinPreview;
