import { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, tools, demo, background } = project;
  return (
    <>
      {
        <a
          className="project link"
          style={{ backgroundColor: isHovered ? "#ff8906" : `${background}` }}
          href={demo}
          target="_blank"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="project-title">{title}</div>
          {isHovered && (
            <div className="hovered-content">
              <div className="project-description">{description}</div>
              <div className="project-tools">
                {tools.map((tool, index) => (
                  <div key={index} className="tool">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          )}
        </a>
      }
    </>
  );
};

export default ProjectCard;
