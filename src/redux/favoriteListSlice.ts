import { createSlice } from "@reduxjs/toolkit";
import { IMAGES } from "../constants/images";

const lolChampionsListSlice = createSlice({
  name: "lolChampionsListSlice",
  initialState: {
    lolChampionsList: [
      {
        id: 1,
        img: IMAGES.MUSIC.FAVORITE.FAV1,
        title: "LA Girls",
        artist: "Charlie Puth",
        album: "Voicenotes • 2018",
        url: "https://www.youtube.com/embed/iW3Than5jrs",
      },
      {
        id: 2,
        img: IMAGES.MUSIC.FAVORITE.FAV2,
        title: "In Your Eyes (Remix) (feat. Doja Cat)",
        artist: "The Weeknd",
        album: "In Your Eyes (Remix) • 2020",
        url: "https://www.youtube.com/embed/ozMBCFd7fFM",
      },
      {
        id: 3,
        img: IMAGES.MUSIC.FAVORITE.FAV3,
        title: "yes, and?",
        artist: "Ariana Grande",
        album: "yes, and? • 2024",
        url: "https://www.youtube.com/embed/A8jERSryeLc",
      },
      {
        id: 4,
        img: IMAGES.MUSIC.FAVORITE.FAV4,
        title: "You",
        artist: "Regard, Troye Sivan 및 Tate McRae",
        album: "You • 2021",
        url: "https://www.youtube.com/embed/C46zC8lebXY",
      },
      {
        id: 5,
        img: IMAGES.MUSIC.FAVORITE.FAV5,
        title: "Agora Hills",
        artist: "Doja Cat",
        album: "Scarlet • 2023",
        url: "https://www.youtube.com/embed/7Vd6K6i51WQ",
      },

      {
        id: 6,
        img: IMAGES.MUSIC.FAVORITE.FAV6,
        title: "bloodline",
        artist: "Ariana Grande",
        album: "thank u, next • 2019",
        url: "https://www.youtube.com/embed/C2sYLRHqXHY",
      },
      {
        id: 7,
        img: IMAGES.MUSIC.FAVORITE.FAV7,
        title: "Heartless",
        artist: "The Weeknd",
        album: "After Hours • 2020",
        url: "https://www.youtube.com/embed/KbWjNgPJRA0",
      },
    ],
  },
  reducers: {
    lolChampionsRedux: (state, action) => {
      state.lolChampionsList = action.payload;
    },
  },
});

export default lolChampionsListSlice;
export const { lolChampionsRedux } = lolChampionsListSlice.actions;
