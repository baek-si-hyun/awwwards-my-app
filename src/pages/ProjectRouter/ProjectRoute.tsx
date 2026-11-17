import { Suspense, lazy } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { projectData } from "../../constants/listData";

const ProjectMain = lazy(() => import("./ProjectMain"));

// 전시 목록에 없는 경로(지운 옛 화면 주소 등)는 홈으로 돌린다.
// 상세 화면은 목록 클릭 때 넘기는 location.state 를 읽으므로,
// 주소로 바로 들어오거나 새로고침해 state 가 없으면 같은 모양으로 채워 준다.
function ProjectRoute() {
  const { projectId = "" } = useParams();
  const location = useLocation();
  const project = projectData.find(
    (p) => p.projects_code === projectId.toLowerCase()
  );
  if (!project) {
    return <Navigate to="/" replace />;
  }
  if (!location.state) {
    return (
      <Navigate
        to={location.pathname}
        replace
        state={{
          date: project.projects_date,
          name: project.projects_name,
          logo: project.projects_logo,
          by: project.projects_by,
          imgs: project.projects_prev_img,
          fonts: project.projects_fonts,
          colors: project.projects_colors,
          ko: project.projects_ko,
          en: project.projects_en,
        }}
      />
    );
  }
  return (
    <Suspense fallback={<></>}>
      <ProjectMain />
    </Suspense>
  );
}

export default ProjectRoute;
