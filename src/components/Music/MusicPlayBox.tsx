import styled from "styled-components";
import { IControllerVisible, IIndex, IVideoInfo } from "../../interface/imusic";
import { useDispatch } from "react-redux";
import { videoInfoRedux } from "../../redux/playingVideoInfoSlice";
import { controlRedux } from "../../redux/controlPlayListSlice";
import { useMySelector } from "../../libs/useMySelector";

const Container = styled.div<{ isVisible: boolean; backGroundImg: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  position: fixed;
  right: 2.7%;
  bottom: 2rem;
  border-radius: 10px;
  padding: 0.3rem;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.backGroundImg}) no-repeat center/cover;
    filter: blur(3px);
    z-index: -1;
  }
  color: #fff;
  z-index: 999;
  animation: fadeInUp 0.3s forwards;
  @keyframes fadeInUp {
    0% {
      transform: translateY(5rem);
    }
    to {
      transform: translateY(0);
    }
  }
  @media (max-width: 1024px) {
    & {
      position: static;
      animation: none;
    }
  }
  @media (max-width: 768px) {
    & {
      width: 100%;
      justify-content: space-between;
      padding-right: 1rem;
      background-color: transparent;
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
  const visible = useMySelector(
    (state: { controllerVisibleSlice: IControllerVisible }) =>
      state.controllerVisibleSlice.visible
  );

  const videoInfo = useMySelector(
    (state: { playingVideoInfoSlice: IVideoInfo }) =>
      state.playingVideoInfoSlice.videoInfo
  );
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(
      videoInfoRedux({
        ...videoInfo,
        playing: !videoInfo.playing,
      })
    );
  };
  const index = useMySelector(
    ({ controlPlayListSlice }: { controlPlayListSlice: IIndex }) =>
      controlPlayListSlice?.index
  );
  const prev = () => {
    if (index > 0) {
      const setIndex = index - 1;
      dispatch(controlRedux(setIndex));
    } else if (index <= 0) {
      dispatch(controlRedux(18));
    }
  };
  const next = () => {
    if (index < 18) {
      const setIndex = index + 1;
      dispatch(controlRedux(setIndex));
    } else if (index >= 18) {
      dispatch(controlRedux(0));
    }
  };
  return (
    <>
      {visible && (
        <Container isVisible={visible} backGroundImg={videoInfo.img}>
          <Img src={videoInfo.img} />
          <InfoControlBox>
            <Info>
              {videoInfo.title} - {videoInfo.artist}
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
        </Container>
      )}
    </>
  );
}
export default MusicPlayBox;
