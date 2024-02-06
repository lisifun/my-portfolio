import SkillCard from "../SkillCard/SkillCard";
import "./Skills.css";
import frontend from "../../assets/images/fronted.png";
import backend from "../../assets/images/backend.png";

const skillsInfo = [
  {
    title: "Frontend Developer",
    description:
      "I specialize in crafting visually appealing and user-centric web applications, enjoying the process of coding from scratch to bring creative ideas to life in the browser.",
    devTools: ["JavaScript", "React", "HTML", "CSS", "Bootstrap"],
    icon: frontend,
  },
  {
    title: "Backend Developer",
    description:
      "With expertise in server-side logic and application architecture, I focus on building robust foundations for web applications, ensuring efficiency, scalability, and a seamless user experience.",
    devTools: ["Node.js", "Express.js", "MongoDB", 'RESTful'],
    icon: backend,
  },
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skill-list">
        {skillsInfo.map((skill, index) => {
          return <SkillCard skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
