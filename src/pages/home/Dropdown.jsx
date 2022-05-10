import React from "react";

const Dropdown = () => {
  return (
    <div>
      {" "}
      <div className="dropdown mx-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "transparent",
            fontFamily: "cfmedium",
          }}
        >
          JOIN OUR COMMUNITY
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark text-center btn-header "
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <a className="dropdown-item "  href="/Instagram">
              Instagram
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/Facebook">
              Facebook
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/linkedin">
              LinkedIn
            </a>
          </li>

          <li>
            <a className="dropdown-item"  href="/Discord">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
