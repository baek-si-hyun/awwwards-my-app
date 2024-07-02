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
import { IFeaturedListData, IPlayList } from "../../interface/imusic";
import { featuredRedux } from "../../redux/featuredListSlice";
import {
  Board,
  Card,
  CardItem,
  Container,
  ImgDiv,
  Title,
} from "../../pages/main/music/common/boardsCommon";
import { useMySelector } from "../../libs/useMySelector";

const FeaturedContainer = styled(Container)`
  @media (max-width: 1050px) {
    & {
      padding-bottom: 12rem;
    }
  }
`;
const Img = styled.img`
  width: clamp(40px, 2.5vw, 80px);
`;

function FeaturedSong() {
  const featuredList = useMySelector(
    ({ featuredListSlice }: { featuredListSlice: IFeaturedListData }) =>
      featuredListSlice.featuredList
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
      <FeaturedContainer>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {featuredList.map((featured: IPlayList, index: number) => (
                <Draggable
                  key={featured.title}
                  draggableId={featured.title}
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
                            src={featured.img}
                            alt="album_photo"
                            loading="lazy"
                            decoding="async"
                          />
                          <MusicSet videoUrl={featured.url} />
                        </ImgDiv>
                        <Title>
                          <span>{featured.title}</span>
                        </Title>
                      </CardItem>
                      <CardItem>
                        <span>{featured.artist}</span>
                      </CardItem>
                      <CardItem>
                        <span>{featured.album}</span>
                      </CardItem>
                    </Card>
                  )}
                </Draggable>
              ))}
              {magic.placeholder}
            </Board>
          )}
        </Droppable>
      </FeaturedContainer>
    </DragDropContext>
  );
}

export default React.memo(FeaturedSong);
