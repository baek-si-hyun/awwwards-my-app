import { projectData } from "./listData";

// 상세 화면 내비(SOTD · Font & Color · About)를 보여 줄 프로젝트 경로 = 전시 목록의 코드 전부.
// Nav 와 utils/domApi 가 같이 쓴다. 전시 목록에 넣으면 내비도 자동으로 붙는다.
export const NAV_PROJECT_ROUTES = projectData.map((p) => p.projects_code);

// 상세 내비의 'Visited Site' 링크. 목록에 없는 프로젝트는 링크를 그리지 않는다.
export const PROJECT_SITE_LINKS: Record<string, string> = {
  "project-house": "https://baek-si-hyun.github.io/project-house",
  "carrot-market": "https://carrot-market-sooty.vercel.app/",
  awwwards:
    "https://drive.google.com/file/d/1JCT2iSVsRXvQD6mQYQDc-bEAjf2I85HV/view?usp=sharing",
  kanban: "https://baek-si-hyun.github.io/todo-list/",
  myapp: "https://baek-si-hyun.github.io/my-app/",
  airbnb:
    "https://drive.google.com/file/d/1I445jnO3_rn8myR253FWO54psB6kRiuO/view?usp=sharing",
};
