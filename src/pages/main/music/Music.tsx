import styled from "styled-components";
import NewJeans from "./NewJeans";
import FeaturedSong from "./FeaturedSong";
import { TextBox, TextBoxMiddle, TextBoxbottom } from "../../common/mainCommon";

const Container = styled.div`
  width: 100%;
  padding-top: 3vw;
`;
const Inner = styled.div`
  width: 100%;
`;

const InnerMusicBox1 = styled.div`
  position: relative;
  border-radius: 5vw 5vw 0 0;
  overflow: hidden;
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
  h2 {
    font-weight: bold;
    font-size: 2vw;
    margin-bottom: 1vw;
  }
`;
const InnerMusicBox2 = styled.div`
  border: 1px solid black;
  background: #000;
  padding: 8vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7vw;
  color: #fff;
  font-family: "Pretendard", sans-serif;
  p {
    font-size: 2vw;
    text-align: center;
    @media (max-width: 430px) {
      & {
        font-size: 1rem;
      }
    }
  }
`;

const InnerMusicBox3 = styled.div`
  position: relative;
`;
const AllMusicTextBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  h2 {
    font-weight: lighter;
    font-size: 2.2vw;
  }
`;
const InnerMusicBox4 = styled.div`
  background: #000;
  padding: 8vw 0 20rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7vw;
  color: #fff;
  p {
    font-size: 2.2vw;
    text-align: center;
    @media (max-width: 429px) {
      & {
        font-size: 1rem;
      }
    }
  }
`;

const StickyTextBox = styled(TextBox)`
  position: sticky;
  top: 0;
  z-index: -8888;
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
        <InnerMusicBox1>
          <MusicImg
            src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ee6e50a8-17dd-458b-29e3-ad794eeca500/public"
            alt="newjeans"
            loading="lazy"
            decoding="async"
          />
          <MusicTextBox>
            <div>
              <h2>NewJeans</h2>
            </div>
          </MusicTextBox>
        </InnerMusicBox1>
        <InnerMusicBox2>
          <div>
            <p>너무 시끄럽지 않은 노래들로 준비했습니다.</p>
          </div>
          <div>
            <p>제가 추천하는 노래를 들어보세요.</p>
          </div>
          <NewJeans />
        </InnerMusicBox2>
        <InnerMusicBox3>
          <MusicImg
            src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f204c79a-26ad-4cb8-5018-c779d6a93200/public"
            alt="famous artist"
            loading="lazy"
            decoding="async"
          />
          <AllMusicTextBox />
        </InnerMusicBox3>
        <InnerMusicBox4>
          <div>
            <p>Recommended List</p>
          </div>
          <FeaturedSong />
        </InnerMusicBox4>
      </Inner>
    </Container>
  );
}
export default Music;
