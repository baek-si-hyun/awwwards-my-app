import { createSlice } from "@reduxjs/toolkit";

const playingVideoInfoSlice = createSlice({
  name: "playingVideoInfoSlice",
  initialState: {
    videoInfo: {
      playing: false,
      videoUrl: "",
      img: "",
      title: "",
      artist: "",
    },
  },
  reducers: {
    videoInfoRedux: (state, action) => {
      state.videoInfo = action.payload;
    },
  },
});

export default playingVideoInfoSlice;
export const { videoInfoRedux } = playingVideoInfoSlice.actions;
