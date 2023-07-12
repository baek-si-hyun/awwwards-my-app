export interface INewjeansListData {
  newjeansList: {
    id: number;
    img: string;
    tittle: string;
    artist: string;
    album: string;
    url: string;
  }[];
}
export interface IFeaturedListData {
  featuredList: {
    id: number;
    img: string;
    tittle: string;
    artist: string;
    album: string;
    url: string;
  }[];
}
export interface IPlayList {
  id: number;
  img: string;
  tittle: string;
  artist: string;
  album: string;
  url: string;
}
export interface IVideoInfo {
  videoInfo: { playing: boolean; videoUrl: string };
}