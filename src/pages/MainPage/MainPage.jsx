import About from "../../components/About/About";
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
    </div>
  );
};

export default MainPage;
