import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">Hi, I’m Lisi. Nice to meet you.</div>
      <div className="about-paragraph">
        I'm a dynamic and results-driven Full Stack Web Developer with expertise
        spanning both frontend and backend technologies. My journey in web
        development has equipped me with a robust skill set, blending
        creativity, technical finesse, and a steadfast commitment to delivering
        seamless and user-centric digital experiences.
        <br></br>
        <br></br>I'm actively seeking new challenges and opportunities for
        professional growth. If you have a role that aligns with my experience,
        I invite you to reach out. Let's engage in a conversation about how I
        can bring a fresh perspective and make valuable contributions to your
        team. I'm eagerly anticipating the opportunity to connect and explore
        potential collaborations!
      </div>

      <button className="button-contact">
        <a className="link-button" href="#contact">
          Contact
        </a>
      </button>
    </div>
  );
};

export default About;
