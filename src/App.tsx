import styled from "styled-components";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Main from "./pages/main/Main";
import Myapp from "./pages/project_router/ProjectMain";
import ScrollToTop from "./ScrollToTop";
import MusicPlayer from "./pages/main/dummy/boards/MusicPlayer";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { all, newJeans, playingVideo, youtubeVideo } from "./atom";

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
      <MusicPlayer playList={playList} playingIndex={playingIndex} />
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
