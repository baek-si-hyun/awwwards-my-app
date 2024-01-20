import { Suspense, lazy } from "react";
import Site from "./site/Site";
import Header from "./header/Header";
import Schedule from "./schedule/Schedule";
import Nav from "../../components/nav/Nav";
import SmoothScroll from "../../SmoothScroll";
const Projects = lazy(() => import("./project/Projects"));
const CoinList = lazy(() => import("../coin_list/CoinList"));
const Music = lazy(() => import("./music/Music"));

function Main() {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <SmoothScroll>
        <main>
          <Projects />
          <Site />
          <Music />
          <CoinList />
          <Schedule />
        </main>
      </SmoothScroll>
      <Nav />
    </Suspense>
  );
}
export default Main;
