import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { all, newJeans, playingVideo, youtubeVideo } from "./atom";
import { Suspense, lazy } from "react";
const MusicPlayer = lazy(() => import("./pages/main/dummy/boards/MusicPlayer"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Faqs = lazy(() => import("./pages/faqs/Faqs"));
const Main = lazy(() => import("./pages/main/Main"));
const Myapp = lazy(() => import("./pages/project_router/ProjectMain"));

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
  //최적화 예정
  const newJeansVideoList = useRecoilValue(newJeans);
  const allVideoList = useRecoilValue(all);
  const { videoUrl } = useRecoilValue(youtubeVideo);
  const { playingVideoData } = useRecoilValue(playingVideo);
  const [playList, setPlayList] = useState<string[]>([""]);
  const [playingIndex, setPlayingIndex] = useState(0);

  useEffect(() => {
    const margeVideoList = newJeansVideoList.concat(allVideoList);
    const videoList = margeVideoList.map((item) => item.url);
    const findIndex = videoList.findIndex((url: string) => url === videoUrl);
    setPlayList(videoList);
    setPlayingIndex(findIndex);
  }, [videoUrl, allVideoList, newJeansVideoList]);

  useEffect(() => {
    const margeVideoList = newJeansVideoList.concat(allVideoList);
    const videoList = margeVideoList.map((item) => item.url);
    const findIndex = videoList.findIndex(
      (url: string) => url === playingVideoData
    );
    setPlayingIndex(findIndex);
  }, [playingVideoData, allVideoList, newJeansVideoList]);

  return (
    <Wapper>
      <SctollBar style={{ scaleX: scrollYProgress }} />
      <ScrollToTop />
      <Suspense fallback={<div></div>}>
        <MusicPlayer playList={playList} playingIndex={playingIndex} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":projectId" element={<Myapp />} />
          <Route path="FAQs" element={<Faqs />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Wapper>
  );
}

export default App;
