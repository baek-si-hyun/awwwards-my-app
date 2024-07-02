import { configureStore } from "@reduxjs/toolkit";
import resizeWidthSlice from "./resizeWidthSlice";
import newJeansListSlice from "./newJeansListSlice";
import featuredListSlice from "./featuredListSlice";
import playingVideoInfoSlice from "./playingVideoInfoSlice";
import controlPlayListSlice from "./controlPlayListSlice";
import controllerVisibleSlice from "./controllerVisibleSlice";
import lolChampionsListSlice from "./favoriteListSlice";

const store = configureStore({
  reducer: {
    resizeWidthSlice: resizeWidthSlice.reducer,
    newJeansListSlice: newJeansListSlice.reducer,
    featuredListSlice: featuredListSlice.reducer,
    lolChampionsListSlice: lolChampionsListSlice.reducer,
    playingVideoInfoSlice: playingVideoInfoSlice.reducer,
    controlPlayListSlice: controlPlayListSlice.reducer,
    controllerVisibleSlice: controllerVisibleSlice.reducer,
  },
});
export default store;
