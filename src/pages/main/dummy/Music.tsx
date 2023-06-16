import styled from "styled-components";
import newjeans from "../../../assets/img/main_img/newjeans.jpg";
import NewJeans from "./boards/NewJeans";
import AllSongs from "./boards/AllSongs";
import allsongs from "../../../assets/img/recommended_song/allsong.jpg";

const MusicWrapper = styled.div`
  width: 100%;
`;
const MusicBox = styled.div`
  width: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;

const InnerMusicBox1 = styled.div`
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
  h2 {
    font-weight: bold;
    font-size: 2vw;
    margin-bottom: 1vw;
  }
  h3 {
    font-size: 1vw;
    line-height: 1.4;
    @media (max-width: 429px) {
      & {
        display: none;
      }
    }
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
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 55%,
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
  border-radius: 0 0 20px 20px;
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
    <MusicWrapper>
      <MusicBox>
        <InnerMusicBox1>
          <MusicImg
            src={newjeans}
            alt="newjeans"
            loading="lazy"
            decoding="async"
          />
          <MusicTextBox>
            <div>
              <h2>NewJeans</h2>
              <h3>
                NewJeans는 2022년 7월 22일에 데뷔한 대한민국의 5인조 걸
                그룹으로, 소속사는 HYBE 산하의 레이블인
                <br /> ADOR이다. SM 엔터테인먼트 디렉터 출신으로 HYBE에 영입된
                민희진이 프로듀서로 나서서 발굴한
                <br /> 걸그룹이다. 2022년 8월 18일 《엠카운트다운》에서 데뷔
                3주만에 첫 1위를 차지하였다.
              </h3>
            </div>
          </MusicTextBox>
        </InnerMusicBox1>
        <InnerMusicBox2>
          <div>
            <p>"You can listen to recommended songs."</p>
          </div>
          <div>
            <p>Recommended List</p>
          </div>
          <NewJeans />
        </InnerMusicBox2>
        <InnerMusicBox3>
          <MusicImg
            src={allsongs}
            alt="famous artist"
            loading="lazy"
            decoding="async"
          />
          <AllMusicTextBox>
            <div>
              <h2>"Subjective"</h2>
            </div>
          </AllMusicTextBox>
        </InnerMusicBox3>
        <InnerMusicBox4>
          <div>
            <p>Recommended List</p>
          </div>
          <AllSongs />
        </InnerMusicBox4>
      </MusicBox>
    </MusicWrapper>
  );
}
export default Music;
