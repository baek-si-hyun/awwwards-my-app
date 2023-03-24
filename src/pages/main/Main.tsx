import Header from "./header/Header";
import Projects from "./project/Projects";
import About from "./about/About";
import Schedule from "./schedule/Schedule";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";


function Main() {
  return (
    <>
      <Header />
      <Projects />
      <About />
      <Schedule />
      <Nav />
      <Footer />
    </>
  );
}
export default Main;
