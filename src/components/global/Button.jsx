import React from "react";
import { getIcon } from "./componentFunctions";
import { Link } from "react-router-dom";

function Button(props) {
  const {path, text, icon, height, fontSize} = props;
  return (
    <Link to={path} className="button-link">
      <div className="button-container" style={{height: height}}>
        <span className="button-text" style={{fontSize: fontSize}}>{text}</span>
        {getIcon(icon)}
      </div>
    </Link>
  );
}

export default Button;
