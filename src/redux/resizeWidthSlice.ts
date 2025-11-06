import { createSlice } from "@reduxjs/toolkit";

const getInitialWidth = () => {
  if (typeof window === "undefined") return 1440;
  return window.innerWidth;
};

const resizeWidthSlice = createSlice({
  name: "resizeWidthSlice",
  initialState: { resizeWidth: getInitialWidth() },
  reducers: {
    resizeRedux: (state, action) => {
      state.resizeWidth = action.payload;
    },
  },
});

export default resizeWidthSlice;
export const { resizeRedux } = resizeWidthSlice.actions;
