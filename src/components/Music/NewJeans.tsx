import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { newJeansRedux } from "../../redux/newJeansListSlice";
import { useMySelector } from "../../libs/useMySelector";
import MusicDragDropList from "./MusicDragDropList";

function NewJeans() {
  const newjeansList = useMySelector(
    (state) => state.newJeansListSlice.newjeansList
  );
  const dispatch = useDispatch();

  const handleReorder = useCallback(
    (nextList: typeof newjeansList) => {
      dispatch(newJeansRedux(nextList));
    },
    [dispatch]
  );

  return (
    <MusicDragDropList
      droppableId="newJeansSongs"
      items={newjeansList}
      onReorder={handleReorder}
    />
  );
}

export default React.memo(NewJeans);
