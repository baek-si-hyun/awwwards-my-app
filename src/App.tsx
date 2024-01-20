import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Main from "./pages/main/Main";
import Myapp from "./pages/project_router/ProjectMain";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { IResize } from "./interface/iproject";
import MusicPlayer from "./pages/main/music/MusicPlayer";
import MusicPlayBox from "./components/music_player/MusicPlayBox";
import Footer from "./components/footer/Footer";



function App() {
  const getResizeWidth = useSelector(
    ({ resizeWidthSlice }: { resizeWidthSlice: IResize }) => {
      return resizeWidthSlice.resizeWidth;
    }
  );


  return (
    <>
      <MusicPlayer />
      <ScrollToTop />
      {getResizeWidth >= 1000 ? <MusicPlayBox /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":projectId" element={<Myapp />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
