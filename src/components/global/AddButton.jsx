import React from "react";
import getIcon from "./componentFunctions";

function AddButton(props) {
  const { onClick } = props;

  return (
    <div
      className="add-button-container"
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
