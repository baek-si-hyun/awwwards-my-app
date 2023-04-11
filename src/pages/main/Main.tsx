import Header from "./header/Header";
import Projects from "./project/Projects";
import Dummy from "./dummy/Dummy";
import Schedule from "./schedule/Schedule";
import Footer from "../../components/Footer";
import Nav from "../../components/nav/Nav";

function Main() {
  return (
    <>
      <Header />
      <Projects />
      <Dummy />
      <Schedule />
      <Nav />
      <Footer />
    </>
  );
}
export default Main;
