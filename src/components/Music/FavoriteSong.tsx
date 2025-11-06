import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMySelector } from "../../libs/useMySelector";
import { lolChampionsRedux } from "../../redux/favoriteListSlice";
import MusicDragDropList from "./MusicDragDropList";

function LoLChampions() {
  const lolChampionsList = useMySelector(
    (state) => state.lolChampionsListSlice.lolChampionsList
  );
  const dispatch = useDispatch();

  const handleReorder = useCallback(
    (nextList: typeof lolChampionsList) => {
      dispatch(lolChampionsRedux(nextList));
    },
    [dispatch]
  );

  return (
    <MusicDragDropList
      droppableId="favoriteSongs"
      items={lolChampionsList}
      onReorder={handleReorder}
    />
  );
}

export default React.memo(LoLChampions);
