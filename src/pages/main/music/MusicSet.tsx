/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { IVideoInfo } from "../../../interface/imusic";
import { videoInfoRedux } from "../../../redux/slices/playingVideoInfoSlice";
import { controllerVisibleRedux } from "../../../redux/slices/controllerVisibleSlice";
import { useMySelector } from "../../../libs/useMySelector";

export const ButtonDiv = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  opacity: ${(props) => (props.isPlaying === true ? 0.9 : 0)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
`;
export const ControllBtn = styled.button<{ isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0;
  opacity: ${(props) => (props.isPlaying === true ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: #fff;
    font-size: clamp(30px, 2vw, 60px);
  }
`;

function MusicSet({ videoUrl }: { videoUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const videoInfo = useMySelector(
    (state: { playingVideoInfoSlice: IVideoInfo }) =>
      state.playingVideoInfoSlice.videoInfo
  );
  const toggle = () => {
    const playing = !isPlaying;
    setIsPlaying(playing);
    dispatch(
      videoInfoRedux({
        ...videoInfo,
        playing: playing,
        videoUrl: videoUrl,
      })
    );
    dispatch(controllerVisibleRedux(true));
  };
  useEffect(() => {
    if (videoInfo.videoUrl === videoUrl) {
      setIsPlaying(videoInfo.playing);
    }
    if (videoInfo.videoUrl !== videoUrl) {
      setIsPlaying(false);
    }
  }, [videoInfo, videoUrl]);

  return (
    <ButtonDiv isPlaying={isPlaying}>
      <ControllBtn onClick={() => toggle()} isPlaying={isPlaying}>
        {isPlaying ? (
          <span className="material-symbols-rounded">pause</span>
        ) : (
          <span className="material-symbols-rounded">play_arrow</span>
        )}
      </ControllBtn>
    </ButtonDiv>
  );
}

export default MusicSet;
