import { createSlice } from "@reduxjs/toolkit";
import { IMAGES } from "../constants/images";

const newJeansListSlice = createSlice({
  name: "newJeansListSlice",
  initialState: {
    newjeansList: [
      {
        id: 1,
        img: IMAGES.MUSIC.NEWJEANS.NJ1,
        title: "Bubble Gum",
        artist: "NewJeans",
        album: "How Sweet • 2024",
        url: "https://www.youtube.com/embed/kavLNr-PyoY",
      },
      {
        id: 2,
        img: IMAGES.MUSIC.NEWJEANS.NJ2,
        title: "How Sweet",
        artist: "NewJeans",
        album: "How Sweet • 2024",
        url: "https://www.youtube.com/embed/fTt3dbNBH20",
      },
      {
        id: 3,
        img: IMAGES.MUSIC.NEWJEANS.NJ3,
        title: "Super Shy",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/cQY5brXxEig",
      },
      {
        id: 4,
        img: IMAGES.MUSIC.NEWJEANS.NJ4,
        title: "New Jeans",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/G8GEpK7YDl4",
      },
      {
        id: 5,
        img: IMAGES.MUSIC.NEWJEANS.NJ5,
        title: "ETA",
        artist: "NewJeans",
        album: "NewJeans 'Get Up'",
        url: "https://www.youtube.com/embed/2u_kncwzJ5Y",
      },
      {
        id: 6,
        img: IMAGES.MUSIC.NEWJEANS.NJ6,
        title: "OMG",
        artist: "NewJeans",
        album: "NewJeans'OMG'",
        url: "https://www.youtube.com/embed/sVTy_wmn5SU",
      },
      {
        id: 7,
        img: IMAGES.MUSIC.NEWJEANS.NJ7,
        title: "Ditto",
        artist: "NewJeans",
        album: "Ditto",
        url: "https://www.youtube.com/embed/haCpjUXIhrI",
      },
      {
        id: 8,
        img: IMAGES.MUSIC.NEWJEANS.NJ8,
        title: "Zero",
        artist: "NewJeans",
        album: "Zero",
        url: "https://www.youtube.com/embed/zeOm8-t42aQ",
      },
      {
        id: 9,
        img: IMAGES.MUSIC.NEWJEANS.NJ9,
        title: "Hype Boy",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/T--6HBX2K4g",
      },
      {
        id: 10,
        img: IMAGES.MUSIC.NEWJEANS.NJ10,
        title: "Attention",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/o8RkbHv2_a0",
      },
      {
        id: 11,
        img: IMAGES.MUSIC.NEWJEANS.NJ11,
        title: "Cookie",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/1pUCsbK35JA",
      },
      {
        id: 12,
        img: IMAGES.MUSIC.NEWJEANS.NJ12,
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
