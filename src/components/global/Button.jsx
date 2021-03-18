import React from "react";
import { Link } from "react-router-dom";
import getIcon from "./componentFunctions";

function Button(props) {
  const {path, text, icon, height, fontSize} = props;
  return (
    <Link to={path} className="button-link">
      <div className="button-container" style={{height}}>
        <span className="button-text" style={{fontSize}}>{text}</span>
        {getIcon(icon)}
      </div>
    </Link>
  );
}

export default Button;
