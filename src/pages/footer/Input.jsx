import React from "react";

const Input = () => {
  return (
    <div className="col-md-4 col-sm-2 col-12 text-center">
      <p className="footer-input-header">JOIN OUR NEWSLETTER</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control footer-input"
          placeholder="Your mail..."
          aria-label="Your mail..."
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          SUBSCRIBE
        </span>
      </div>
    </div>
  );
};

export default Input;
