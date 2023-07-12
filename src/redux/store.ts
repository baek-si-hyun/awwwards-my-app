import { configureStore } from "@reduxjs/toolkit";
import resizeWidthSlice from "./slices/resizeWidthSlice";
import newJeansListSlice from "./slices/newJeansListSlice";
import featuredListSlice from "./slices/featuredListSlice";
import playingVideoInfoSlice from "./slices/playingVideoInfoSlice";
import controlPlayListSlice from "./slices/controlPlayListSlice";
import controllerVisibleSlice from "./slices/controllerVisibleSlice";

const store = configureStore({
  reducer: {
    resizeWidthSlice: resizeWidthSlice.reducer,
    newJeansListSlice: newJeansListSlice.reducer,
    featuredListSlice: featuredListSlice.reducer,
    playingVideoInfoSlice: playingVideoInfoSlice.reducer,
    controlPlayListSlice: controlPlayListSlice.reducer,
    controllerVisibleSlice: controllerVisibleSlice.reducer,
  },
});
export default store;
