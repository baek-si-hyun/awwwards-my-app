/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playingVideo, youtubeVideo } from "../../../../atom";

function MusicPlayer({
  playList,
  playingIndex,
}: {
  playList: string[];
  playingIndex: number;
}) {
  const [index, setIndex] = useState(0);
  const setPlayingVideoId = useSetRecoilState(playingVideo);
  const { playing } = useRecoilValue(youtubeVideo);
  const [play, setPlay] = useState("");

  const handleVideoEnded = () => {
    setIndex((index) => index + 1);
  };
  
  useEffect(() => {
    setIndex(() => playingIndex);
  }, [playList]);

  useEffect(() => {
    setPlay(playList[index]);
    setPlayingVideoId({ playingVideoData: playList[index] });
  }, [index, setIndex]);

  return (
    <div>
      <ReactPlayer
        url={play}
        width="300"
        height="300"
        playing={playing}
        controls
        onEnded={() => handleVideoEnded()}
      />
    </div>
  );
}

export default MusicPlayer;
