import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import MusicSet from "./MusicSet";
import { useDispatch } from "react-redux";
import { ILoLChampionsListData, IPlayList } from "../../../interface/imusic";
import {
  Board,
  Card,
  CardItem,
  Container,
  ImgDiv,
  Title,
} from "./common/boardsCommon";
import { useMySelector } from "../../../libs/useMySelector";
import { lolChampionsRedux } from "../../../redux/slices/favoriteListSlice";

const Img = styled.img`
  width: clamp(40px, 4vw, 128px);
`;

function LoLChampions() {
  const lolChampionsList = useMySelector(
    ({
      lolChampionsListSlice,
    }: {
      lolChampionsListSlice: ILoLChampionsListData;
    }) => lolChampionsListSlice.lolChampionsList
  );
  const dispatch = useDispatch();
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    if (destination) {
      const copyList = [...lolChampionsList];
      const taskObj = copyList[source.index];
      copyList.splice(source.index, 1);
      copyList.splice(destination?.index, 0, taskObj);
      dispatch(lolChampionsRedux(copyList));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {lolChampionsList.map((lol: IPlayList, index: number) => (
                <Draggable
                  key={lol.title}
                  draggableId={lol.title}
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
                            src={lol.img}
                            alt="album_photo"
                            loading="lazy"
                            decoding="async"
                          />
                          <MusicSet videoUrl={lol.url} />
                        </ImgDiv>
                        <Title>
                          <span>{lol.title}</span>
                        </Title>
                      </CardItem>
                      <CardItem>
                        <span>{lol.artist}</span>
                      </CardItem>
                      <CardItem>
                        <span>{lol.album}</span>
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

export default React.memo(LoLChampions);
