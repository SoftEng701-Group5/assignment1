import React, { useState } from "react";

function Subtask(props) {
  const { subtaskName, checked } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckBoxClick = () => setIsChecked(!isChecked);
  

  return (
    <div className="subtask-container">
      <div
        className={"subtask-checkbox" + (isChecked ? "--checked" : "")}
        onClick={handleCheckBoxClick}
      />
      <span className={"subtask-title" + (isChecked ? "--checked" : "")}>
        {subtaskName}
      </span>
    </div>
  );
}
export default Subtask;
