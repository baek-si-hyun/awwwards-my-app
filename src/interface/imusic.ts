export interface IPlayList {
  id: number;
  img: string;
  title: string;
  artist: string;
  album: string;
  url: string;
}
export interface INewjeansListData {
  newjeansList: IPlayList[];
}
export interface ILoLChampionsListData {
  lolChampionsList: IPlayList[];
}
export interface IVideoInfoRedux {
  playing: boolean;
  videoUrl: string;
  img: string;
  title: string;
  artist: string;
}

export interface IVideoInfo {
  videoInfo: IVideoInfoRedux;
}

export interface IIndex {
  index: number;
}
export interface IControllerVisible {
  visible: boolean;
}
