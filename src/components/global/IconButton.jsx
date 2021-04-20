import React from "react";
import getIcon from "./componentFunctions";

function IconButton(props) {
  const { className = "", icon, size, onClick, datatestid } = props;

  return (
    <div
      className={`${className}icon-button-container`}
      style={{ width: size, height: size }}
      onClick={() => onClick()}
      onKeyDown={() => onClick()}
      role="button"
      tabIndex="0"
      data-testid={datatestid}
    >
      {getIcon(icon)}
    </div>
  );
}

export default IconButton;
