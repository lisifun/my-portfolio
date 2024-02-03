import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Presentation from "../../components/Presentation/Presentation";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const MainPage = () => {
  return (
    <div className="main-page">
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;
