import { atom, selector } from "recoil";
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
import { IPathname, Data, IResize, IVisited } from "./interface/interface";

export const visited = atom<IVisited>({
  key: `visited/${v1()}`,
  default: {
    airbnbToday: 0,
    airbnbTotal: 0,
    coinToday: 0,
    coinTotal: 0,
    kanbanToday: 0,
    kanbanTotal: 0,
    myappToday: 0,
    myappTotal: 0,
    netflixToday: 0,
    netflixTotal: 0,
  },
});
export const resizeWidth = atom<IResize>({
  key: `resizeWidth/${v1()}`,
  default: { resizeWidth: window.innerWidth },
});
export const pathList = atom<IPathname>({
  key: `pathList/${v1()}`,
  default: { pathname: "" },
});
export const pathSelector = selector<IPathname>({
  key: `pathListCorrection/${v1()}`,
  get: ({ get }) => {
    const pathname = get(pathList);
    return pathname;
  },
  set: ({ set }, newPath) => {
    set(pathList, newPath);
  },
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
    },
    {
      id: 1,
      img: aespa,
      tittle: "Thirsty",
      artist: "aespa",
      album: "MY WORLD - The 3rd Mini Album • 2023'",
    },
    {
      id: 2,
      img: lesserafim,
      tittle: "Impurities",
      artist: "LE SSERAFIM",
      album: "ANTIFRAGILE • 2022",

    },
    {
      id: 3,
      img: aura,
      tittle: "Dead Girl! (Shake My Head)",
      artist: "Au/Ra",
      album: "Dead Girl! (Shake My Head) • 2021",
    },
    {
      id: 4,
      img: taiverdes,
      tittle: "how deep?",
      artist: "Tai Verdes",
      album: "how deep? • 2022",
    },
    {
      id: 5,
      img: jack,
      tittle: "First Class",
      artist: "Jack Harlow",
      album: "First Class • 2022",
    },
    {
      id: 6,
      img: week1,
      tittle: "Heartless",
      artist: "The Weeknd",
      album: "After Hours • 2020",
    },
    {
      id: 7,
      img: week2,
      tittle: "Moth To A Flame",
      artist: "Swedish House Mafia 및 The Weeknd",
      album: "Paradise Again • 2022",
    },
    {
      id: 8,
      img: adamjensen,
      tittle: "I'm a Sucker for a Liar in a Red Dress",
      artist: "Adam Jensen",
      album: "I'm a Sucker for a Liar in a Red Dress • 2020",
    },
    {
      id: 9,
      img: ariana1,
      tittle: "Wit It This Christmas",
      artist: "Ariana Grande",
      album: "Christmas & Chill • 2015",
    },
    {
      id: 10,
      img: ariana2,
      tittle: "Daydreamin'",
      artist: "Ariana Grande",
      album: "Yours Truly • 2013",
    },
    {
      id: 11,
      img: charlie,
      tittle: "Done for Me(feat. Kehlani)",
      artist: "Charlie Puth",
      album: "Voicenotes",
    },
    {
      id: 12,
      img: iu,
      tittle: "에잇(feat. SUGA)",
      artist: "아이유(IU)",
      album: "에잇 • 2020",
    },

    {
      id: 13,
      img: yena,
      tittle: "SMILEY(feat. BIBI)",
      artist: "YENA (최예나)",
      album: "ˣ‿ˣ (SMiLEY) • 2022",
    },
    {
      id: 14,
      img: star,
      tittle: "3LAU - Star Crossed (J3SH & LHB Remix)",
      artist: "T. S.",
      album: "2018",
    },
    {
      id: 15,
      img: sweater,
      tittle: "Sweater Weather (Gaullin Remix)",
      artist: "The Neighbourhood",
      album: "House Nation",
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
    },
    { id: 1, img: ditto, tittle: "Ditto", artist: "NewJeans", album: "Ditto" },
    {
      id: 2,
      img: zero,
      tittle: "Zero",
      artist: "NewJeans",
      album: "Zero",
    },
    {
      id: 3,
      img: stEp,
      tittle: "Hype Boy",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
    {
      id: 4,
      img: stEp,
      tittle: "Attention",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
    {
      id: 5,
      img: stEp,
      tittle: "Cookie",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
    {
      id: 6,
      img: stEp,
      tittle: "Hurt",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
  ],
});
