import { createSlice } from "@reduxjs/toolkit";
import omg from "../../assets/img/newjeans_song/omg.jpg";
import ditto from "../../assets/img/newjeans_song/ditto.jpg";
import stEp from "../../assets/img/newjeans_song/1stEP.jpg";
import zero from "../../assets/img/newjeans_song/zero.jpg";
import supershy from "../../assets/img/newjeans_song/supershy.jpg";

const newJeansListSlice = createSlice({
  name: "newJeansListSlice",
  initialState: {
    newjeansList: [
      {
        id: 1,
        img: omg,
        title: "OMG",
        artist: "NewJeans",
        album: "NewJeans'OMG'",
        url: "https://www.youtube.com/embed/sVTy_wmn5SU",
      },
      {
        id: 2,
        img: ditto,
        title: "Ditto",
        artist: "NewJeans",
        album: "Ditto",
        url: "https://www.youtube.com/embed/HtbnfBFIJls",
      },
      {
        id: 3,
        img: zero,
        title: "Zero",
        artist: "NewJeans",
        album: "Zero",
        url: "https://www.youtube.com/embed/FWTG5wuVLuI",
      },
      {
        id: 4,
        img: stEp,
        title: "Hype Boy",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/T--6HBX2K4g",
      },
      {
        id: 5,
        img: stEp,
        title: "Attention",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/o8RkbHv2_a0",
      },
      {
        id: 6,
        img: stEp,
        title: "Cookie",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/1pUCsbK35JA",
      },
      {
        id: 7,
        img: stEp,
        title: "Hurt",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/qoK934-VghI",
      },
      {
        id: 8,
        img: supershy,
        title: "Super Shy",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/v8gMZJqdIzU",
      },
      {
        id: 9,
        img: supershy,
        title: "New Jeans",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/QyDQbeMIxSk",
      },
      {
        id: 10,
        img: supershy,
        title: "ETA",
        artist: "NewJeans",
        album: "NewJeans 'Get Up'",
        url: "https://www.youtube.com/embed/jrbknDTFLog",
      },
    ],
  },
  reducers: {
    newJeansRedux: (state, action) => {
      state.newjeansList = action.payload;
    },
  },
});

export default newJeansListSlice;
export const { newJeansRedux } = newJeansListSlice.actions;
