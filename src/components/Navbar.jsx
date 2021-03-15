import React, { useState } from "react";
import BoardIcon from "../assets/icons/BoardIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import { useLocation, Link } from "react-router-dom";
import DefaultAvatar from "../assets/images/default-avatar.png";

function Navbar(props) {
  const [hovering, setHovering] = useState(false);
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="nav-icongroup-container">
        <Link to={"/home"} className="button-link">
          <div className="nav-icon-container">
            {location.pathname === "/home" && <div className="selected-box" />}
            <HomeIcon />
          </div>
        </Link>
        <Link to={"/dashboard"} className="button-link">
          <div className="nav-icon-container">
            {location.pathname === "/dashboard" && (
              <div className="selected-box" />
            )}
            <DashboardIcon />
          </div>
        </Link>
        <Link to={"/board"} className="button-link">
          <div className="nav-icon-container">
            {location.pathname === "/board" && <div className="selected-box" />}
            <BoardIcon />
          </div>
        </Link>
      </div>

      <div
        className="account-container"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className="account-menu-container"
          style={{
            height: hovering ? "fit-content" : "50px",
            padding: hovering && "30px 0 80px 0",
            opacity: hovering ? 1 : 0,
          }}
        >
          <SettingsIcon />
          <LogoutIcon />
        </div>

        <img className="user-avatar" src={DefaultAvatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
