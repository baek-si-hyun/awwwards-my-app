import styled from "styled-components";
import {
  IGetVisitedObject,
  IProjectsData,
  IVisited,
} from "../../../interface/interface";
import {
  Box,
  Img,
  InnerBoxImg,
  InnerBoxText,
  InnerFigure,
  TextBottom,
  TextBottomInner,
  TextTop,
  Visited,
  VisitedInner,
  VisitedInnerBottom,
  VisitedInnerTop,
} from "../../../components/projectCommon";
import { projectsData } from "../../../services/listData";
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
              <Visited>
                <VisitedInner>
                  <VisitedInnerTop>Visited Today</VisitedInnerTop>
                  <VisitedInnerBottom>{visited.kanbanToday}</VisitedInnerBottom>
                </VisitedInner>
                <VisitedInner>
                  <VisitedInnerTop>Total Visited</VisitedInnerTop>
                  <VisitedInnerBottom>{visited.kanbanTotal}</VisitedInnerBottom>
                </VisitedInner>
              </Visited>
            </TextBottom>
          </InnerBoxText>
        </Box>
      ))}
    </>
  );
}

export default ProjectsLinkBox;
