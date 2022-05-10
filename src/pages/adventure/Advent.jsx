import React from "react";
import "./advent.css";
const Advent = () => {
  return (
    <div
      className="mt-5"
      style={{
        width: "100vw",
        overflowX: "hidden",
        position: "static",
      }}
    >
      <div className="container-fluid">
        <div className="col-12">
          <p className="advent-header">
            Go On Adventures You{" "}
            <span style={{ fontFamily: "calibri", fontWeight: "bold" }}>
              &#39;
            </span>
            ve Only Dreamt Of Explore This World And Beyond
          </p>

          <p className="advent-desc px-5 mx-5">
          We as developers of metaverse have pushed the boundaries of what animation or virtual reality is through hosting in-scene events and creating virtual experiences.
{" "}
          </p>
        </div>
        <div className="col-12">
          <div className="container">
            <img
              src="images/adventure.png"
              className="img-fluid"
              style={{ width: "100%", maxHeight: "50%" }}
              alt="adventure"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advent;
