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

export interface IFeaturedListData {
  featuredList: IPlayList[];
}
export interface IVideoInfo {
  videoInfo: {
    playing: boolean;
    videoUrl: string;
    img: string;
    title: string;
    artist: string;
  };
}
export interface IIndex {
  index: number;
}
export interface IControllerVisible {
  visible: boolean;
}
