import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import {
  TextBox,
  TextBoxMiddle,
  TextBoxbottom,
} from "../pages/main/common/mainCommon";
import NewJeans from "../components/Music/NewJeans";
import FavoriteSong from "../components/Music/FavoriteSong";
import newjeansmv from "../assets/video/newjeansmv.mp4";
import musicvideo from "../assets/video/musicvideo.mp4";

const Container = styled.section`
  width: 100%;
  padding-top: 3vw;
  background-color: #fff;
  border-radius: 5vw 5vw 0 0;
  margin-top: -6rem;
  position: relative;
  z-index: 1;
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
  position: relative;
  z-index: 2;
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
const MusicVideo = styled.div<{ inView: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: opacity 0.3s 1s ease-in-out;
  position: absolute;
  left: 0;
  top: -0.2rem;
`;
const Video = styled.video`
  width: 100vw;
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
    bottom: 0;
  }
  h2 {
    font-weight: bold;
    font-size: 2.5vw;
    margin-bottom: 1vw;
  }
  p {
    font-size: 1.2vw;
  }
  @media (max-width: 650px) {
    & {
      p {
        font-size: 2vw;
      }
    }
  }
`;

const AllMusicTextBox = styled(MusicTextBox)`
  background: linear-gradient(
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  div {
    bottom: 10%;
  }
`;

function Music() {
  const { ref: newjeansRef, inView: newjeansView } = useInView();
  const { ref: favRef, inView: favView } = useInView();
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
            제 취향 팝송과 뉴진스 노래들입니다.
            <br />
            <br />
            뮤직 리스트는 위에서 부터 차례대로 재생됩니다.
            <br />
            <br />
            재생 순서를 바꾸실수 있습니다.
          </TextBoxbottom>
        </StickyTextBox>
        <MusicContainer>
          <RelativeBox ref={newjeansRef}>
            <MusicImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9729d7ac-0232-4eef-60ef-c3cb6db80b00/public"
              alt="famous artist"
              loading="lazy"
              decoding="async"
            />
            <MusicVideo inView={newjeansView}>
              <Video controls={false} autoPlay={true} loop={true} muted={true}>
                <source src={newjeansmv} type="video/mp4"></source>
              </Video>
            </MusicVideo>
            <MusicTextBox>
              <div>
                <h2>NewJeans</h2>
              </div>
            </MusicTextBox>
          </RelativeBox>
          <NewJeans />
          <RelativeBox ref={favRef}>
            <MusicImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e30f57f2-4254-460d-dfb3-7750dbb31000/public"
              alt="newjeans"
              loading="lazy"
              decoding="async"
            />
            <MusicVideo inView={favView}>
              <Video controls={false} autoPlay={true} loop={true} muted={true}>
                <source src={musicvideo} type="video/mp4"></source>
              </Video>
            </MusicVideo>
            <AllMusicTextBox>
              <div>
                <h2>FavoriteSong</h2>
              </div>
            </AllMusicTextBox>
          </RelativeBox>
          <FavoriteSong />
        </MusicContainer>
      </Inner>
    </Container>
  );
}
export default Music;
