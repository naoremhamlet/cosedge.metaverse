import React from "react";
import "../common.css";
const Linked = () => {
  return (
    <div className="linked d-flex justify-content-center align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div className="border border-dark card d-flex justify-content-center align-items-center mt-5">
              <div className="container text-center">
                <img src="images/li.png" alt="" className="img-fluid pt-5" />
                <p className="card-text">
                Our community is growing Join us now to get many amazing offers and news about the latest updates.
                Join us on LinkedIn
                </p>
                <div className="pb-5">
                  <a className="btn btn-join text-light " href="https://www.linkedin.com/company/sinplay-pvt-ltd/">
                    JOIN OUR COMMUNITY
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="images/liic.png"
              alt="discord"
              className="img-fluid h-75 icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linked;
