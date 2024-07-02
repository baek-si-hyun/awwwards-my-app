import { Suspense, lazy } from "react";
import Site from "../../container/Site";
import Header from "../../container/Header";
import Schedule from "../../container/Schedule";
import Nav from "../../components/nav/Nav";
const Projects = lazy(() => import("../../container/Projects"));
const CoinList = lazy(() => import("../../container/CoinList"));
const Music = lazy(() => import("../../container/Music"));

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
      <Nav />
    </Suspense>
  );
}
export default Main;
