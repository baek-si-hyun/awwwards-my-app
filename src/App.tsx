import styled from "styled-components";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Main from "./pages/main/Main";
import Myapp from "./pages/project_router/ProjectMain";
import ScrollToTop from "./ScrollToTop";
import {motion, useScroll } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import MusicPlayer from "./pages/main/dummy/boards/MusicPlayer";
import MusicPlayBox from "./components/music_player/MusicPlayBox";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
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

  return (
    <Wapper>
      <SctollBar style={{ scaleX: scrollYProgress }} />
      <MusicPlayer />
      <ScrollToTop />
      <MusicPlayBox />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":projectId" element={<Myapp />} />
        <Route path="FAQs" element={<Faqs />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Wapper>
  );
}

export default App;
