import { useRef, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playingVideo, youtubeVideo } from "../../../../atom";
import ReactPlayer from "react-player/youtube";

function MusicPlayer() {
  const playerRef = useRef(null);
  const { videoId, playing, videoUrl } = useRecoilValue(youtubeVideo);
  const setPlayingVideoId = useSetRecoilState(playingVideo);
  useEffect(() => {
    setPlayingVideoId((playingVideoId) => {
      playingVideoId = { playingVideoData: videoId };
      return playingVideoId;
    });
  }, [setPlayingVideoId, videoId]);
  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        width="0"
        height="0"
        playing={playing}
        controls
      />
    </div>
  );
}

export default MusicPlayer;
