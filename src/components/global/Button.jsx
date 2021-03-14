import React from "react";
import RightChevron from "../../assets/icons/RightChevron";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.path} className="button-link">
      <div className="button-container">
        <span className="button-text">{props.text}</span>
        <RightChevron />
      </div>
    </Link>
  );
}

export default Button;
