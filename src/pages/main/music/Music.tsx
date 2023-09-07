import styled from "styled-components";
import NewJeans from "./NewJeans";
import FeaturedSong from "./FeaturedSong";
import { TextBox, TextBoxMiddle, TextBoxbottom } from "../../common/mainCommon";

const Container = styled.div`
  width: 100%;
  padding: 7vw 0;
`;
const Inner = styled.div`
  width: 100%;
`;

const InnerMusicBox1 = styled.div`
  position: relative;
  border-radius: 4.5rem 4.5rem 0 0;
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
    font-size: 2.2vw;
    text-align: center;
    @media (max-width: 429px) {
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
  padding: 8vw 0;
  border-radius: 0 0 4.5rem 4.5rem;
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

function Music() {
  return (
    <Container>
      <Inner>
        <TextBox>
          <TextBoxMiddle>Music List</TextBoxMiddle>
          <TextBoxbottom>
            사이트를 보시면서 음악을 감상할 수 있습니다.
          </TextBoxbottom>
        </TextBox>
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
            <p>순서대로 자동재생됩니다. 제가 추천하는 노래를 들어보세요.</p>
          </div>
          <div>
            <p>재생 순서를 바꾸셔도 좋습니다.</p>
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
