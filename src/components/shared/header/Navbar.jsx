import React from "react";
import down_arrow from "../../../assets/header/arrow-down.png";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <div className="nav-items">
        <div className="nav-category">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 5C3 4.44771 3.44772 4 4 4H20C20.5523 4 21 4.44771 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM3 12C3 11.4477 3.44772 11 4 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H4C3.44772 13 3 12.5523 3 12ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="category-drawer">
            <span>Category</span>
            <span>
              <img src={down_arrow} alt="" />
            </span>
          </div>
        </div>
        <div className="navigation">
          <p>Campaigns</p>
          <p>Brands</p>
          <p>Categories</p>
          <p>Help</p>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
