import SkillCard from "../SkillCard/SkillCard";
import "./Skills.css";
import frontend from "../../assets/images/fronted.png";
import backend from "../../assets/images/backend.png";

const skillsInfo = [
  {
    title: "Frontend Developer",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    devTools: ["HTML", "CSS", "React", "Bootstrap"],
    icon: frontend,
  },
  {
    title: "Backend Developer",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    devTools: ["Node.js", "Express.js", "MongoDB"],
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
