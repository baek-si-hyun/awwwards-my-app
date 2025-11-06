import { Suspense, lazy } from "react";
import Main from "./pages/main/Main";
import ScrollToTop from "./ScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useMySelector } from "./libs/useMySelector";
import MusicPlayer from "./components/Music/MusicPlayer";
import MusicPlayBox from "./components/Music/MusicPlayBox";
import Footer from "./components/Footer/Footer";
import FloatingCoinListButton from "./components/FloatingCoinListButton";

const Contact = lazy(() => import("./pages/Contact/Contact"));
const Faqs = lazy(() => import("./pages/faqs/Faqs"));
const Myapp = lazy(() => import("./pages/ProjectRouter/ProjectMain"));
const CoinListPage = lazy(() => import("./pages/coinlist/CoinListPage"));
const CoinDetailPage = lazy(() => import("./pages/coinlist/CoinDetailPage"));

function App() {
  const getResizeWidth = useMySelector(
    (state) => state.resizeWidthSlice.resizeWidth
  );

  return (
    <>
      <MusicPlayer />
      <ScrollToTop />
      {getResizeWidth >= 1000 ? <MusicPlayBox /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path=":projectId"
          element={
            <Suspense fallback={<></>}>
              <Myapp />
            </Suspense>
          }
        />
        <Route
          path="coinlist"
          element={
            <Suspense fallback={<></>}>
              <CoinListPage />
            </Suspense>
          }
        />
        <Route
          path="coin/:market"
          element={
            <Suspense fallback={<></>}>
              <CoinDetailPage />
            </Suspense>
          }
        />
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
      </Routes>
      <FloatingCoinListButton />
      <Footer />
    </>
  );
}

export default App;
