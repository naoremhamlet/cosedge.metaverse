import React from "react";
import "./design.css";
const Design = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12">
            <div className="container">
              <p className="design-header mt-5">DESIGN TOOL</p>
              <p className="design-description mt-5">
                Our multi-domain design and technological capabilities enable us
                to provide high class experience.
              </p>
            </div>
            <div className="container pt-5">
              <img src="images/comp1.png" alt="design" className="img-fluid" />
            </div>
          </div>
          {/* first div closed*/}
          <div
            className="col-md-6 col-sm-6 col-12 design-img d-flex justify-content-end"
            style={{}}
          >
            {/* <div className="container-fluid d-flex justify-content-end  p-0 m-0 border border-light"> */}
            <img
              src="images/banner1.png"
              alt="comp1"
              className="img-fluid banner-img"
              style={{ maxHeight: "45rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
