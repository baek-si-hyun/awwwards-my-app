import { createSlice } from "@reduxjs/toolkit";
import { newJeansSongs } from "../constants/musicData";

const newJeansListSlice = createSlice({
  name: "newJeansListSlice",
  initialState: {
    newjeansList: newJeansSongs,
  },
  reducers: {
    newJeansRedux: (state, action) => {
      state.newjeansList = action.payload;
    },
  },
});

export default newJeansListSlice;
export const { newJeansRedux } = newJeansListSlice.actions;
