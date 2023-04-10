import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IGetVisitedObject,
  IProjectsData,
  IVisited,
} from "../../../interface/interface";

import { projectsData } from "../../../services/listData";

const Box = styled(Link)`
  display: flex;
  gap: 2vw;
  padding: 2vw 0px;
  border-bottom: 1px black;
  transition: background-color 0.2s ease-in-out;
  background-image: linear-gradient(
    to right,
    rgb(34, 34, 34, 1) 0 10%,
    rgba(255, 255, 255, 0) 10%
  );
  background-position: bottom;
  background-size: 8px 1px;
  background-repeat: repeat-x;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
  }
`;

const InnerBoxImg = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
`;
const Img = styled.img`
  aspect-ratio: 4/3;
  width: 90%;
  object-fit: cover;
  border-radius: 10px;
`;
const InnerBoxText = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextTop = styled.div``;
const TextBottom = styled.div`
  line-height: 1.7;
  font-size: 1.3vw;
  @media (max-width: 768px) {
    & {
      font-size: 2.5vw;
    }
  }
`;
const TextBottomInner = styled.div`
  display: flex;
  align-items: center;
`;

const InnerFigure = styled.figure`
  display: flex;
  align-items: center;

  img {
    margin: 0 0.3rem;
    object-fit: fill;
    width: 2vw;
    height: 2vw;
    border-radius: 100%;
    @media (max-width: 480px) {
      & {
        width: 20px;
        height: 20px;
      }
    }
  }
  figcaption {
    span {
      font-weight: 600;
      border-bottom: 2px solid #b7b7b7;
    }
  }
`;

const Visited = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 50%;
  display: flex;
  margin-top: 1vw;
  @media (max-width: 1024px) {
    & {
      width: 90%;
    }
  }
`;

const VisitedInner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  flex: 1;
  :first-child {
    border-right: 1px solid black;
  }
`;

const VisitedInnerTop = styled.div`
  font-size: 0.4vw;
  padding: 0.2vw 0;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
const VisitedInnerBottom = styled.div`
  border-top: 1px solid black;
  font-size: 0.4vw;
  padding: 0.3vw 0;
  font-weight: 900;
  @media (max-width: 429px) {
    & {
      font-size: 0.5rem;
    }
  }
`;
function VisitedBox({
  visited,
  data,
}: {
  visited: IVisited;
  data: IProjectsData;
}) {
  return (
    <Visited>
      <VisitedInner>
        <VisitedInnerTop>Visited Today</VisitedInnerTop>
        <VisitedInnerBottom>
          {data.id === "Netflix"
            ? visited.netflixToday
            : data.id === "Kanban"
            ? visited.kanbanToday
            : data.id === "Coin"
            ? visited.coinToday
            : data.id === "Myapp"
            ? visited.myappToday
            : data.id === "Airbnb"
            ? visited.airbnbToday
            : ""}
        </VisitedInnerBottom>
      </VisitedInner>
      <VisitedInner>
        <VisitedInnerTop>Total Visited</VisitedInnerTop>
        <VisitedInnerBottom>
          {data.id === "Netflix"
            ? visited.netflixTotal
            : data.id === "Kanban"
            ? visited.kanbanTotal
            : data.id === "Coin"
            ? visited.coinTotal
            : data.id === "Myapp"
            ? visited.myappTotal
            : data.id === "Airbnb"
            ? visited.airbnbTotal
            : ""}
        </VisitedInnerBottom>
      </VisitedInner>
    </Visited>
  );
}
function ProjectsLinkBox({ visited }: { visited: IVisited }) {
  return (
    <>
      {projectsData.map((data) => (
        <Box
          to={`/${data.id}`}
          state={{
            date: data.date,
            name: data.name,
            logo: data.logo,
            by: data.by,
            img: data.img,
            fonts: data.fonts,
            colors: data.colors,
            ko: data.ko,
            en: data.en,
          }}
          key={data.id}
        >
          <InnerBoxImg>
            <Img src={data.thumbnail} />
          </InnerBoxImg>
          <InnerBoxText>
            <TextTop>
              <p>{data.date}</p>
            </TextTop>
            <TextBottom>
              <h4>{data.name}</h4>
              <TextBottomInner>
                <div>
                  <small>by</small>
                </div>
                <InnerFigure>
                  <img src={data.logo} />
                  <figcaption>
                    <span>{data.by}</span>
                  </figcaption>
                </InnerFigure>
              </TextBottomInner>
              <VisitedBox visited={visited} data={data} />
            </TextBottom>
          </InnerBoxText>
        </Box>
      ))}
    </>
  );
}

export default ProjectsLinkBox;
