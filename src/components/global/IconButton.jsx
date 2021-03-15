import React from "react";
import { getIcon } from "./componentFunctions";

function IconButton(props) {
  const { icon, size, onClick } = props;

  return (
    <div
      className="icon-button-container"
      style={{ width: size, height: size }}
      onClick={() => onClick()}
    >
      {getIcon(icon)}
    </div>
  );
}

export default IconButton;
