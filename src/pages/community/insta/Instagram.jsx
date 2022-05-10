import React from "react";
import "../common.css";
const Instagram = () => {
  return (
    <div className="insta d-flex justify-content-center align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div className="border border-dark card d-flex justify-content-center align-items-center mt-5">
              <div className="container text-center">
                <img
                  src="images/insta2.png"
                  alt=""
                  className="img-fluid pt-5"
                />
                <p className="card-text">
                Technologies that brings the world closer together.
                Join Us on Instagram
                </p>
                <div className="pb-5">
                  <a className="btn btn-join text-light " href="https://www.instagram.com/_cosedge_/">
                    JOIN OUR COMMUNITY
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="images/instaic.png"
              alt="discord"
              className="img-fluid h-75 icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
