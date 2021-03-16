import React, { useState } from "react";
import RightChevron from "../../../assets/icons/RightChevron";
import Subtask from "./Subtask";

function Task(props) {
  const { taskName, checked, subtasks } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCheckBoxClick = () => setIsChecked(!isChecked);
  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    <div className={"task-container" + (isExpanded ? "--expanded" : "")}>
      <div className="task-header-container">
        <div
          className={"task-checkbox" + (isChecked ? "--checked" : "")}
          onClick={handleCheckBoxClick}
        />
        <span className={"task-title" + (isChecked ? "--checked" : "")}>
          {taskName}
        </span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
      </div>

      <div
        className={"task-details-container" + (isExpanded ? "--expanded" : "")}
      >
        {subtasks.map((s) => (
          <Subtask subtaskName={s.subtaskName} checked={s.checked} />
        ))}
      </div>
    </div>
  );
}
export default Task;
