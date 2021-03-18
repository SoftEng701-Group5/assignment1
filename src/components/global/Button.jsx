import React from "react";
import { Link } from "react-router-dom";

import getIcon from "./componentFunctions";

function Button(props) {
  const { path, text, icon, height, fontSize, handleOnClick } = props;

  const handleKeyDown = function(e) {
    if (e.keyCode === 13) {
      console.log("hit");
    }
  }

  const button = (
    <div
      className="button-container"
      style={{ height }}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
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
