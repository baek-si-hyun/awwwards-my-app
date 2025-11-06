import styled from "styled-components";
import { IPlayList } from "../../interface/imusic";
import { useMusicPlayerControls } from "../../hooks/useMusicPlayerControls";

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
