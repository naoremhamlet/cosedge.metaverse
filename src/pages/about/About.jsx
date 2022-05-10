import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <div className="mt-5 pt-5 mb-5" id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <img src="images/about.png" alt="about" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12">
            <p className="about-header">ABOUT US</p>
            <p className="about-text">Reach out and let your mind explore</p>
            <p className="about-desc">
             Traverse the unseen and step into the world you dreamt of to explore the possible implications of the metaverse. 
             metaverse is expected to manifest itself primarily through virtual reality – 
             an alternative, digital world that can be used for a variety of personal and enterprise purposes 
             as in, mythology, health, outer space, nature, education, tour, creating an attractive experience and retaining users.
             Human avatars and software agents interact in a three-dimensional virtual space, all dependent on an ecosystem of research, innovation, mythology and outer space. 
{" "}
            </p>

            <button className="container m-0 bg-transparent  button-container btn-lg text-white join">
              <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                CONTACT US
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
