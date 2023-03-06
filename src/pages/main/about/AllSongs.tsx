import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { all } from "../../../atom";

const Wrapper = styled.div`
  width: 90%;
`;
const Board = styled.div`
  padding: 0px 40px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 2vw;
  background-color: ${(props) =>
    props.isDragging ? "#1d1d1d" : "transparent"};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
  font-size: 1vw;
  border-bottom: 1px solid #1d1d1d;
  border-radius: ${(props) => (props.isDragging ? "10px" : "none")};
  transition: background-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  :last-child {
    border-bottom: none;
  }
  :hover {
    background-color: #1d1d1d;
  }
`;

const ImgTittleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;
`;

const ImgDiv = styled.div``;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: 40px;
`;

const Tittle = styled.div``;

const Artist = styled.div`
  padding-left: 20%;
  white-space: nowrap;
`;

const Album = styled.div`
  padding-left: 20%;
  span {
    white-space: nowrap;
  }
`;

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
                      <ImgTittleBox>
                        <ImgDiv>
                          <Img src={all.img} />
                        </ImgDiv>
                        <Tittle>
                          <span>{all.tittle}</span>
                        </Tittle>
                      </ImgTittleBox>

                      <Artist>
                        <span>{all.artist}</span>
                      </Artist>
                      <Album>
                        <span>{all.album}</span>
                      </Album>
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
