import styled from "styled-components";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Main from "./pages/main/Main";
import Myapp from "./pages/project_router/ProjectMain";
import ScrollToTop from "./ScrollToTop";
import { motion, useScroll } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import { IResize } from "./interface/iproject";
const Header = lazy(() => import("./pages/main/header/Header"));
const Projects = lazy(() => import("./pages/main/project/Projects"));
const Music = lazy(() => import("./pages/main/music/Music"));
const CoinList = lazy(() => import("./pages/main/coinList/CoinList"));
const Schedule = lazy(() => import("./pages/main/schedule/Schedule"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Nav = lazy(() => import("./components/nav/Nav"));
const MusicPlayer = lazy(() => import("./pages/main/music/MusicPlayer"));
const MusicPlayBox = lazy(() =>
  import("./components/music_player/MusicPlayBox")
);

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SctollBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgb(255, 0, 0);
  transform-origin: 0%;
  z-index: 999999999;
`;
function App() {
  const { scrollYProgress } = useScroll();
  const getResizeWidth = useSelector(
    ({ resizeWidthSlice }: { resizeWidthSlice: IResize }) => {
      return resizeWidthSlice.resizeWidth;
    }
  );
  return (
    <Wapper>
      <SctollBar style={{ scaleX: scrollYProgress }} />
      <MusicPlayer />
      <ScrollToTop />
      {getResizeWidth >= 1000 ? <MusicPlayBox /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":projectId" element={<Myapp />} />
        <Route path="FAQs" element={<Faqs />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Header />
      <Projects />
      <Music />
      <CoinList />
      <Schedule />
      <Nav />
      <Footer />
    </Wapper>
  );
}

export default App;
