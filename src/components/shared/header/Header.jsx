import React from "react";
import logo from "../../../assets/header/logo_white.png";
import down_arrow from "../../../assets/header/arrow-down.png";
import moon from "../../../assets/header/moon.png";
import profile from "../../../assets/header/profile-circle.png";
import cart from "../../../assets/header/shopping-cart.png";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="header_items">
          <div >
            <input className="input_header" type="text" />
          </div>
          <div>
            <p>English</p>
          </div>
          <div>
            <img src={down_arrow} alt="" />
          </div>
          <div>
            <img src={moon} alt="" />
          </div>
          <div>
            <img src={profile} alt="" />
          </div>
          <div>
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
