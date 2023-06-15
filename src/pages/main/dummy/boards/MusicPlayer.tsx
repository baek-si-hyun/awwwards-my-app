import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playingVideo, youtubeVideo } from "../../../../atom";

function MusicPlayer({ playList }: { playList: string[] }) {
  const [index, setIndex] = useState(0);
  const setPlayingVideoId = useSetRecoilState(playingVideo);
  const { playing } = useRecoilValue(youtubeVideo);
  const handleVideoEnded = () => {
    setIndex((index) => index + 1);
  };
  useEffect(() => {
    setIndex(() => 0);
    setPlayingVideoId({ playingVideoData: playList[0] });
  }, [playList]);
  useEffect(() => {
    setPlayingVideoId({ playingVideoData: playList[index] });
  }, [index, setPlayingVideoId, playing]);

  return (
    <div>
      <ReactPlayer
        url={playList[index]}
        width="0"
        height="0"
        playing={playing}
        controls
        onEnded={() => handleVideoEnded()}
      />
    </div>
  );
}

export default MusicPlayer;
