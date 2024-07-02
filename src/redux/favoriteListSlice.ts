import { createSlice } from "@reduxjs/toolkit";

const lolChampionsListSlice = createSlice({
  name: "lolChampionsListSlice",
  initialState: {
    lolChampionsList: [
      {
        id: 1,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/a10aa166-a87d-4989-4d32-15c575d96800/music",
        title: "LA Girls",
        artist: "Charlie Puth",
        album: "Voicenotes • 2018",
        url: "https://www.youtube.com/embed/iW3Than5jrs",
      },
      {
        id: 2,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/4b6bb090-01b3-4c0b-c692-8d0ba987c100/music",
        title: "In Your Eyes (Remix) (feat. Doja Cat)",
        artist: "The Weeknd",
        album: "In Your Eyes (Remix) • 2020",
        url: "https://www.youtube.com/embed/jDlHD2rnPao",
      },
      {
        id: 3,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/1508f12f-cdbf-476b-b18a-65e3a4457d00/music",
        title: "yes, and?",
        artist: "Ariana Grande",
        album: "yes, and? • 2024",
        url: "https://www.youtube.com/embed/NuB-1myGido",
      },
      {
        id: 4,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/3b375202-8d2f-4466-cabf-f2c48065b100/music",
        title: "You",
        artist: "Regard, Troye Sivan 및 Tate McRae",
        album: "You • 2021",
        url: "https://www.youtube.com/embed/Zrly3QMUhoo",
      },
      {
        id: 5,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/9dd14e32-6217-48c8-4111-77e65bd72e00/music",
        title: "Agora Hills",
        artist: "Doja Cat",
        album: "Scarlet • 2023",
        url: "https://www.youtube.com/embed/XTKBYfyNMdQ",
      },

      {
        id: 6,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/01c0773f-9dd2-455f-4875-42c00f973f00/music",
        title: "bloodline",
        artist: "Ariana Grande",
        album: "thank u, next • 2019",
        url: "https://www.youtube.com/embed/wllpa2JBEmA",
      },
      {
        id: 7,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/ca8a9b12-b8cb-44b9-56c5-a8e347f45200/music",
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
