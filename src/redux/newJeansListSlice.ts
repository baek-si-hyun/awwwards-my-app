import { createSlice } from "@reduxjs/toolkit";

const newJeansListSlice = createSlice({
  name: "newJeansListSlice",
  initialState: {
    newjeansList: [
      {
        id: 1,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f68d43ed-2f53-4e07-3028-83d9894a7800/music",
        title: "Bubble Gum",
        artist: "NewJeans",
        album: "How Sweet • 2024",
        url: "https://www.youtube.com/embed/kavLNr-PyoY",
      },
      {
        id: 2,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/f68d43ed-2f53-4e07-3028-83d9894a7800/music",
        title: "How Sweet",
        artist: "NewJeans",
        album: "How Sweet • 2024",
        url: "https://www.youtube.com/embed/fTt3dbNBH20",
      },
      {
        id: 3,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0522d583-e90f-4f8d-0dfb-0b9a6a29ed00/music",
        title: "Super Shy",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/cQY5brXxEig",
      },
      {
        id: 4,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0522d583-e90f-4f8d-0dfb-0b9a6a29ed00/music",
        title: "New Jeans",
        artist: "NewJeans",
        album: "NewJeans 'Super Shy'",
        url: "https://www.youtube.com/embed/G8GEpK7YDl4",
      },
      {
        id: 5,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/0522d583-e90f-4f8d-0dfb-0b9a6a29ed00/music",
        title: "ETA",
        artist: "NewJeans",
        album: "NewJeans 'Get Up'",
        url: "https://www.youtube.com/embed/2u_kncwzJ5Y",
      },
      {
        id: 6,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/3af63094-5a97-44a2-d4fd-be5405827d00/music",
        title: "OMG",
        artist: "NewJeans",
        album: "NewJeans'OMG'",
        url: "https://www.youtube.com/embed/sVTy_wmn5SU",
      },
      {
        id: 7,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/e6a08d5b-242d-41b8-5cb1-ad984fea4300/music",
        title: "Ditto",
        artist: "NewJeans",
        album: "Ditto",
        url: "https://www.youtube.com/embed/haCpjUXIhrI",
      },
      {
        id: 8,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/d6f61565-f907-495e-4a83-973297c55500/music",
        title: "Zero",
        artist: "NewJeans",
        album: "Zero",
        url: "https://www.youtube.com/embed/zeOm8-t42aQ",
      },
      {
        id: 9,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/95900051-b0c7-44c2-f54c-6b32ddd2dc00/music",
        title: "Hype Boy",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/T--6HBX2K4g",
      },
      {
        id: 10,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/95900051-b0c7-44c2-f54c-6b32ddd2dc00/music",
        title: "Attention",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/o8RkbHv2_a0",
      },
      {
        id: 11,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/95900051-b0c7-44c2-f54c-6b32ddd2dc00/music",
        title: "Cookie",
        artist: "NewJeans",
        album: "NewJeans 1st EP 'New Jeans'",
        url: "https://www.youtube.com/embed/1pUCsbK35JA",
      },
      {
        id: 12,
        img: "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/95900051-b0c7-44c2-f54c-6b32ddd2dc00/music",
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
