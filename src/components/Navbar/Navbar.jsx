import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from "../../assets/images/profile.png";

const navElements = [
  { element: "Home", link: "home" },
  { element: "About", link: "about" },
  { element: "Skills", link: "skills" },
  { element: "Projects", link: "projects" },
  { element: "Contact", link: "contact" },
];
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={profile} />
        <div className="text">lisifun</div>
      </div>
      <div className="navbar-right">
        {navElements.map((navElement, index) => {
          return (
            <a className="link" key={index} href={`#${navElement.link}`}>
              {navElement.element}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
