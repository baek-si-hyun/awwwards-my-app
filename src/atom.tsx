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
import iu from "./assets/img/recommended_song/iu.jpg";
import lesserafim from "./assets/img/recommended_song/lesserafim.jpg";
import stayc from "./assets/img/recommended_song/stayc.jpg";
import alltimelow from "./assets/img/recommended_song/alltimelow.jpg";
import { Data, IResize, IVideo } from "./interface/interface";

export const resizeWidth = atom<IResize>({
  key: `resizeWidth/${v1()}`,
  default: { resizeWidth: window.innerWidth },
});
export const youtubeVideo = atom<IVideo>({
  key: `resizeWidth/${v1()}`,
  default: { videoId: "", playing: false, videoUrl: "" },
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
      videoId: "fAp8dr_fPJY",
    },
    {
      id: 1,
      img: aespa,
      tittle: "Thirsty",
      artist: "aespa",
      album: "MY WORLD - The 3rd Mini Album • 2023'",
      videoId: "Ysz8_LZL52c",
    },
    {
      id: 2,
      img: lesserafim,
      tittle: "Impurities",
      artist: "LE SSERAFIM",
      album: "ANTIFRAGILE • 2022",
      videoId: "-uZcrLYNwfE",
    },
    {
      id: 3,
      img: stayc,
      tittle: "Poppy",
      artist: "STAYC(스테이씨)",
      album: "Teddy Bear",
      videoId: "sN1ZGLIqy4g",
    },
    {
      id: 4,
      img: aura,
      tittle: "Dead Girl! (Shake My Head)",
      artist: "Au/Ra",
      album: "Dead Girl! (Shake My Head) • 2021",
      videoId: "Z0pUhjAYbm8",
    },
    {
      id: 5,
      img: taiverdes,
      tittle: "how deep?",
      artist: "Tai Verdes",
      album: "how deep? • 2022",
      videoId: "9M8fEfJTV1k",
    },
    {
      id: 6,
      img: jack,
      tittle: "First Class",
      artist: "Jack Harlow",
      album: "First Class • 2022",
      videoId: "5CVrij8tcP8",
    },
    {
      id: 7,
      img: week1,
      tittle: "Heartless",
      artist: "The Weeknd",
      album: "After Hours • 2020",
      videoId: "bayAxoXJOyQ",
    },
    {
      id: 8,
      img: week2,
      tittle: "Moth To A Flame",
      artist: "Swedish House Mafia 및 The Weeknd",
      album: "Paradise Again • 2022",
      videoId: "WbzmQcFLPE8",
    },
    {
      id: 9,
      img: adamjensen,
      tittle: "I'm a Sucker for a Liar in a Red Dress",
      artist: "Adam Jensen",
      album: "I'm a Sucker for a Liar in a Red Dress • 2020",
      videoId: "HyvP-frWgGE",
    },
    {
      id: 10,
      img: ariana1,
      tittle: "Wit It This Christmas",
      artist: "Ariana Grande",
      album: "Christmas & Chill • 2015",
      videoId: "El79WQpXyPQ",
    },
    {
      id: 11,
      img: ariana2,
      tittle: "Daydreamin'",
      artist: "Ariana Grande",
      album: "Yours Truly • 2013",
      videoId: "eLQMGYHVJ_I",
    },
    {
      id: 12,
      img: charlie,
      tittle: "Done for Me(feat. Kehlani)",
      artist: "Charlie Puth",
      album: "Voicenotes",
      videoId: "3tYajkHNK58",
    },
    {
      id: 13,
      img: iu,
      tittle: "에잇(feat. SUGA)",
      artist: "아이유(IU)",
      album: "에잇 • 2020",
      videoId: "LFiffwrhLn8",
    },

    {
      id: 14,
      img: yena,
      tittle: "SMILEY(feat. BIBI)",
      artist: "YENA (최예나)",
      album: "ˣ‿ˣ (SMiLEY) • 2022",
      videoId: "wr-YgbXiQQM",
    },
    {
      id: 15,
      img: alltimelow,
      tittle: "Tome-Bomb",
      artist: "All Time Low",
      album: "Dirty Work",
      videoId: "AJF8h5ty-vA",
    },
    {
      id: 16,
      img: star,
      tittle: "3LAU - Star Crossed (J3SH & LHB Remix)",
      artist: "T. S.",
      album: "2018",
      videoId: "1dtVbJy3eHU",
    },
    {
      id: 17,
      img: sweater,
      tittle: "Sweater Weather (Gaullin Remix)",
      artist: "The Neighbourhood",
      album: "House Nation",
      videoId: "6iPDdCJ1lEM",
    },
  ],
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
      videoId: "sVTy_wmn5SU",
    },
    {
      id: 1,
      img: ditto,
      tittle: "Ditto",
      artist: "NewJeans",
      album: "Ditto",
      videoId: "HtbnfBFIJls",
    },
    {
      id: 2,
      img: zero,
      tittle: "Zero",
      artist: "NewJeans",
      album: "Zero",
      videoId: "FWTG5wuVLuI",
    },
    {
      id: 3,
      img: stEp,
      tittle: "Hype Boy",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      videoId: "T--6HBX2K4g",
    },
    {
      id: 4,
      img: stEp,
      tittle: "Attention",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      videoId: "o8RkbHv2_a0",
    },
    {
      id: 5,
      img: stEp,
      tittle: "Cookie",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      videoId: "1pUCsbK35JA",
    },
    {
      id: 6,
      img: stEp,
      tittle: "Hurt",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
      videoId: "qoK934-VghI",
    },
  ],
});
