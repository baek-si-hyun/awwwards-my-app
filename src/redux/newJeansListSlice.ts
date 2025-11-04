import { createSlice } from "@reduxjs/toolkit";
import nj1 from "../assets/img/nj1.avif";
import nj2 from "../assets/img/nj2.avif";
import nj3 from "../assets/img/nj3.avif";
import nj4 from "../assets/img/nj4.avif";
import nj5 from "../assets/img/nj5.avif";
import nj6 from "../assets/img/nj6.avif";
import nj7 from "../assets/img/nj7.avif";
import nj8 from "../assets/img/nj8.avif";
import nj9 from "../assets/img/nj9.avif";
import nj10 from "../assets/img/nj10.avif";
import nj11 from "../assets/img/nj11.avif";
import nj12 from "../assets/img/nj12.avif";

const newJeansListSlice = createSlice({
  name: "newJeansListSlice",
  initialState: {
    newjeansList: [
      {
        id: 1,
        img: nj1,
        title: "Bubble Gum",
        artist: "NewJeans",
        album: "How Sweet • 2024",
        url: "https://www.youtube.com/embed/kavLNr-PyoY",
      },
      {
        id: 2,
        img: nj2,
        title: "How Sweet",
        artist: "NewJeans",
        album: "How Sweet • 2024",
        url: "https://www.youtube.com/embed/fTt3dbNBH20",
      },
      {
        id: 3,
        img: nj3,
        title: "Super Shy",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/cQY5brXxEig",
      },
      {
        id: 4,
        img: nj4,
        title: "New Jeans",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/G8GEpK7YDl4",
      },
      {
        id: 5,
        img: nj5,
        title: "ETA",
        artist: "NewJeans",
        album: "NewJeans 'Get Up'",
        url: "https://www.youtube.com/embed/2u_kncwzJ5Y",
      },
      {
        id: 6,
        img: nj6,
        title: "OMG",
        artist: "NewJeans",
        album: "NewJeans'OMG'",
        url: "https://www.youtube.com/embed/sVTy_wmn5SU",
      },
      {
        id: 7,
        img: nj7,
        title: "Ditto",
        artist: "NewJeans",
        album: "Ditto",
        url: "https://www.youtube.com/embed/haCpjUXIhrI",
      },
      {
        id: 8,
        img: nj8,
        title: "Zero",
        artist: "NewJeans",
        album: "Zero",
        url: "https://www.youtube.com/embed/zeOm8-t42aQ",
      },
      {
        id: 9,
        img: nj9,
        title: "Hype Boy",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/T--6HBX2K4g",
      },
      {
        id: 10,
        img: nj10,
        title: "Attention",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/o8RkbHv2_a0",
      },
      {
        id: 11,
        img: nj11,
        title: "Cookie",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/1pUCsbK35JA",
      },
      {
        id: 12,
        img: nj12,
        title: "Hurt",
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
