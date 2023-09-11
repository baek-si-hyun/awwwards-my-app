import styled from "styled-components";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Main from "./pages/main/Main";
import Myapp from "./pages/project_router/ProjectMain";
import ScrollToTop from "./ScrollToTop";
import { motion, useScroll } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { IResize } from "./interface/iproject";
import MusicPlayer from "./pages/main/music/MusicPlayer";
import MusicPlayBox from "./components/music_player/MusicPlayBox";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScrollBar = styled(motion.div)`
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
      <ScrollBar style={{ scaleX: scrollYProgress }} />
      <MusicPlayer />
      <ScrollToTop />
      {getResizeWidth >= 1000 ? <MusicPlayBox /> : null}
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
