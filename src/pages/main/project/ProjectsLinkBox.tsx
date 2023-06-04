import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProjectsData, IVisited } from "../../../interface/interface";
import { fetchProjects, fetchVistited } from "../../../services/listData";
import { useEffect, useState } from "react";

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
  visitedData,
  name,
}: {
  visitedData: IVisited[];
  name: string;
}) {
  const [visited] = visitedData;

  return (
    <Visited>
      <VisitedInner>
        <VisitedInnerTop>Visited Today</VisitedInnerTop>
        <VisitedInnerBottom>
          {name === "Netflix"
            ? visited.visited_netflix_today
            : name === "Kanban"
            ? visited.visited_kanban_today
            : name === "Coin"
            ? visited.visited_coin_today
            : name === "Myapp"
            ? visited.visited_myapp_today
            : name === "Airbnb"
            ? visited.visited_airbnb_today
            : ""}
        </VisitedInnerBottom>
      </VisitedInner>
      <VisitedInner>
        <VisitedInnerTop>Total Visited</VisitedInnerTop>
        <VisitedInnerBottom>
          {name === "Netflix"
            ? visited.visited_netflix_total
            : name === "Kanban"
            ? visited.visited_kanban_total
            : name === "Coin"
            ? visited.visited_coin_total
            : name === "Myapp"
            ? visited.visited_myapp_total
            : name === "Airbnb"
            ? visited.visited_airbnb_total
            : ""}
        </VisitedInnerBottom>
      </VisitedInner>
    </Visited>
  );
}
function ProjectsLinkBox() {
  const [projectList, setProjectList] = useState<IProjectsData[]>([]);
  const [visitedData, setVisitedData] = useState<IVisited[]>([
    {
      visited_airbnb_today: 0,
      visited_airbnb_total: 0,
      visited_coin_today: 0,
      visited_coin_total: 0,
      visited_kanban_today: 0,
      visited_kanban_total: 0,
      visited_myapp_today: 0,
      visited_myapp_total: 0,
      visited_netflix_today: 0,
      visited_netflix_total: 0,
    },
  ]);
  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects();
      setProjectList(() => projects);
    };
    const getVisited = async () => {
      const visited = await fetchVistited();
      setVisitedData(() => visited);
    };
    getProjects();
    getVisited();
  }, []);
  return (
    <>
      {projectList.map((data) => (
        <Box
          to={`/${data.projects_code}`}
          state={{
            date: data.projects_date,
            name: data.projects_name,
            logo: data.projects_logo,
            by: data.projects_by,
            imgs: data.projects_prev_img,
            fonts: data.projects_fonts,
            colors: data.projects_colors,
            ko: data.projects_ko,
            en: data.projects_en,
          }}
          key={data.projects_code}
        >
          <InnerBoxImg>
            <Img
              src={data.projects_thumbnail}
              alt="thumbnail"
              loading="lazy"
              decoding="async"
            />
          </InnerBoxImg>
          <InnerBoxText>
            <TextTop>
              <p>{data.projects_date}</p>
            </TextTop>
            <TextBottom>
              <h4>{data.projects_name}</h4>
              <TextBottomInner>
                <div>
                  <small>by</small>
                </div>
                <InnerFigure>
                  <img
                    src={data.projects_logo}
                    alt="maker_logo"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <span>{data.projects_by}</span>
                  </figcaption>
                </InnerFigure>
              </TextBottomInner>
              <VisitedBox visitedData={visitedData} name={data.projects_code} />
            </TextBottom>
          </InnerBoxText>
        </Box>
      ))}
    </>
  );
}

export default ProjectsLinkBox;
