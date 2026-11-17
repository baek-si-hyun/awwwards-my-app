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

const Contact = lazy(() => import("./pages/Contact/Contact"));
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

  useEffect(() => {
    setIsContentReady(false);
    
    let isReady = false;
    let checkCount = 0;
    const maxChecks = 300;
    
    const showFooter = () => {
      if (!isReady) {
        isReady = true;
        setIsContentReady(true);
      }
    };

    const checkHeaderRendered = () => {
      const header = document.getElementById('home');
      return header !== null && header.offsetHeight > 0;
    };

    const checkContentReadyImproved = () => {
      if (!mainContentRef.current) return false;
      
      const headerRendered = checkHeaderRendered();
      
      const height = mainContentRef.current.offsetHeight;
      const scrollHeight = mainContentRef.current.scrollHeight;
      const hasChildren = mainContentRef.current.children.length > 0;
      
      return headerRendered && (height > 300 || scrollHeight > 300 || hasChildren);
    };

    const handleLoad = () => {
      let frameCount = 0;
      const checkFrames = () => {
        frameCount++;
        if (checkContentReadyImproved() || frameCount > 100) {
          showFooter();
        } else {
          requestAnimationFrame(checkFrames);
        }
      };
      setTimeout(() => {
        requestAnimationFrame(checkFrames);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    const initialDelay = setTimeout(() => {
      if (checkContentReadyImproved()) {
        showFooter();
      }
    }, 800);

    const checkInterval = setInterval(() => {
      checkCount++;
      if (checkContentReadyImproved()) {
        showFooter();
        clearInterval(checkInterval);
      } else if (checkCount >= maxChecks) {
        showFooter();
        clearInterval(checkInterval);
      }
    }, 50);

    const observer = new MutationObserver(() => {
      if (checkContentReadyImproved()) {
        showFooter();
        observer.disconnect();
      }
    });

    const startObserving = () => {
      if (mainContentRef.current) {
        observer.observe(mainContentRef.current, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['style', 'class'],
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }
    };

    const observeTimer = setTimeout(() => {
      startObserving();
    }, 100);

    const maxTimer = setTimeout(() => {
      showFooter();
      clearInterval(checkInterval);
      observer.disconnect();
    }, 4000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(checkInterval);
      clearTimeout(observeTimer);
      clearTimeout(maxTimer);
      observer.disconnect();
      window.removeEventListener('load', handleLoad);
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
          <Route
            path="contact"
            element={
              <Suspense fallback={<></>}>
                <Contact />
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
