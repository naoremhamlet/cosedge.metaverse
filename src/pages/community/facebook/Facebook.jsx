import React from "react";
import "../common.css";
const Facebook = () => {
  return (
    <div className="facebook d-flex justify-content-center align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div className="border border-dark card d-flex justify-content-center align-items-center mt-5">
              <div className="container text-center">
                <img src="images/fb2.png" alt="" className="img-fluid pt-5" />
                <p className="card-text">

                We’re imagining a world of new set of experiences That has been never felt before.
                Join us on Facebook
 
                </p>
                <div className="pb-5">
                  <a className="btn btn-join text-light " href="https://www.facebook.com/cosedgeIT/">
                    JOIN OUR COMMUNITY
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="images/fbic.png"
              alt="discord"
              className="img-fluid h-75 icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
