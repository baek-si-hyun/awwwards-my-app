import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import { useRecoilState } from "recoil";
import { newJeans } from "../../../../atom";

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
  padding: 10px 2.5vw;
  background-color: ${(props) =>
    props.isDragging ? "#1d1d1d" : "transparent"};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
  font-size: 1.1vw;
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

const ImgDiv = styled.div``;

const Img = styled.img`
  width: clamp(25px, 4vw, 128px);
  object-fit: cover;
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7%;
  line-height: 1.2;
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
`;
const Tittle = styled.div``;
function NewJeans() {
  const [list, setList] = useRecoilState(newJeans);
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
              {list.map((newjeans, index) => (
                <Draggable
                  key={newjeans.tittle}
                  draggableId={newjeans.tittle}
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
                          <Img src={newjeans.img} />
                        </ImgDiv>
                        <Tittle>
                          <span>{newjeans.tittle}</span>
                        </Tittle>
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
      </Wrapper>
    </DragDropContext>
  );
}

export default React.memo(NewJeans);
