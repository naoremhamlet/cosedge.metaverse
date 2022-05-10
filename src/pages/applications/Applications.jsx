import React from "react";
import "./application.css";
const Applications = () => {
  return (
    <div className="app-div" style={{}}>
      <div className="container-fluid p-2">
        <p className="text-center application-header">VR APPLICATIONS</p>
        <div className="row text-center ">
          <div className="col-md-2 mt-5">
            <img src="images/grp1.png" className="img-fluid " alt="logo" />
          </div>
          <div className="col-md-2 mt-5">
            {" "}
            <img src="images/grp2.png" className="img-fluid" alt="logo" />
          </div>
          <div className="col-md-2 mt-5">
            {" "}
            <img src="images/grp3.png" className="img-fluid" alt="logo" />
          </div>
          <div className="col-md-2 mt-5">
            {" "}
            <img src="images/grp4.png" className="img-fluid" alt="logo" />
          </div>
          <div className="col-md-2 mt-5">
            {" "}
            <img src="images/grp5.png" className="img-fluid" alt="logo" />
          </div>
          <div className="col-md-2 mt-5">
            {" "}
            <img src="images/grp6.png" className="img-fluid" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
