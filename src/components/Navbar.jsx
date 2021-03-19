import React, { useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import BoardIcon from "../assets/icons/BoardIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import DefaultAvatar from "../assets/images/default-avatar.png";
import { signOut } from '../services/authService';

function Navbar() {
  const history = useHistory();
  const [hovering, setHovering] = useState(false);
  const location = useLocation();

  const signOutHandler = () => {
    signOut();
    history.push('/');
  }

  return (
    <div className="navbar">
      <div>
        <Link to="/home" className="button-link">
          <div className="navbar__icon__group">
            {location.pathname === "/home" && <div className="selected-box" />}
            <HomeIcon />
          </div>
        </Link>
        <Link to="/dashboard" className="button-link">
          <div className="navbar__icon__group">
            {location.pathname === "/dashboard" && (
              <div className="selected-box" />
            )}
            <DashboardIcon />
          </div>
        </Link>
        <Link to="/board" className="button-link">
          <div className="navbar__icon__group">
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
          <div className="icon-container"
            onClick={signOutHandler} 
            onKeyDown={signOutHandler}
            role="button" 
            tabIndex="0">
              <LogoutIcon />
          </div>
        </div>

        <img className="navbar__useravatar" src={DefaultAvatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
