import { Link } from "react-router-dom";
import styled from "styled-components";
import { IProjectsData, IVisited } from "../../../interface/iproject";
import { fetchProjects, fetchVistited } from "../../../services/listData";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import VisitedBox from "./VisitedBox";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box = styled(Link)`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  aspect-ratio: 4/3;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;
const HoverBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  border-radius: 15px;
  color: #fff;
  opacity: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));
  will-change: opacity, background;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 1;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 0.3rem;
  @media (max-width: 440px) {
    & {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  font-size: 1.1vw;
  span {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    & {
      font-size: 2.5vw;
    }
  }
`;
const By = styled.div`
  display: flex;
  align-items: center;
  small {
    font-weight: 100;
  }
`;

const InnerSpan = styled.span`
  display: flex;
  align-items: center;
  img {
    margin: 0 0.3rem;
    object-fit: fill;
    width: 1.8vw;
    height: 1.8vw;
    border-radius: 100%;
    @media (max-width: 480px) {
      & {
        width: 18px;
        height: 18px;
      }
    }
  }
  span {
    font-weight: 600;
    border-bottom: 2px solid #b7b7b7;
  }
`;
const Icon = styled.img`
  fill: #fff;
`;
function ProjectsLinkBox() {
  const { data: projectData } = useQuery<IProjectsData[]>(
    ["project"],
    () => fetchProjects(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const { data: visitedData, refetch } = useQuery<IVisited[]>(
    ["visited"],
    () => fetchVistited(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {projectData &&
        visitedData &&
        projectData.map((data) => (
          <BoxContainer>
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
              <ImgBox>
                <Img
                  src={data.projects_thumbnail}
                  alt="thumbnail"
                  loading="lazy"
                  decoding="async"
                />
              </ImgBox>
              <HoverBox>
                <span>{data.projects_name}</span>
                <span>{data.projects_date}</span>
                <IconBox>
                  {data.projects_tools.map((data) => (
                    <Icon
                      height="35"
                      width="35"
                      src={`https://cdn.simpleicons.org/${data}/white/false`}
                    />
                  ))}
                </IconBox>

                <VisitedBox
                  visitedData={visitedData}
                  name={data.projects_code}
                />
              </HoverBox>
            </Box>
            <TextBox>
              <By>
                <div>
                  <small>by</small>
                </div>
                <InnerSpan>
                  <img
                    src={data.projects_logo}
                    alt="maker_logo"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{data.projects_by}</span>
                </InnerSpan>
              </By>
            </TextBox>
          </BoxContainer>
        ))}
    </>
  );
}

export default ProjectsLinkBox;
