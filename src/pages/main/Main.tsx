import { Suspense, lazy } from "react";
import Site from "./site/Site";
import styled from "styled-components";
const Header = lazy(() => import("./header/Header"));
const Projects = lazy(() => import("./project/Projects"));
const Music = lazy(() => import("./music/Music"));
const CoinList = lazy(() => import("./coinList/CoinList"));
const Schedule = lazy(() => import("./schedule/Schedule"));
const Footer = lazy(() => import("../../components/footer/Footer"));
const Nav = lazy(() => import("../../components/nav/Nav"));
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
