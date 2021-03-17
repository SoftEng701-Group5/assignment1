import React from "react";
import { getIcon } from "./componentFunctions";
import { Link } from "react-router-dom";

function Button(props) {
  const { path, text, icon, height, fontSize, handleOnClick } = props;

  const button = (
    <div
      className="button-container"
      style={{ height }}
      onClick={handleOnClick}
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
