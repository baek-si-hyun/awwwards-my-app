import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { youtubeVideo } from "../../../../atom";

export const ButtonDiv = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 96%;
  background-color: #000000;
  transition: opacity 0.2s ease-in-out;
`;
export const ControllBtn = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
    font-size: clamp(1.5vw, 2vw, 60px);
  }
`;

function MusicSet({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const setVideoData = useSetRecoilState(youtubeVideo);
  const togglePlay = () => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    setIsPlaying((isPlaying) => !isPlaying);
    setVideoData((videoData) => {
      videoData = { videoId: videoId, playing: isPlaying, videoUrl: videoUrl };
      return videoData;
    });
  };
  return (
    <>
      <ButtonDiv>
        <ControllBtn onClick={togglePlay}>
          {isPlaying ? (
            <span className="material-symbols-rounded">play_arrow</span>
          ) : (
            <span className="material-symbols-rounded">pause</span>
          )}
        </ControllBtn>
      </ButtonDiv>
    </>
  );
}

export default MusicSet;
