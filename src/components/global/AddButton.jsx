import React from "react";
import getIcon from "./componentFunctions";
import DarkModeContext from "../../services/theme-context";

function AddButton(props) {
  const { onClick } = props;
  const isDarkMode = React.useContext(DarkModeContext);

  return (
    <div
      className={
        isDarkMode ? "add-button-container" : "add-button-container light"
      }
      onClick={() => onClick()}
      onKeyDown={() => onClick()}
      role="button"
      tabIndex="0"
    >
      {getIcon("plus")}
    </div>
  );
}

export default AddButton;
