import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMySelector } from "../../libs/useMySelector";
import { setFavoriteList } from "../../redux/favoriteListSlice";
import MusicDragDropList from "./MusicDragDropList";

function LoLChampions() {
  const favoriteList = useMySelector(
    (state) => state.favoriteListSlice.favoriteList
  );
  const dispatch = useDispatch();

  const handleReorder = useCallback(
    (nextList: typeof favoriteList) => {
      dispatch(setFavoriteList(nextList));
    },
    [dispatch]
  );

  return (
    <MusicDragDropList
      droppableId="favoriteSongs"
      items={favoriteList}
      onReorder={handleReorder}
    />
  );
}

export default React.memo(LoLChampions);
