import { configureStore } from "@reduxjs/toolkit";
import resizeWidthSlice from "./resizeWidthSlice";
import newJeansListSlice from "./newJeansListSlice";
import playingVideoInfoSlice from "./playingVideoInfoSlice";
import controlPlayListSlice from "./controlPlayListSlice";
import controllerVisibleSlice from "./controllerVisibleSlice";
import lolChampionsListSlice from "./favoriteListSlice";
import orderbookSlice from "./orderbookSlice";

const store = configureStore({
  reducer: {
    resizeWidthSlice: resizeWidthSlice.reducer,
    newJeansListSlice: newJeansListSlice.reducer,
    lolChampionsListSlice: lolChampionsListSlice.reducer,
    playingVideoInfoSlice: playingVideoInfoSlice.reducer,
    controlPlayListSlice: controlPlayListSlice.reducer,
    controllerVisibleSlice: controllerVisibleSlice.reducer,
    orderbookSlice: orderbookSlice.reducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
