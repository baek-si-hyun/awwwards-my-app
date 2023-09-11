import styled from "styled-components";
import NewJeans from "./NewJeans";
import FeaturedSong from "./FeaturedSong";
import { TextBox, TextBoxMiddle, TextBoxbottom } from "../../common/mainCommon";

const Container = styled.div`
  width: 100%;
  padding-top: 3vw;
  background-color: #fff;
  border-radius: 5vw 5vw 0 0;
  margin-top: -6rem;
  z-index: 2;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
`;
const Inner = styled.div`
  width: 100%;
`;
const StickyTextBox = styled(TextBox)`
  position: sticky;
  top: 0;
`;

const MusicContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  border-radius: 5vw 5vw 0 0;
  overflow: hidden;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
`;
const RelativeBox = styled.div`
  position: relative;
`;
const MusicImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
const MusicTextBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  div {
    position: absolute;
    left: 5%;
    bottom: 10%;
  }
  p {
    font-weight: bold;
    font-size: 2vw;
    margin-bottom: 1vw;
  }
`;

const AllMusicTextBox = styled(MusicTextBox)`
  background: linear-gradient(
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
`;

function Music() {
  return (
    <Container id="music">
      <Inner>
        <StickyTextBox>
          <TextBoxMiddle>Music List</TextBoxMiddle>
          <TextBoxbottom>
            <br />
            사이트를 보시면서 음악을 감상할 수 있습니다.
            <br />
            <br />
            최근에 제일 핫한 "뉴진스"와 제 취향의 노래들입니다.
            <br />
            <br />
            뮤직 리스트는 위에서 부터 차례대로 재생됩니다.
            <br />
            <br />
            재생 순서를 바꾸실수 있습니다.
          </TextBoxbottom>
        </StickyTextBox>
        <MusicContainer>
          <RelativeBox>
            <MusicImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ee6e50a8-17dd-458b-29e3-ad794eeca500/public"
              alt="newjeans"
              loading="lazy"
              decoding="async"
            />
            <MusicTextBox>
              <div>
                <p>NewJeans</p>
              </div>
            </MusicTextBox>
          </RelativeBox>
          <NewJeans />
          <RelativeBox>
            <MusicImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f204c79a-26ad-4cb8-5018-c779d6a93200/public"
              alt="famous artist"
              loading="lazy"
              decoding="async"
            />
            <AllMusicTextBox>
              <div>
                <p>Recommended List</p>
              </div>
            </AllMusicTextBox>
          </RelativeBox>
          <FeaturedSong />
        </MusicContainer>
      </Inner>
    </Container>
  );
}
export default Music;
