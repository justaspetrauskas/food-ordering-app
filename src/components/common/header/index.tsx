import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="absolute-center location-icon">
                <HiOutlineLocationMarker color={"#ff7e8b"} size={"1.4rem"} />
              </i>
              <span>City 1</span>
            </div>
            <span className="location-search-separator"></span>
            <div className="header-searchbar">
              <i className="absolute-center search-icon">
                <FiSearch color={"#ff7e8b"} size={"1.4rem"} />
              </i>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-wrapper">
        <span>Log In</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
};

export default Header;
