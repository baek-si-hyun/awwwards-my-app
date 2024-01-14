import { Suspense, lazy } from "react";
import Site from "./site/Site";
import Header from "./header/Header";
import Schedule from "./schedule/Schedule";
import Nav from "../../components/nav/Nav";
const Projects = lazy(() => import("./project/Projects"));
const Music = lazy(() => import("./music/Music"));

function Main() {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <main>
        <Projects />
        <Site />
        <Music />
        <Schedule />
      </main>
      <Nav />
    </Suspense>
  );
}
export default Main;
