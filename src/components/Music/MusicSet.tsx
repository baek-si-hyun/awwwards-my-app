import { IPlayList } from "../../interface/imusic";
import { useMusicPlayerControls } from "../../hooks/useMusicPlayerControls";
import { ButtonDiv, ControllBtn } from "./common/musicSetStyles";

function MusicSet({ song }: { song: IPlayList }) {
  const { isPlaying, selectSong, isCurrentSong } = useMusicPlayerControls();
  const isCurrent = isCurrentSong(song);
  const isSongPlaying = isCurrent && isPlaying;

  return (
    <ButtonDiv isPlaying={isSongPlaying}>
      <ControllBtn onClick={() => selectSong(song)} isPlaying={isSongPlaying}>
        {isSongPlaying ? (
          <span className="material-symbols-rounded">pause</span>
        ) : (
          <span className="material-symbols-rounded">play_arrow</span>
        )}
      </ControllBtn>
    </ButtonDiv>
  );
}

export default MusicSet;
