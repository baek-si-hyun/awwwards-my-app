import { Suspense, lazy } from "react";
import Site from "./site/Site";
import Header from "./header/Header";
import Schedule from "./schedule/Schedule";
const Projects = lazy(() => import("./project/Projects"));
const Music = lazy(() => import("./music/Music"));
const CoinList = lazy(() => import("./coinList/CoinList"));

function Main() {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <main>
        <Projects />
        <Site />
        <Music />
        <CoinList />
        <Schedule />
      </main>
    </Suspense>
  );
}
export default Main;
