import React from "react";
import "./nav.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between header-div align-items-center">
        <img src="images/nav1.png" className="img-fluid mx-5" alt="logo" />
        <img src="images/logo.png" className="img-fluid logo mx-5" alt="Home" />
        {/* drop started */}
        <Dropdown />
        {/* drop finished */}
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-border">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center button-div">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav nav-div">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <li className="nav-item">
                  <span className="nav-link mx-4" aria-current="page">
                    Home
                  </span>
                </li>
              </Link>
              <HashLink
                smooth
                to="/#about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className="nav-item">
                  <span className="nav-link mx-4">
                    ABOUT US
                  </span>
                </li>
              </HashLink>

              <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                <li className="nav-item">
                  <span className="nav-link mx-4" aria-current="page">
                    CONTACT US
                  </span>
                </li>
              </Link>

              {/* <Link 
                // to={{pathname:"https://docs.google.com/forms/d/e/1FAIpQLScS4eW9zCH9RPsJ0qmbKIU3Hm0YgYyy69zgXgFvWZiQ7hQtHQ/viewform?usp=pp_url"}} 
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => window.location("https://docs.google.com/forms/d/e/1FAIpQLScS4eW9zCH9RPsJ0qmbKIU3Hm0YgYyy69zgXgFvWZiQ7hQtHQ/viewform?usp=pp_url", "_blank")}
              >
                <li className="nav-item">
                  <span className="nav-link mx-4" aria-current="page">
                    FORM
                  </span>
                </li>
              </Link> */}
              <li className="nav-item">
                <a className="nav-link mx-4" 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScS4eW9zCH9RPsJ0qmbKIU3Hm0YgYyy69zgXgFvWZiQ7hQtHQ/viewform?usp=pp_url"
                  target="_blank"
                  rel="noreferrer"
                >
                  FORM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
