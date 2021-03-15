import React, { useState } from "react";
import RightChevron from "../../../assets/icons/RightChevron";
import Subtask from "./Subtask";

function Task() {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={"task-container" + (isExpanded ? "--expanded" : "")}>
      <div className="task-header-container">
        <div
          className={"task-checkbox" + (isChecked ? "--checked" : "")}
          onClick={handleCheckBoxClick}
        />
        <span className={"task-title" + (isChecked ? "--checked" : "")}>
          Long task name
        </span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
      </div>

      <div
        className={"task-details-container" + (isExpanded ? "--expanded" : "")}
      >
        <Subtask />
      </div>
    </div>
  );
}
export default Task;
