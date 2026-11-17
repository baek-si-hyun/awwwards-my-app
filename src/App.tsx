import { Suspense, lazy, useRef } from "react";
import styled from "styled-components";
import Main from "./pages/main/Main";
import ScrollToTop from "./ScrollToTop";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { useMySelector } from "./hooks/useMySelector";
import { useContentReady } from "./hooks/useContentReady";
import MusicPlayBox from "./components/Music/MusicPlayBox";
import Footer from "./components/Footer/Footer";
import ProjectRoute from "./pages/ProjectRouter/ProjectRoute";

const Faqs = lazy(() => import("./pages/faqs/Faqs"));
// 화면이 없는 숨은 재생기(react-player)라 첫 화면 번들에서 뺀다.
const MusicPlayer = lazy(() => import("./components/Music/MusicPlayer"));

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
  const mainContentRef = useRef<HTMLElement>(null);
  const isContentReady = useContentReady(mainContentRef, location.pathname);

  return (
    <AppContainer>
      <Suspense fallback={null}>
        <MusicPlayer />
      </Suspense>
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
