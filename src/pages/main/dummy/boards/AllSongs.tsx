import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { all } from "../../../../atom";
import MusicSet, { ButtonDiv, ControllBtn } from "./MusicSet";

const Wrapper = styled.div`
  width: 90%;
`;
const Board = styled.div`
  padding: 0px 40px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 480px) {
    & {
      padding: 0px 20px;
    }
  }
`;

export const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 2vw;
  background-color: ${(props) =>
    props.isDragging ? "#1d1d1d" : "transparent"};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  font-size: 1vw;
  border-bottom: 1px solid #1d1d1d;
  border-radius: ${(props) => (props.isDragging ? "10px" : "none")};
  transition: background-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  will-change: background-color, border-radius;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: #1d1d1d;
    ${ButtonDiv} {
      opacity: 0.9;
    }
    ${ControllBtn} {
      opacity: 1;
    }
  }
  @media (max-width: 480px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 429px) {
    & {
      font-size: 0.6rem;
    }
  }
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;
  :nth-child(2) {
    padding-left: 20%;
  }
  :nth-child(3) {
    padding-left: 20%;
  }
  @media (max-width: 768px) {
    & {
      text-overflow: ellipsis;
    }
  }
  @media (max-width: 480px) {
    & {
      :last-child {
        display: none;
      }
    }
  }
`;

const ImgDiv = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: clamp(20px, 2.5vw, 80px);
`;
const Tittle = styled.div``;

function AllSongs() {
  const [list, setList] = useRecoilState(all);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    if (destination) {
      setList((allList) => {
        const copyList = [...allList];
        const taskObj = copyList[source.index];
        copyList.splice(source.index, 1);
        copyList.splice(destination?.index, 0, taskObj);
        return copyList;
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {list.map((all, index) => (
                <Draggable
                  key={all.tittle}
                  draggableId={all.tittle}
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
                        <Tittle>
                          <span>{all.tittle}</span>
                        </Tittle>
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
      </Wrapper>
    </DragDropContext>
  );
}

export default React.memo(AllSongs);
