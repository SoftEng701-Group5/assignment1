import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import BoardIcon from "../assets/icons/BoardIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import DefaultAvatar from "../assets/images/default-avatar.png";

function Navbar() {
  const [hovering, setHovering] = useState(false);
  const location = useLocation();
  return (
    <div className="navbar">
      <div>
        <Link to="/home" className="button-link">
          <div className="navbar__icon__group">
            <strong data-testid="home"/>
            {location.pathname === "/home" && <div className="selected-box"/>}
            <HomeIcon/>
          </div>
        </Link>
        <Link to="/dashboard" className="button-link">
          <div className="navbar__icon__group">
            <strong data-testid="dashboard"/>
            {location.pathname === "/dashboard" && (
              <div className="selected-box" />
            )}
            <DashboardIcon />
          </div>
        </Link>
        <Link to="/board" className="button-link">
          <div className="navbar__icon__group">
            <strong data-testid="board"/>
            {location.pathname === "/board" && <div className="selected-box" />}
            <BoardIcon />
          </div>
        </Link>
      </div>

      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className={`navbar__account${  hovering ? "--hover" : ""}`}
        >
          <SettingsIcon />
          <LogoutIcon />
        </div>

        <img className="navbar__useravatar" src={DefaultAvatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
