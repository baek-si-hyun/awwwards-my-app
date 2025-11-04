import { createSlice } from "@reduxjs/toolkit";
import fav1 from "../assets/img/fav1.avif";
import fav2 from "../assets/img/fav2.avif";
import fav3 from "../assets/img/fav3.avif";
import fav4 from "../assets/img/fav4.avif";
import fav5 from "../assets/img/fav5.avif";
import fav6 from "../assets/img/fav6.avif";
import fav7 from "../assets/img/fav7.avif";

const lolChampionsListSlice = createSlice({
  name: "lolChampionsListSlice",
  initialState: {
    lolChampionsList: [
      {
        id: 1,
        img: fav1,
        title: "LA Girls",
        artist: "Charlie Puth",
        album: "Voicenotes • 2018",
        url: "https://www.youtube.com/embed/iW3Than5jrs",
      },
      {
        id: 2,
        img: fav2,
        title: "In Your Eyes (Remix) (feat. Doja Cat)",
        artist: "The Weeknd",
        album: "In Your Eyes (Remix) • 2020",
        url: "https://www.youtube.com/embed/ozMBCFd7fFM",
      },
      {
        id: 3,
        img: fav3,
        title: "yes, and?",
        artist: "Ariana Grande",
        album: "yes, and? • 2024",
        url: "https://www.youtube.com/embed/A8jERSryeLc",
      },
      {
        id: 4,
        img: fav4,
        title: "You",
        artist: "Regard, Troye Sivan 및 Tate McRae",
        album: "You • 2021",
        url: "https://www.youtube.com/embed/C46zC8lebXY",
      },
      {
        id: 5,
        img: fav5,
        title: "Agora Hills",
        artist: "Doja Cat",
        album: "Scarlet • 2023",
        url: "https://www.youtube.com/embed/7Vd6K6i51WQ",
      },

      {
        id: 6,
        img: fav6,
        title: "bloodline",
        artist: "Ariana Grande",
        album: "thank u, next • 2019",
        url: "https://www.youtube.com/embed/C2sYLRHqXHY",
      },
      {
        id: 7,
        img: fav7,
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
