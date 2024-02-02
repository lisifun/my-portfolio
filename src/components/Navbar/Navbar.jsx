import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from "../../assets/images/profile.png";

const navElements = [
  { element: "Home", link: "/" },
  { element: "About", link: "/about" },
  { element: "Skills", link: "/skills" },
  { element: "Projects", link: "/projects" },
  { element: "Contact", link: "/contact" },
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
            <Link className="link" key={index} to={navElement.link}>
              {navElement.element}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
