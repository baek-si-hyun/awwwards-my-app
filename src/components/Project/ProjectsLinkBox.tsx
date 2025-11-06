import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { projectData } from "../../services/listData";
import ImageWithSkeleton from "../common/ImageWithSkeleton";
import ProjectToolIcon from "./ProjectToolIcon";

const common = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  ${common};
  gap: 1.2vw;
`;

const Box = styled(Link)`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;
const ProjectTitle = styled.span`
  font-size: 1.5vw;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled(ImageWithSkeleton)`
  aspect-ratio: 4/3;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
`;
const HoverBox = styled.div`
  ${common};
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15px;
  color: #fff;
  opacity: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));
  will-change: opacity, background;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    & {
      opacity: 1;
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 2vh;
  justify-content: center;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 2rem 0;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    & {
      font-size: 2vw;
    }
  }
  @media (max-width: 650px) {
    & {
      font-size: 3.5vw;
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
  span {
    font-weight: bold;
    border-bottom: 2px solid #b7b7b7;
  }
`;
const MakerLogo = styled(ImageWithSkeleton)`
  margin: 0 0.3rem;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;
function ProjectsLinkBox() {
  return (
    <>
      {projectData &&
        projectData.map((data, index) => (
          <Container key={index}>
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
            >
              <ImgBox>
                <Img
                  sources={data.projects_thumbnail}
                  alt="thumbnail"
                  fullWidth
                  fullHeight
                  objectFit="cover"
                />
              </ImgBox>
              <HoverBox>
                <ProjectTitle>{data.projects_name}</ProjectTitle>
                <span>{data.projects_date}</span>
                <IconBox>
                  {data.projects_tools.map((tool, toolIndex) => (
                    <ProjectToolIcon key={`${tool}-${toolIndex}`} tool={tool} />
                  ))}
                </IconBox>
              </HoverBox>
            </Box>
            <TextBox>
              <By>
                <div>
                  <small>by</small>
                </div>
                <InnerSpan>
                  <MakerLogo
                    sources={data.projects_logo}
                    alt="maker_logo"
                    fullWidth
                    fullHeight
                    objectFit="cover"
                  />
                  <span>{data.projects_by}</span>
                </InnerSpan>
              </By>
            </TextBox>
          </Container>
        ))}
    </>
  );
}

export default ProjectsLinkBox;
