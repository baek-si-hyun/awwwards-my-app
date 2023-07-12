import { createSlice } from "@reduxjs/toolkit";
import omg from "../../assets/img/newjeans_song/omg.jpg";
import ditto from "../../assets/img/newjeans_song/ditto.jpg";
import stEp from "../../assets/img/newjeans_song/1stEP.jpg";
import zero from "../../assets/img/newjeans_song/zero.jpg";

const newJeansListSlice = createSlice({
  name: "newJeansListSlice",
  initialState: {
    newjeansList: [
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
  },
  reducers: {
    newJeansRedux: (state, action) => {
      state.newjeansList = action.payload;
    },
  },
});

export default newJeansListSlice;
export const { newJeansRedux } = newJeansListSlice.actions;
