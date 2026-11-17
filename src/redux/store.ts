import { configureStore } from "@reduxjs/toolkit";
import resizeWidthSlice from "./resizeWidthSlice";
import newJeansListSlice from "./newJeansListSlice";
import playingVideoInfoSlice from "./playingVideoInfoSlice";
import controlPlayListSlice from "./controlPlayListSlice";
import controllerVisibleSlice from "./controllerVisibleSlice";
import favoriteListSlice from "./favoriteListSlice";

const store = configureStore({
  reducer: {
    resizeWidthSlice: resizeWidthSlice.reducer,
    newJeansListSlice: newJeansListSlice.reducer,
    favoriteListSlice: favoriteListSlice.reducer,
    playingVideoInfoSlice: playingVideoInfoSlice.reducer,
    controlPlayListSlice: controlPlayListSlice.reducer,
    controllerVisibleSlice: controllerVisibleSlice.reducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
