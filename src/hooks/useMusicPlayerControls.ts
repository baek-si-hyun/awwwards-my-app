import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { IPlayList, IVideoInfoRedux } from "../interface/imusic";
import { useMySelector } from "../libs/useMySelector";
import { controlRedux } from "../redux/controlPlayListSlice";
import { controllerVisibleRedux } from "../redux/controllerVisibleSlice";
import { videoInfoRedux } from "../redux/playingVideoInfoSlice";

type JumpOptions = {
  autoPlay?: boolean;
};

interface UseMusicPlayerControlsOptions {
  syncMetadata?: boolean;
}

function buildVideoInfo(song: IPlayList, playing: boolean) {
  return {
    playing,
    videoUrl: song.url,
    img: song.img,
    title: song.title,
    artist: song.artist,
  };
}

export function useMusicPlayerControls(
  options: UseMusicPlayerControlsOptions = {}
) {
  const { syncMetadata = false } = options;
  const dispatch = useDispatch();

  const lolChampionsList = useMySelector(
    (state) => state.lolChampionsListSlice.lolChampionsList
  );
  const newJeansList = useMySelector(
    (state) => state.newJeansListSlice.newjeansList
  );

  const playList = useMemo(
    () => [...lolChampionsList, ...newJeansList],
    [lolChampionsList, newJeansList]
  );

  const index = useMySelector((state) => state.controlPlayListSlice.index ?? 0);

  const videoInfo = useMySelector(
    (state): IVideoInfoRedux => state.playingVideoInfoSlice.videoInfo
  );

  const currentSong = useMemo(() => playList[index] ?? null, [playList, index]);
  const isPlaying = videoInfo.playing;

  useEffect(() => {
    if (!syncMetadata || !currentSong) return;

    if (
      videoInfo.videoUrl !== currentSong.url ||
      videoInfo.img !== currentSong.img ||
      videoInfo.title !== currentSong.title ||
      videoInfo.artist !== currentSong.artist
    ) {
      dispatch(videoInfoRedux(buildVideoInfo(currentSong, videoInfo.playing)));
    }
  }, [syncMetadata, currentSong, videoInfo, dispatch]);

  const showController = useCallback(() => {
    dispatch(controllerVisibleRedux(true));
  }, [dispatch]);

  const jumpToIndex = useCallback(
    (nextIndex: number, options?: JumpOptions) => {
      if (!playList.length) return;

      const normalizedIndex =
        ((nextIndex % playList.length) + playList.length) % playList.length;
      const nextSong = playList[normalizedIndex];
      const shouldPlay =
        options?.autoPlay !== undefined ? options.autoPlay : videoInfo.playing;

      dispatch(controlRedux(normalizedIndex));
      dispatch(videoInfoRedux(buildVideoInfo(nextSong, shouldPlay)));

      if (shouldPlay) {
        showController();
      }
    },
    [dispatch, playList, videoInfo.playing, showController]
  );

  const togglePlay = useCallback(() => {
    if (!currentSong) return;

    const nextPlaying = !videoInfo.playing;
    dispatch(videoInfoRedux(buildVideoInfo(currentSong, nextPlaying)));
    showController();
  }, [currentSong, dispatch, videoInfo.playing, showController]);

  const selectSong = useCallback(
    (song: IPlayList) => {
      const targetIndex = playList.findIndex((item) => item.url === song.url);
      if (targetIndex === -1) return;

      if (targetIndex === index) {
        togglePlay();
        return;
      }

      jumpToIndex(targetIndex, { autoPlay: true });
    },
    [playList, index, jumpToIndex, togglePlay]
  );

  const playPrev = useCallback(
    (options?: JumpOptions) => {
      jumpToIndex(index - 1, options);
    },
    [index, jumpToIndex]
  );

  const playNext = useCallback(
    (options?: JumpOptions) => {
      jumpToIndex(index + 1, options);
    },
    [index, jumpToIndex]
  );

  const isCurrentSong = useCallback(
    (song: IPlayList) => currentSong?.url === song.url,
    [currentSong]
  );

  return {
    playList,
    currentSong,
    currentIndex: index,
    isPlaying,
    videoInfo,
    selectSong,
    togglePlay,
    playPrev,
    playNext,
    isCurrentSong,
  };
}

export type UseMusicPlayerControlsReturn = ReturnType<
  typeof useMusicPlayerControls
>;
