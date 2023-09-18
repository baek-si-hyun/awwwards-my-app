import { Suspense, lazy } from "react";
import Site from "./site/Site";
import Header from "./header/Header";
import Schedule from "./schedule/Schedule";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
const Projects = lazy(() => import("./project/Projects"));
const Music = lazy(() => import("./music/Music"));
const CoinList = lazy(() => import("./coinList/CoinList"));

function Main() {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <Projects />
      <Site />
      <Music />
      <CoinList />
      <Schedule />
      <Nav />
      <Footer />
    </Suspense>
  );
}
export default Main;









