import { createSlice } from "@reduxjs/toolkit";

const controllerVisibleSlice = createSlice({
  name: "controllerVisibleSlice",
  initialState: { visible: false },
  reducers: {
    controllerVisibleRedux: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export default controllerVisibleSlice;
export const { controllerVisibleRedux } = controllerVisibleSlice.actions;
