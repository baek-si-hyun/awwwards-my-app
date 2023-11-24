import styled from "styled-components";
import NewJeans from "./NewJeans";
import FeaturedSong from "./FeaturedSong";
import { TextBox, TextBoxMiddle, TextBoxbottom } from "../../common/mainCommon";
import LoLChampions from "./LoLChampions";

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
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f5b351a9-0651-45a5-1941-6a03f1756100/public"
              alt="newjeans"
              loading="lazy"
              decoding="async"
            />
            <MusicTextBox>
              <div>
                <h2>T1</h2>
                <p>
                  FAKER 7년의 침묵 끝, 세계 최초 LOL World Championship 4번째
                  우승
                </p>
              </div>
            </MusicTextBox>
          </RelativeBox>
          <LoLChampions />
          {/* <NewJeans /> */}
          <RelativeBox>
            <MusicImg
              src="https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/cf6bc677-4cb6-4df4-1209-b5366f14c300/public"
              alt="famous artist"
              loading="lazy"
              decoding="async"
              style={{ height: "45rem" }}
            />
            <AllMusicTextBox>
              <div>
                <p>너무 미리 메리 크리스마스</p>
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
