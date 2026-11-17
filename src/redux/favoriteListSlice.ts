import { createSlice } from "@reduxjs/toolkit";
import { favoriteSongs } from "../constants/musicData";

const favoriteListSlice = createSlice({
  name: "favoriteListSlice",
  initialState: {
    favoriteList: favoriteSongs,
  },
  reducers: {
    setFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
  },
});

export default favoriteListSlice;
export const { setFavoriteList } = favoriteListSlice.actions;
