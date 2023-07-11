import { createSlice } from "@reduxjs/toolkit";

const resizeWidthSlice = createSlice({
  name: "resizeWidthSlice",
  initialState: { resizeWidth: window.innerWidth },
  reducers: {
    resizeRedux: (state, action) => {
      state.resizeWidth = action.payload;
    },
  },
});

export default resizeWidthSlice;
export const { resizeRedux } = resizeWidthSlice.actions;
