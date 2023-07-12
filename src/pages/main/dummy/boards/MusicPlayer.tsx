import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { shallowEqual, useSelector } from "react-redux";
import {
  IFeaturedListData,
  INewjeansListData,
  IPlayList,
  IVideoInfo,
} from "../../../../interface/imusic";
import { useDispatch } from "react-redux";
import { videoInfoRedux } from "../../../../redux/slices/playingVideoInfoSlice";

function MusicPlayer() {
  const videoInfo = useSelector(
    (state: { playingVideoInfoSlice: IVideoInfo }) => {
      const { playingVideoInfoSlice } = state;
      return playingVideoInfoSlice.videoInfo;
    },
    shallowEqual
  );
  const [index, setIndex] = useState(0);
  const [playList, setPlayList] = useState<IPlayList[]>([
    { id: 0, img: "", tittle: "", artist: "", album: "", url: "" },
  ]);
  const newList = useSelector(
    (state: {
      newJeansListSlice: INewjeansListData;
      featuredListSlice: IFeaturedListData;
    }) => {
      const { newJeansListSlice, featuredListSlice } = state;
      const newArr = [
        ...newJeansListSlice.newjeansList,
        ...featuredListSlice.featuredList,
      ];
      return newArr;
    },
    shallowEqual
  );

  const onEnded = () => {
    setIndex((index) => index + 1);
  };

  useEffect(() => {
    const findIndex = newList.findIndex(
      (item) => item.url === videoInfo.videoUrl
    );
    setIndex(findIndex);
    setPlayList(newList);
  }, [newList, videoInfo]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      videoInfoRedux({
        playing: videoInfo.playing,
        videoUrl: playList[index]?.url,
      })
    );
  }, [dispatch, index, playList]);
  return (
    <div>
      <ReactPlayer
        url={playList[index]?.url}
        width="0"
        height="0"
        playing={videoInfo.playing}
        controls
        onEnded={() => onEnded()}
      />
    </div>
  );
}

export default MusicPlayer;
