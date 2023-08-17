import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import { IControllerVisible, IIndex, IVideoInfo } from "../../interface/imusic";
import { useDispatch } from "react-redux";
import { videoInfoRedux } from "../../redux/slices/playingVideoInfoSlice";
import { controlRedux } from "../../redux/slices/controlPlayListSlice";

const MusicPlayBoxContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  position: fixed;
  bottom: 2rem;
  will-change: bottom;
  right: 2.7%;
  border-radius: 10px;
  padding: 0.3rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  z-index: 10;
  animation: fadeInUp 0.3s forwards;
  @keyframes fadeInUp {
    0% {
      transform: translateY(5rem);
    }
    to {
      transform: translateY(0);
    }
  }
  @media (max-width: 1079px) {
    & {
      display: none;
    }
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const InfoControlBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Info = styled.div`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Control = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const Prev = styled.div`
  cursor: pointer;
`;
const PlayAndStop = styled.div`
  cursor: pointer;
`;
const Next = styled.div`
  cursor: pointer;
`;
const ControllBtn = styled.div`
  cursor: pointer;
`;

function MusicPlayBox() {
  const visible = useSelector(
    (state: { controllerVisibleSlice: IControllerVisible }) => {
      return state.controllerVisibleSlice.visible;
    },
    shallowEqual
  );
  const videoInfo = useSelector(
    (state: { playingVideoInfoSlice: IVideoInfo }) => {
      return state.playingVideoInfoSlice.videoInfo;
    },
    shallowEqual
  );
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(
      videoInfoRedux({
        playing: !videoInfo.playing,
        videoUrl: videoInfo.videoUrl,
        img: videoInfo.img,
        title: videoInfo.title,
        artist: videoInfo.artist,
      })
    );
  };
  const index = useSelector(
    ({ controlPlayListSlice }: { controlPlayListSlice: IIndex }) => {
      return controlPlayListSlice?.index;
    },
    shallowEqual
  );
  const prev = () => {
    if (index > 0) {
      const setIndex = index - 1;
      dispatch(controlRedux(setIndex));
    } else if (index <= 0) {
      dispatch(controlRedux(36));
    }
  };
  const next = () => {
    if (index < 36) {
      const setIndex = index + 1;
      dispatch(controlRedux(setIndex));
    } else if (index >= 36) {
      dispatch(controlRedux(0));
    }
  };
  return (
    <>
      {visible && (
        <MusicPlayBoxContainer isVisible={visible}>
          <Img src={videoInfo?.img} />
          <InfoControlBox>
            <Info>
              {videoInfo?.title} - {videoInfo.artist}
            </Info>
            <Control>
              <Prev>
                <ControllBtn onClick={() => prev()}>
                  <span className="material-symbols-outlined">
                    skip_previous
                  </span>
                </ControllBtn>
              </Prev>
              <PlayAndStop>
                <ControllBtn onClick={() => toggle()}>
                  {videoInfo.playing ? (
                    <span className="material-symbols-rounded">pause</span>
                  ) : (
                    <span className="material-symbols-rounded">play_arrow</span>
                  )}
                </ControllBtn>
              </PlayAndStop>
              <Next>
                <ControllBtn onClick={() => next()}>
                  <span className="material-symbols-outlined">skip_next</span>
                </ControllBtn>
              </Next>
            </Control>
          </InfoControlBox>
        </MusicPlayBoxContainer>
      )}
    </>
  );
}
export default MusicPlayBox;