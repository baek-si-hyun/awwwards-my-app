import { configureStore } from "@reduxjs/toolkit";
import resizeWidthSlice from "./slices/resizeWidthSlice";

const store = configureStore({
  reducer: {
    resizeWidthSlice: resizeWidthSlice.reducer,
  },
});
export default store;
