export interface IPlayList {
  id: number;
  img: string;
  title: string;
  artist: string;
  album: string;
  url: string;
}
export interface IVideoInfoRedux {
  playing: boolean;
  videoUrl: string;
  img: string;
  title: string;
  artist: string;
}
