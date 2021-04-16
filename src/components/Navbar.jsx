import React, { useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import BoardIcon from "../assets/icons/BoardIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import MusicIcon from "../assets/icons/MusicIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import DarkModeIcon from "../assets/icons/DarkModeIcon";
import LogoutIcon from "../assets/icons/LogoutIcon";
import DefaultAvatar from "../assets/images/default-avatar.png";
import { signOut } from "../services/authService";
import DarkModeContext from "../services/theme-context";
import LightModeIcon from "../assets/icons/LightModeIcon";

function Navbar() {
  const history = useHistory();
  const [hovering, setHovering] = useState(false);
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = React.useContext(DarkModeContext);

  const signOutHandler = () => {
    signOut();
    history.push("/");
  };

  const changeAppTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  /** Use location to check which page the user is currently is on
   * to render the outer box for the correct icon.
   * Need the hover state to render out the user related buttons only
   * when the user is hovering over the user icon container.
   * */
  return (
    <div className="navbar">
      <div>
        <Link to="/home" className="button-link">
          <div className="navbar__icon__group" data-testid="nav-home-icon">
            {location.pathname === "/home" && <div className="selected-box" />}
            <HomeIcon />
          </div>
        </Link>
        <Link to="/dashboard" className="button-link">
          <div className="navbar__icon__group" data-testid="nav-dashboard-icon">
            {location.pathname === "/dashboard" && (
              <div className="selected-box" />
            )}
            <DashboardIcon />
          </div>
        </Link>
        <Link to="/board" className="button-link">
          <div className="navbar__icon__group" data-testid="nav-taskboard-icon">
            {location.pathname === "/board" && <div className="selected-box" />}
            <BoardIcon />
          </div>
        </Link>
        <Link to="/music" className="button-link">
          <div className="navbar__icon__group" data-testid="nav-music-icon">
            {location.pathname === "/music" && <div className="selected-box" />}
            <MusicIcon />
          </div>
        </Link>
      </div>

      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className={`navbar__account${hovering ? "--hover" : ""}`}
          data-testid="nav-settings-icon"
        >
          <SettingsIcon />
          <div
            style={{ width: "50%", height: "100%", margin: "2vh 0" }}
            tabIndex="-1"
            role="button"
            onKeyDown={changeAppTheme}
            onClick={changeAppTheme}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </div>
          <div
            style={{ width: "50%", height: "50%", marginBottom: "2vh" }}
            className="icon-container"
            onClick={signOutHandler}
            onKeyDown={signOutHandler}
            role="button"
            tabIndex="0"
            data-testid="nav-logout-icon"
          >
            <LogoutIcon />
          </div>
        </div>
        <img className="navbar__useravatar" src={DefaultAvatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
