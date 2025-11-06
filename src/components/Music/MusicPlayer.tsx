import ReactPlayer from "react-player";
import { useMusicPlayerControls } from "../../hooks/useMusicPlayerControls";

function MusicPlayer() {
  const { currentSong, isPlaying, playNext } = useMusicPlayerControls({
    syncMetadata: true,
  });

  const handleEnded = () => {
    playNext({ autoPlay: true });
  };

  if (!currentSong) return null;

  return (
    <article>
      <ReactPlayer
        url={currentSong.url}
        width="0"
        height="0"
        playing={isPlaying}
        controls
        onEnded={handleEnded}
      />
    </article>
  );
}

export default MusicPlayer;
