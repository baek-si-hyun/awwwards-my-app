import { atom } from "recoil";
import { v1 } from "uuid";
import omg from "./assets/img/newjeans_song/omg.jpg";
import ditto from "./assets/img/newjeans_song/ditto.jpg";
import stEp from "./assets/img/newjeans_song/1stEP.jpg";
import zero from "./assets/img/newjeans_song/zero.jpg";
import adamjensen from "./assets/img/recommended_song/adamjensen.jpg";
import ariana1 from "./assets/img/recommended_song/ariana1.jpg";
import ariana2 from "./assets/img/recommended_song/ariana2.jpg";
import charlie from "./assets/img/recommended_song/charlie.jpg";
import aura from "./assets/img/recommended_song/aura1.jpg";
import jack from "./assets/img/recommended_song/jack.jpg";
import taiverdes from "./assets/img/recommended_song/taiverdes.jpg";
import week1 from "./assets/img/recommended_song/week1.jpg";
import week2 from "./assets/img/recommended_song/week2.jpg";
import aespa from "./assets/img/recommended_song/aespa.jpg";
import hypeboyRemix from "./assets/img/recommended_song/hypeboy_remix.jpg";
import yena from "./assets/img/recommended_song/yena.jpg";
import star from "./assets/img/recommended_song/star.jpg";
import sweater from "./assets/img/recommended_song/sweater.jpg";
import triple from "./assets/img/recommended_song/iu.jpg";
import lesserafim from "./assets/img/recommended_song/lesserafim.jpg";
import stayc from "./assets/img/recommended_song/stayc.jpg";
import alltimelow from "./assets/img/recommended_song/alltimelow.jpg";
import { Data, IResize, IVideo } from "./interface/interface";

export const resizeWidth = atom<IResize>({
  key: `resizeWidth/${v1()}`,
  default: { resizeWidth: window.innerWidth },
});
export const youtubeVideo = atom<IVideo>({
  key: `youtubeVideo/${v1()}`,
  default: { playing: false, videoUrl: "" },
});
export const playingVideo = atom({
  key: `playingVideo/${v1()}`,
  default: { playingVideoData: "" },
});
export const newJeans = atom<Data[]>({
  key: `newJeans/${v1()}`,
  default: [
    {
      id: 0,
      img: omg,
      tittle: "OMG",
      artist: "NewJeans",
      album: "NewJeans'OMG'",
      url: "https://www.youtube.com/embed/sVTy_wmn5SU",
    },
    {
      id: 1,
      img: ditto,
      tittle: "Ditto",
      artist: "NewJeans",
      album: "Ditto",
      url: "https://www.youtube.com/embed/HtbnfBFIJls",
    },
    {
      id: 2,
      img: zero,
      tittle: "Zero",
      artist: "NewJeans",
      album: "Zero",
      url: "https://www.youtube.com/embed/FWTG5wuVLuI",
    },
    {
      id: 3,
      img: stEp,
      tittle: "Hype Boy",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      url: "https://www.youtube.com/embed/T--6HBX2K4g",
    },
    {
      id: 4,
      img: stEp,
      tittle: "Attention",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      url: "https://www.youtube.com/embed/o8RkbHv2_a0",
    },
    {
      id: 5,
      img: stEp,
      tittle: "Cookie",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      url: "https://www.youtube.com/embed/1pUCsbK35JA",
    },
    {
      id: 6,
      img: stEp,
      tittle: "Hurt",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      url: "https://www.youtube.com/embed/qoK934-VghI",
    },
  ],
});
export const all = atom<Data[]>({
  key: `all/${v1()}`,
  default: [
    {
      id: 0,
      img: hypeboyRemix,
      tittle: "Hype Boy(dylonmaycel rearranged)",
      artist: "dylonmaycel",
      album: "NewJeans 1st EP 'New Jeans'",
      url: "https://www.youtube.com/embed/fAp8dr_fPJY",
    },
    {
      id: 1,
      img: aespa,
      tittle: "Thirsty",
      artist: "aespa",
      album: "MY WORLD - The 3rd Mini Album • 2023'",
      url: "https://www.youtube.com/embed/Ysz8_LZL52c",
    },
    {
      id: 2,
      img: lesserafim,
      tittle: "Impurities",
      artist: "LE SSERAFIM",
      album: "ANTIFRAGILE • 2022",
      url: "https://www.youtube.com/embed/-uZcrLYNwfE",
    },
    {
      id: 3,
      img: stayc,
      tittle: "Poppy",
      artist: "STAYC(스테이씨)",
      album: "Teddy Bear",
      url: "https://www.youtube.com/embed/sN1ZGLIqy4g",
    },
    {
      id: 4,
      img: aura,
      tittle: "Dead Girl! (Shake My Head)",
      artist: "Au/Ra",
      album: "Dead Girl! (Shake My Head) • 2021",
      url: "https://www.youtube.com/embed/Z0pUhjAYbm8",
    },
    {
      id: 5,
      img: taiverdes,
      tittle: "how deep?",
      artist: "Tai Verdes",
      album: "how deep? • 2022",
      url: "https://www.youtube.com/embed/9M8fEfJTV1k",
    },
    {
      id: 6,
      img: jack,
      tittle: "First Class",
      artist: "Jack Harlow",
      album: "First Class • 2022",
      url: "https://www.youtube.com/embed/5CVrij8tcP8",
    },
    {
      id: 7,
      img: week1,
      tittle: "Heartless",
      artist: "The Weeknd",
      album: "After Hours • 2020",
      url: "https://www.youtube.com/embed/-uj9b9JCIJM",
    },
    {
      id: 8,
      img: week2,
      tittle: "Moth To A Flame",
      artist: "Swedish House Mafia 및 The Weeknd",
      album: "Paradise Again • 2022",
      url: "https://www.youtube.com/embed/WbzmQcFLPE8",
    },
    {
      id: 9,
      img: adamjensen,
      tittle: "I'm a Sucker for a Liar in a Red Dress",
      artist: "Adam Jensen",
      album: "I'm a Sucker for a Liar in a Red Dress • 2020",
      url: "https://www.youtube.com/embed/HyvP-frWgGE",
    },
    {
      id: 10,
      img: ariana1,
      tittle: "Wit It This Christmas",
      artist: "Ariana Grande",
      album: "Christmas & Chill • 2015",
      url: "https://www.youtube.com/embed/El79WQpXyPQ",
    },
    {
      id: 11,
      img: ariana2,
      tittle: "Daydreamin'",
      artist: "Ariana Grande",
      album: "Yours Truly • 2013",
      url: "https://www.youtube.com/embed/eLQMGYHVJ_I",
    },
    {
      id: 12,
      img: charlie,
      tittle: "Done for Me(feat. Kehlani)",
      artist: "Charlie Puth",
      album: "Voicenotes",
      url: "https://www.youtube.com/embed/3tYajkHNK58",
    },
    {
      id: 13,
      img: triple,
      tittle: "Jubël - Triple A (feat. NLE Choppa)",
      artist: "Jubël",
      album: "Triple A • 2023",
      url: "https://www.youtube.com/embed/N3Xbg-Hrc8s",
    },

    {
      id: 14,
      img: yena,
      tittle: "SMILEY(feat. BIBI)",
      artist: "YENA (최예나)",
      album: "ˣ‿ˣ (SMiLEY) • 2022",
      url: "https://www.youtube.com/embed/wr-YgbXiQQM",
    },
    {
      id: 15,
      img: alltimelow,
      tittle: "Tome-Bomb",
      artist: "All Time Low",
      album: "Dirty Work",
      url: "https://www.youtube.com/embed/AJF8h5ty-vA",
    },
    {
      id: 16,
      img: star,
      tittle: "3LAU - Star Crossed (J3SH & LHB Remix)",
      artist: "T. S.",
      album: "2018",
      url: "https://www.youtube.com/embed/1dtVbJy3eHU",
    },
    {
      id: 17,
      img: sweater,
      tittle: "Sweater Weather (Gaullin Remix)",
      artist: "The Neighbourhood",
      album: "House Nation",
      url: "https://www.youtube.com/embed/6iPDdCJ1lEM",
    },
  ],
});
