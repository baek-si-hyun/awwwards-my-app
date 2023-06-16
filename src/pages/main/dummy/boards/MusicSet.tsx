/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playingVideo, youtubeVideo } from "../../../../atom";

export const ButtonDiv = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  opacity: ${(props) => (props.isPlaying === true ? 0.9 : 0)};
  top: 0;
  left: 0;
  width: 100%;
  height: 96%;
  background-color: #000000;
  transition: opacity 0.2s ease-in-out;
`;
export const ControllBtn = styled.button<{ isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0;
  opacity: ${(props) => (props.isPlaying === true ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: #fff;
    font-size: clamp(1.5vw, 2vw, 60px);
  }
`

function MusicSet({ videoUrl }: { videoUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const setVideoData = useSetRecoilState(youtubeVideo);
  const { playingVideoData } = useRecoilValue(playingVideo);

  const togglePlay = async () => {
    try {
      const newIsPlaying = !isPlaying;
      setIsPlaying(newIsPlaying);
      await new Promise<void>((resolve) => {
        resolve();
      });

      setVideoData({
        playing: newIsPlaying,
        videoUrl: videoUrl,
      });
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    if (videoUrl !== playingVideoData) {
      setIsPlaying(false);
    }
    if (videoUrl === playingVideoData) {
      setIsPlaying(true);
    }
  }, [playingVideoData]);

  return (
    <>
      <ButtonDiv isPlaying={isPlaying}>
        <ControllBtn onClick={togglePlay} isPlaying={isPlaying}>
          {isPlaying ? (
            <span className="material-symbols-rounded">pause</span>
          ) : (
            <span className="material-symbols-rounded">play_arrow</span>
          )}
        </ControllBtn>
      </ButtonDiv>
    </>
  );
}

export default MusicSet;
