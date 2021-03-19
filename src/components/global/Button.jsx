import React from "react";
import { Link } from "react-router-dom";
import getIcon from "./componentFunctions";

function Button(props) {
  const { path, text, icon, height, fontSize, handleOnClick } = props;

  // Call click handler if user presses "enter" key on button
  // Javascript keycode for enter key = 13
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && handleOnClick) {
      handleOnClick();
    }
  }

  const button = (
    <div
      className="button-container"
      style={{ height }}
      role="button"
      tabIndex={0}
      onClick={handleOnClick}
      onKeyDown={handleKeyDown}
    >
      <span className="button-text" style={{ fontSize }}>
        {text}
      </span>
      {getIcon(icon)}
    </div>
  );
  return (
    <>
      {path ? (
        <Link to={path} className="button-link">
          {button}
        </Link>
      ) : (
        button
      )}
    </>
  );
}

export default Button;
