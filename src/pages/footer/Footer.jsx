import React from "react";
import "./footer.css";
import MediaQuery from "react-responsive";
import Input from "./Input";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row pt-3">
          <div className="col-md-4 col-sm-4 col-12 text-center mb-4">
            <div className="mx-5 first-div">
              <img
                src="images/logo.png"
                className="img-fluid logo"
                alt="logo"
              />
              <p className="footer-header text-center m-0">
                Unleash The World of #Metaverse
              </p>
              <div className="d-flex logo-container justify-content-center">
                <img
                  src="images/fb.png"
                  className="img-fluid mx-2 icons"
                  alt=""
                />
                <img
                  src="images/insta.png"
                  className="img-fluid mx-2 icons"
                  alt=""
                />
                <img
                  src="images/yt.png"
                  className="img-fluid mx-2 icons"
                  alt=""
                />
              </div>
            </div>
          </div>
          <MediaQuery query="(max-width: 572px)">
            <Input />
          </MediaQuery>
          <div className="col-md-2 col-sm-2 col-12 text-center">
            <p className="footer-link-header">METAVERSE</p>
            <div className="container d-flex flex-column ">
              <HashLink
                smooth
                to="/#"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p className="footer-links">Home</p>
              </HashLink>
              <HashLink
                smooth
                to="/#about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
               <p className="footer-links">About</p> 
              </HashLink>
              {/* <p className="footer-links">Services</p> */}
              <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                <p className="footer-links">Contact Us</p>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-12 text-center">
            <p className="footer-link-header">IT SERVICES</p>
            <div className="container d-flex flex-column">
              <p className="footer-links">Home</p>
              <p className="footer-links">About</p>
              <p className="footer-links">Team</p>
              <p className="footer-links">Contact us</p>
            </div>
          </div>
          <MediaQuery query="(min-width: 572px)">
            <Input />
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default Footer;
