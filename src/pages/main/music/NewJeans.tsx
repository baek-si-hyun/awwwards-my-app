import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import React, { useCallback } from "react";
import MusicSet from "./MusicSet";
import { useDispatch } from "react-redux";
import { INewjeansListData, IPlayList } from "../../../interface/imusic";
import { newJeansRedux } from "../../../redux/slices/newJeansListSlice";
import {
  Board,
  Card,
  CardItem,
  Container,
  ImgDiv,
  Title,
} from "./common/boardsCommon";
import { useMySelector } from "../../../libs/useMySelector";

const Img = styled.img`
  width: clamp(40px, 4vw, 128px);
`;

function NewJeans() {
  const newjeansList = useMySelector(
    ({ newJeansListSlice }: { newJeansListSlice: INewjeansListData }) =>
      newJeansListSlice.newjeansList
  );
  const dispatch = useDispatch();
  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) return;
      if (destination) {
        const copyList = [...newjeansList];
        const taskObj = copyList[source.index];
        copyList.splice(source.index, 1);
        copyList.splice(destination?.index, 0, taskObj);
        dispatch(newJeansRedux(copyList));
      }
    },
    [dispatch, newjeansList]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {newjeansList.map((newjeans : IPlayList, index : number) => (
                <Draggable
                  key={newjeans.title}
                  draggableId={newjeans.title}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Card
                      isDragging={snapshot.isDragging}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <CardItem>
                        <ImgDiv>
                          <Img
                            src={newjeans.img}
                            alt="album_photo"
                            loading="lazy"
                            decoding="async"
                          />
                          <MusicSet videoUrl={newjeans.url} />
                        </ImgDiv>
                        <Title>
                          <span>{newjeans.title}</span>
                        </Title>
                      </CardItem>
                      <CardItem>
                        <span>{newjeans.artist}</span>
                      </CardItem>
                      <CardItem>
                        <span>{newjeans.album}</span>
                      </CardItem>
                    </Card>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </Board>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
}

export default React.memo(NewJeans);
