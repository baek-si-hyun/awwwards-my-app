import { createSlice } from "@reduxjs/toolkit";

const controlPlayListSlice = createSlice({
  name: "controlPlayListSlice",
  initialState: { index: 0 },
  reducers: {
    controlRedux: (state, action) => {
      state.index = action.payload;
    },
  },
});

export default controlPlayListSlice;
export const { controlRedux } = controlPlayListSlice.actions;
