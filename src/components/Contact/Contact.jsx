import "./Contact.css";
import logo from "../../assets/images/IMG_6725.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="about-left">
        <div className="logo-name">
          <img className="logo" src={logo} />
          <div className="text">lisifun</div>
        </div>
        <div className="about-accounts">
          <a
            className="linkedin-icon"
            href="https://www.linkedin.com/in/lisandrafundora/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="github-icon" href="https://github.com/lisifun">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
