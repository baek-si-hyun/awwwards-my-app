import { atom, selector } from "recoil";
import { v1 } from "uuid";
import omg from "./assets/img/newjeans_song/omg.jpg";
import ditto from "./assets/img/newjeans_song/ditto.jpg";
import stEp from "./assets/img/newjeans_song/1stEP.jpg";
import adamjensen from "./assets/img/recommended_song/adamjensen.jpg";
import ariana1 from "./assets/img/recommended_song/ariana1.jpg";
import ariana2 from "./assets/img/recommended_song/ariana2.jpg";
import charlie from "./assets/img/recommended_song/charlie.jpg";
import aura from "./assets/img/recommended_song/aura1.jpg";
import smlie from "./assets/img/recommended_song/smlie.jpg";
import jack from "./assets/img/recommended_song/jack.jpg";
import taiverdes from "./assets/img/recommended_song/taiverdes.jpg";
import week1 from "./assets/img/recommended_song/week1.jpg";
import week2 from "./assets/img/recommended_song/week2.jpg";
import blue from "./assets/img/recommended_song/blue.jpg";
import yena from "./assets/img/recommended_song/yena.jpg";
import star from "./assets/img/recommended_song/star.jpg";
import sweater from "./assets/img/recommended_song/sweater.jpg";
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
      id: 10,
      img: aura,
      tittle: "Dead Girl! (Shake My Head)",
      artist: "Au/Ra",
      album: "Dead Girl! (Shake My Head) • 2021",
    },
    {
      id: 0,
      img: taiverdes,
      tittle: "how deep?",
      artist: "Tai Verdes",
      album: "how deep? • 2022",
    },
    {
      id: 1,
      img: jack,
      tittle: "First Class",
      artist: "Jack Harlow",
      album: "First Class • 2022",
    },
    {
      id: 2,
      img: week1,
      tittle: "Heartless",
      artist: "The Weeknd",
      album: "After Hours • 2020",
    },
    {
      id: 3,
      img: week2,
      tittle: "Moth To A Flame",
      artist: "Swedish House Mafia 및 The Weeknd",
      album: "Paradise Again • 2022",
    },

    {
      id: 4,
      img: adamjensen,
      tittle: "I'm a Sucker for a Liar in a Red Dress",
      artist: "Adam Jensen",
      album: "I'm a Sucker for a Liar in a Red Dress • 2020",
    },
    {
      id: 5,
      img: ariana1,
      tittle: "Wit It This Christmas",
      artist: "Ariana Grande",
      album: "Christmas & Chill • 2015",
    },
    {
      id: 6,
      img: ariana2,
      tittle: "Daydreamin'",
      artist: "Ariana Grande",
      album: "Yours Truly • 2013",
    },
    {
      id: 7,
      img: charlie,
      tittle: "Done for Me(feat. Kehlani)",
      artist: "Charlie Puth",
      album: "Voicenotes",
    },
    {
      id: 8,
      img: blue,
      tittle: "BLUE CHECK(feat. Jay Park, Jessi)",
      artist: "토이고 (toigo)",
      album: "쇼미더머니 11 Episode 3 • 2022",
    },
    {
      id: 9,
      img: yena,
      tittle: "SMILEY(feat. BIBI)",
      artist: "YENA (최예나)",
      album: "ˣ‿ˣ (SMiLEY) • 2022",
    },

    {
      id: 11,
      img: smlie,
      tittle: "Happy Face",
      artist: "Jagwar Twin",
      album: "Happy Face • 2020",
    },
    {
      id: 12,
      img: star,
      tittle: "3LAU - Star Crossed (J3SH & LHB Remix)",
      artist: "T. S.",
      album: "2018",
    },
    {
      id: 13,
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
      img: stEp,
      tittle: "Hype Boy",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
    {
      id: 3,
      img: stEp,
      tittle: "Attention",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
    {
      id: 4,
      img: stEp,
      tittle: "Cookie",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
    {
      id: 5,
      img: stEp,
      tittle: "Hurt",
      artist: "NewJeans",
      album: "NewJeans 1st EP 'New Jeans'",
    },
  ],
});
