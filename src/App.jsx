import "./App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import icon from "./assets/logo.svg";
import mockup from "./assets/illustration-mockups.svg";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <img src={icon} alt="logo" />
        </header>
        <div className="container-two">
          <div className="middle-container">
            <div className="img-comtainer">
              <img className="mockup" src={mockup} alt="" />
            </div>

            <div className="content">
              <h1 className="titles">
                Build The Community <br /> Your Fans Will Love
              </h1>
              <p className="text">
                Huddle re-imagines the way we build communities. You have <br />{" "}
                a voice, but so does your audience. Create connections with{" "}
                <br /> your users as you engage in genuine discussion.
              </p>
              <button className="register" href="/">
                Register
              </button>
            </div>
            {/* <div className="footer">
              <div className="icon">
                <FontAwesomeIcon icon={faFacebookF} className="icons" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faTwitter} className="icons" />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faInstagram} className="icons" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
