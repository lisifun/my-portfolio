import "./Projects.css";

const projectsInfo = [
  {
    title: "Block Puzzle",
    description:
      "A browser-based game developed using HTML, CSS, JavaScript. Implemented interactive gameplay with drag and drop functionality, incorporating winning/losing logic. Demonstrated proficiency in Object Oriented Programming principles to organize game entities",
    tools: ["JavaScript", "HTML", "CSS", "DOM", "OOP"],
    demo:'https://lisifun.github.io/block-puzzle/'
    picture:''
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-top">
        <div className="projects-heading">My Recent Work</div>
        <div className="projects-paragraph">
          Here are a few past projects I've worked on.{" "}
        </div>
      </div>
      <div className="projects-bottom">
        <div>Ticket FLow</div>
        <div>Bubble Paradise</div>
        <div>Block Puzzle</div>
      </div>
    </div>
  );
};

export default Projects;
