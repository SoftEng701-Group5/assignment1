import React, { useContext, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import SettingsModal from "./global/Modal";
import IconButton from "./global/IconButton";
import BoardIcon from "../assets/icons/BoardIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import DefaultAvatar from "../assets/images/default-avatar.png";
import { signOut } from "../services/authService";
import DarkModeContext from "../services/theme-context";
import { AuthContext } from "../services/providers/authProvider";
import Button from "./global/Button";
import TextInput from "./global/TextInput";

function Navbar() {
  const history = useHistory();
  const [hovering, setHovering] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(false);
  const location = useLocation();
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // Input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const signOutHandler = () => {
    signOut();
    history.push("/");
  };

  const settingsHandler = () => {
    setFirstName(currentUser?.firstName);
    setLastName(currentUser?.lastName);
    setEmail(currentUser?.email);
    setHovering(false);
    setDisplaySettings(true);
  };

  const handleSaveSettings = () => {
    // send updated info to backend
    setDisplaySettings(false);
  };

  const handleCancelSettings = () => {
    setDisplaySettings(false);
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
      </div>

      <div
        onMouseEnter={() => {
          if (!displaySettings) {
            setHovering(true);
          }
        }}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className={`navbar__account${hovering ? "--hover" : ""}`}
          data-testid="nav-settings-icon"
        >
          <IconButton
            className="hover-button"
            icon="settings"
            onClick={settingsHandler}
            size="48px"
            data-testid="nav-settings-icon"
          />
          <SettingsModal
            dismissOnClickOutside
            onCancel={handleCancelSettings}
            show={displaySettings}
          >
            <div className="">
              <IconButton
                icon="cross"
                size="48px"
                onClick={handleCancelSettings}
              />
              <h1>User settings</h1>
              <TextInput
                label="First name:"
                type="firstName"
                textValue={firstName}
                onChangeHandler={setFirstName}
              />
              <TextInput
                label="Last name:"
                type="lastName"
                textValue={lastName}
                onChangeHandler={setLastName}
              />
              <TextInput
                label="Email address:"
                type="email"
                textValue={email}
                onChangeHandler={setEmail}
              />
              <Button
                icon="rightArrow"
                text="Save"
                height="4rem"
                fontSize="1.5rem"
                handleOnClick={handleSaveSettings}
              />
            </div>
          </SettingsModal>

          <IconButton
            className="hover-button"
            icon={isDarkMode ? "lightMode" : "darkMode"}
            onClick={changeAppTheme}
            size="48px"
            data-testid="nav-theme-icon"
          />

          <IconButton
            className="hover-button"
            icon="logout"
            onClick={signOutHandler}
            size="48px"
            data-testid="nav-logout-icon"
          />
        </div>

        <img className="navbar__useravatar" src={DefaultAvatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Navbar;
