import "./Presentation.css";
import profile from "../../assets/images/profile.png";

const Presentation = () => {
  return (
    <div className="presentation" id="home">
      <div className="presentation-left">
        <div className="heading">
          Hello,<br></br> I am <span>Lisi</span>, <br></br> Full Stack Web
          Developer
        </div>
        <div className="paragraph">
          Currently based in Miami, I find joy in crafting interactive digital
          experiences on the web. From responsive <span>front-end</span>{" "}
          interfaces to robust <span>back-end</span> functionalities, I am
          dedicated to building seamless and user-friendly{" "}
          <span>web applications</span>.
        </div>
      </div>
      <div className="presentation-right">
        <img className="profile-photo" src={profile} />
      </div>
    </div>
  );
};

export default Presentation;
