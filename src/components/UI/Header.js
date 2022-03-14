import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <div class="header">
        <div class="header__brand">
          <img src={props.companyLogo} alt="Avana Logo"/>
        </div>
        <div class="header__links">
          <div>
            <a href="#">
              <i class="bi bi-search"></i>
            </a>
          </div>
          <div>
            <a href="#">
              <i class="bi bi-bell"></i>
            </a>
          </div>
          <div>
            <img
              src={props.profileImage}
              alt="Profile Picture"
              class="header__user_profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
