import { Suspense, lazy } from "react";
const Header = lazy(() => import("./header/Header"));
const Projects = lazy(() => import("./project/Projects"));
const Dummy = lazy(() => import("./dummy/Dummy"));
const Schedule = lazy(() => import("./schedule/Schedule"));
const Footer = lazy(() => import("../../components/Footer"));
const Nav = lazy(() => import("../../components/nav/Nav"));

function Main() {
  return (
    <Suspense fallback={<div></div>}>
      <Header />
      <Projects />
      <Dummy />
      <Schedule />
      <Nav />
      <Footer />
    </Suspense>
  );
}
export default Main;
