import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { youtubeVideo } from "../../../../atom";
import ReactPlayer from "react-player";

function MusicPlayer() {
  const playerRef = useRef(null);
  const { videoId, playing, videoUrl } = useRecoilValue(youtubeVideo);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        width="300"
        height="300"
        playing={playing}
        controls
      />
    </div>
  );
}

export default MusicPlayer;
