import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import MusicSet from "./MusicSet";
import { useSelector } from "react-redux";
import { IFeaturedListData } from "../../../../interface/imusic";
import { useDispatch } from "react-redux";
import { featuredRedux } from "../../../../redux/slices/featuredListSlice";
import {
  Board,
  Container,
  Card,
  CardItem,
  ImgDiv,
  Title,
} from "./common/boardsCommon";

const Img = styled.img`
  width: clamp(40px, 2.5vw, 80px);
`;

function FeaturedSong() {
  const featuredList = useSelector(
    ({ featuredListSlice }: { featuredListSlice: IFeaturedListData }) => {
      return featuredListSlice.featuredList;
    }
  );
  const dispatch = useDispatch();
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    if (destination) {
      const copyList = [...featuredList];
      const taskObj = copyList[source.index];
      copyList.splice(source.index, 1);
      copyList.splice(destination?.index, 0, taskObj);
      dispatch(featuredRedux(copyList));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {featuredList.map((all, index) => (
                <Draggable
                  key={all.title}
                  draggableId={all.title}
                  index={index}
                >
                  {(magic, snapshot) => (
                    <Card
                      isDragging={snapshot.isDragging}
                      ref={magic.innerRef}
                      {...magic.dragHandleProps}
                      {...magic.draggableProps}
                    >
                      <CardItem>
                        <ImgDiv>
                          <Img
                            src={all.img}
                            alt="album_photo"
                            loading="lazy"
                            decoding="async"
                          />
                          <MusicSet videoUrl={all.url} />
                        </ImgDiv>
                        <Title>
                          <span>{all.title}</span>
                        </Title>
                      </CardItem>
                      <CardItem>
                        <span>{all.artist}</span>
                      </CardItem>
                      <CardItem>
                        <span>{all.album}</span>
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

export default React.memo(FeaturedSong);
