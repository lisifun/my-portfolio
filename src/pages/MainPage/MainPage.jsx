import About from "../../components/About/About";
import Presentation from "../../components/Presentation/Presentation";
import Projects from "../../components/Projects/Projects";

const MainPage = () => {
  return (
    <div className="main-page">
      <Presentation />
      <About />
      <Projects />
    </div>
  );
};

export default MainPage;
