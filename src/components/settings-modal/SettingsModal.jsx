import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../global/Button";
import IconButton from "../global/IconButton";
import TextInput from "../global/TextInput";
import { updateUserInfo } from "../../services/authService";
import { AuthContext } from "../../services/providers/authProvider";
import DarkModeContext from "../../services/theme-context";
import { SettingsModalShowContext } from "./SettingsContextProvider";

const modalRoot = document.querySelector("#modal-root");

export default function SettingsModal() {
  const { currentUser, triggerRefetch } = useContext(AuthContext);
  const { isDarkMode } = useContext(DarkModeContext);
  const [, setShowSettings] = useContext(SettingsModalShowContext);

  // Input fields
  const [firstName, setFirstName] = useState(currentUser?.firstName);
  const [lastName, setLastName] = useState(currentUser?.lastName);
  const [email, setEmail] = useState(currentUser?.email);

  const handleSaveSettings = async () => {
    const newUserData = {
      First_name: firstName,
      Last_name: lastName,
      User_id: currentUser.uid,
    };
    await updateUserInfo(newUserData, email);
    triggerRefetch();
    setShowSettings(false);
  };

  return ReactDOM.createPortal(
    <div
      className="modalContainerBg"
      aria-hidden="true"
      // on every click, checks if it is outside the modal div or not
      onClick={(e) => {
        if (e.target.parentElement === modalRoot) {
          setShowSettings(false);
        }
      }}
    >
      {/* eslint-disable-next-line */}
      <div className={isDarkMode ? "modalContainer" : "modalContainer light"} tabIndex="0">
        <IconButton
          icon="cross"
          size="48px"
          onClick={() => {
            setShowSettings(false);
          }}
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
    </div>,
    modalRoot
  );
}
