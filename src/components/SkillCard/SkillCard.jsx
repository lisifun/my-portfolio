import "./SkillCard.css";

const SkillCard = ({ skill }) => {
  const { title, description, devTools, icon } = skill;
  return (
    <div className="skill-card">
      <img src={icon} className="skill-icon" />
      <div className="skill-title">{title}</div>
      <div className="skill-description">{description}</div>
      <div>
        <div>
          <span>Dev Tools:</span>
        </div>
        <div>
          {devTools.map((tool) => {
            return <div>{tool}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
