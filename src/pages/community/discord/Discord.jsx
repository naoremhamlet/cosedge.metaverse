import React from "react";
import "../common.css";
const Discord = () => {
  return (
    <div className="discord d-flex justify-content-center align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
            <div className="border border-dark card d-flex justify-content-center align-items-center mt-5">
              <div className="container text-center">
                <img src="images/disc.png" alt="" className="img-fluid pt-5" />
                <p className="card-text">
                A set of virtual spaces where you can create and explore with other people who aren't in the same physical space as you. Join us on our discord server. 
                </p>
                <div className="pb-5">
                  <a className="btn btn-join text-light " href="https://discord.gg/2EkkGp3U7w">
                    JOIN OUR COMMUNITY
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="images/discic.png"
              alt="discord"
              className="img-fluid h-75 icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;
