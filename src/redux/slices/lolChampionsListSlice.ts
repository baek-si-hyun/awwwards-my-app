import { createSlice } from "@reduxjs/toolkit";

const lolChampionsListSlice = createSlice({
  name: "lolChampionsListSlice",
  initialState: {
    lolChampionsList: [
      {
        id: 1,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/75a97924-2782-457c-ef1f-8d6feb623300/music",
        title: "Legends Never Die (feat. Against The Current)",
        artist: "펜타킬",
        album: "Legends Never Die • 2017",
        url: "https://www.youtube.com/embed/4Q46xYqUwZQ",
      },
      {
        id: 2,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/39a379dc-31ec-4042-b886-f70950c00200/music",
        title: "GODS",
        artist: "League of Legends 및 NewJeans",
        album: "GODS • 2023",
        url: "https://www.youtube.com/embed/jDlHD2rnPao",
      },
      {
        id: 3,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5ca238b5-adf3-432e-c2a7-e0d1e3957d00/music",
        title: "RISE (feat. The Word Alive",
        artist: "League of Legends",
        album: "RISE • 2018",
        url: "https://www.youtube.com/embed/NuB-1myGido",
      },
      {
        id: 4,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5c7a5725-729c-47a8-e400-e38c124d4700/music",
        title: "STAR WALKIN' (League of Legends Worlds Anthem)",
        artist: "Lil Nas X",
        album: "STAR WALKIN' (League of Legends Worlds Anthem) • 2022",
        url: "https://www.youtube.com/embed/Zrly3QMUhoo",
      },
      {
        id: 5,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/40118d1e-36ac-4243-5c3f-40c80c38b800/music",
        title: "Phoenix",
        artist: "League of Legends, Cailin Russo, Chrissy Costanza",
        album: "Phoenix • 2019",
        url: "https://www.youtube.com/embed/XTKBYfyNMdQ",
      },

      {
        id: 6,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/10671b81-9433-4e3f-ddb8-84eb656ff800/music",
        title: "Warriors",
        artist: "Imagine Dragons",
        album: "Smoke + Mirrors (Asia Tour Edition) • 2014",
        url: "https://www.youtube.com/embed/wllpa2JBEmA",
      },
      {
        id: 7,
        img:
          "https://imagedelivery.net/4aEUbX05h6IovGOQjgkfSw/5c0dfad1-1e14-4f5f-805d-71a193fb7a00/music",
        title: "Worlds Collide (feat. Nicki Taylor)",
        artist: "펜타킬",
        album: "Worlds Collide • 2015",
        url: "https://www.youtube.com/embed/4Twd965VzX4",
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
