import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import { Link } from "react-router-dom";

const projectsInfo = [
  {
    title: "Ticket Flow",
    description:
      "A MERN stack web application for project management, featuring React for dynamic UI. Implemented full CRUD actions in the frontend and established a REST API backend using Express.js and MongoDB. The application includes secure management with functionalities like sign-up, log-in and log-out, employing encrypted passwords for enhanced security.",
    tools: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: "https://ticket-flow.netlify.app/",
    background: "#6E578F",
  },
  {
    title: "Bubble Paradise",
    description:
      "A React web application integrated with a mock backend API, demonstrating expertise in CRUD operations. Utilized REST APIs and Context API for efficient data management. Allows users to create, view, update, and delete appointments.",
    tools: ["JavaScript", "React", "HTML", "CSS"],
    demo: "https://bubble-paradise.netlify.app/",
    background: "#F25F4C",
  },
  {
    title: "Block Puzzle",
    description:
      "A browser-based game developed using HTML, CSS, JavaScript. Implemented interactive gameplay with drag and drop functionality, incorporating winning/losing logic. Demonstrated proficiency in OOP principles to organize game entities.",
    tools: ["JavaScript", "HTML", "CSS", "DOM", "OOP"],
    demo: "https://lisifun.github.io/block-puzzle/",
    background: "#D84F77",
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
        <div className="project-list">
          {projectsInfo.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
