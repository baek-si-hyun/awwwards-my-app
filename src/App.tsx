import { Suspense, lazy, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Main from "./pages/main/Main";
import ScrollToTop from "./ScrollToTop";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useMySelector } from "./libs/useMySelector";
import MusicPlayer from "./components/Music/MusicPlayer";
import MusicPlayBox from "./components/Music/MusicPlayBox";
import Footer from "./components/Footer/Footer";
import { projectData } from "./services/listData";

const Faqs = lazy(() => import("./pages/faqs/Faqs"));
const Myapp = lazy(() => import("./pages/ProjectRouter/ProjectMain"));

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
      <Myapp />
    </Suspense>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main`
  flex: 1;
  min-height: 0;
`;

const FooterWrapper = styled.div<{ $isVisible: boolean }>`
  visibility: ${(p) => (p.$isVisible ? "visible" : "hidden")};
  opacity: ${(p) => (p.$isVisible ? 1 : 0)};
  height: ${(p) => (p.$isVisible ? "auto" : "0")};
  overflow: ${(p) => (p.$isVisible ? "visible" : "hidden")};
  transition: ${(p) => (p.$isVisible ? "opacity 0.3s ease-in-out" : "none")};
  width: 100%;
`;

function App() {
  const getResizeWidth = useMySelector(
    (state) => state.resizeWidthSlice.resizeWidth
  );
  const location = useLocation();
  const [isContentReady, setIsContentReady] = useState(false);
  const mainContentRef = useRef<HTMLElement>(null);

  // 경로가 바뀌면 푸터를 숨겼다가, 본문이 실제 높이(300px 초과)를 갖는 순간 보여 준다.
  // lazy 화면은 Suspense 빈 fallback 동안 높이가 0 이라 푸터가 위로 튀지 않는다. 최대 4초 뒤엔 무조건 보인다.
  useEffect(() => {
    setIsContentReady(false);
    const main = mainContentRef.current;
    if (!main) return;
    const observer = new ResizeObserver(() => {
      if (main.offsetHeight > 300) {
        setIsContentReady(true);
        observer.disconnect();
      }
    });
    observer.observe(main);
    const maxTimer = setTimeout(() => setIsContentReady(true), 4000);
    return () => {
      observer.disconnect();
      clearTimeout(maxTimer);
    };
  }, [location.pathname]);

  return (
    <AppContainer>
      <MusicPlayer />
      <ScrollToTop />
      {getResizeWidth >= 1000 ? <MusicPlayBox /> : null}
      <MainContent ref={mainContentRef}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":projectId" element={<ProjectRoute />} />
          <Route
            path="faqs"
            element={
              <Suspense fallback={<></>}>
                <Faqs />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainContent>
      <FooterWrapper $isVisible={isContentReady}>
        <Footer />
      </FooterWrapper>
    </AppContainer>
  );
}

export default App;
