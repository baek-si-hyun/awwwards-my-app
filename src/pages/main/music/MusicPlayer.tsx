/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import {
  IFeaturedListData,
  IIndex,
  INewjeansListData,
  IPlayList,
  IVideoInfo,
} from "../../../interface/imusic";
import { controlRedux } from "../../../redux/slices/controlPlayListSlice";
import { videoInfoRedux } from "../../../redux/slices/playingVideoInfoSlice";
import { useMySelector } from "../../../libs/useMySelector";

function MusicPlayer() {
  const [playList, setPlayList] = useState<IPlayList[]>([
    {
      id: 0,
      img: "",
      title: "",
      artist: "",
      album: "",
      url: "https://www.youtube.com/embed/sVTy_wmn5SU",
    },
  ]);
  const videoInfo = useMySelector(
    (state: { playingVideoInfoSlice: IVideoInfo }) =>
      state.playingVideoInfoSlice.videoInfo
  );
  const newList = useMySelector(
    (state: {
      newJeansListSlice: INewjeansListData;
      featuredListSlice: IFeaturedListData;
    }) => {
      const newArr = [
        ...state.newJeansListSlice.newjeansList,
        ...state.featuredListSlice.featuredList,
      ];
      return newArr;
    }
  );
  const index = useMySelector(
    ({ controlPlayListSlice }: { controlPlayListSlice: IIndex }) =>
      controlPlayListSlice?.index
  );
  const onEnded = () => {
    const setIndex = index + 1;
    dispatch(controlRedux(setIndex));
  };
  const [playIndex, setPlayIndex] = useState(0);
  useEffect(() => {
    setPlayIndex(index);
  }, [index]);
  useEffect(() => {
    const findIndex = newList.findIndex(
      (item: { url: string; }) => item.url === videoInfo.videoUrl
    );
    dispatch(controlRedux(findIndex));
    setPlayList(newList);
  }, [newList, videoInfo]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      videoInfoRedux({
        ...videoInfo,
        videoUrl: playList[playIndex]?.url,
        img: playList[playIndex]?.img,
        title: playList[playIndex]?.title,
        artist: playList[playIndex]?.artist,
      })
    );
  }, [dispatch, playIndex, playList]);
  return (
    <article>
      <ReactPlayer
        url={playList[playIndex]?.url}
        width="0"
        height="0"
        playing={videoInfo.playing}
        controls
        onEnded={() => onEnded()}
      />
    </article>
  );
}

export default MusicPlayer;
