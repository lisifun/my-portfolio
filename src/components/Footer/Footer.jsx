import "./Footer.css";
import logo from "../../assets/images/IMG_6725.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-left">
          <h2>Lisi Fundora</h2>
          <div>Full Stack Web Developer</div>
        </div>
        <div className="footer-right">
          <h2>Social</h2>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/lisandrafundora/"
              target="-blank"
              className="link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/lisifun"
              target="-blank"
              className="link"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div>© Copyright 2024. Made by Lisi Fundora</div>
    </div>
  );
};

export default Footer;
