import React, { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { IPlayList } from "../../interface/imusic";
import {
  Board,
  Card,
  CardItem,
  Container,
  ImgDiv,
  Title,
} from "./common/boardsCommon";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import MusicSet from "./MusicSet";

const Img = styled(ImageWithSkeleton)`
  width: clamp(40px, 4vw, 128px);
`;

interface MusicDragDropListProps {
  droppableId: string;
  items: IPlayList[];
  onReorder: (nextItems: IPlayList[]) => void;
}

function MusicDragDropList({
  droppableId,
  items,
  onReorder,
}: MusicDragDropListProps) {
  const handleDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) return;
      if (destination.index === source.index) return;

      const nextItems = [...items];
      const [movedItem] = nextItems.splice(source.index, 1);
      nextItems.splice(destination.index, 0, movedItem);
      onReorder(nextItems);
    },
    [items, onReorder]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Container>
        <Droppable droppableId={droppableId}>
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {items.map((song, index) => (
                <Draggable
                  key={song.id}
                  draggableId={String(song.id)}
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
                            sources={song.img}
                            alt="album_photo"
                            fullWidth
                            fullHeight
                            objectFit="cover"
                          />
                          <MusicSet song={song} />
                        </ImgDiv>
                        <Title>
                          <span>{song.title}</span>
                        </Title>
                      </CardItem>
                      <CardItem>
                        <span>{song.artist}</span>
                      </CardItem>
                      <CardItem>
                        <span>{song.album}</span>
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

export default React.memo(MusicDragDropList);
