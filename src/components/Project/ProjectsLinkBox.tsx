import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { projectData } from "../../services/listData";

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
const Img = styled.img`
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
  gap: 0.3rem;
  margin-top: 2vh;
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
  img {
    margin: 0 0.3rem;
    object-fit: fill;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    @media (max-width: 480px) {
      & {
        width: 32px;
        height: 32px;
      }
    }
  }
  span {
    font-weight: bold;
    border-bottom: 2px solid #b7b7b7;
  }
`;
const Icon = styled.img``;
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
                  src={data.projects_thumbnail}
                  alt="thumbnail"
                  loading="lazy"
                  decoding="async"
                />
              </ImgBox>
              <HoverBox>
                <ProjectTitle>{data.projects_name}</ProjectTitle>
                <span>{data.projects_date}</span>
                <IconBox>
                  {data.projects_tools.map((iconData, iconIndex) => (
                    <Icon
                      key={iconIndex}
                      height="35"
                      width="35"
                      src={`https://cdn.simpleicons.org/${iconData}/white/false`}
                      alt={iconData}
                      loading="lazy"
                      decoding="async"
                    />
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
          </Container>
        ))}
    </>
  );
}

export default ProjectsLinkBox;
