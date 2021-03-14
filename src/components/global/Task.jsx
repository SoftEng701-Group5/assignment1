import React, { useState } from "react";

function Task() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="task-container">
      <div className="task-header">
        <div
          className={"task-checkbox" + (isChecked ? "--checked" : "")}
          onClick={handleCheckBoxClick}
        ></div>
        <span className={"task-title" + (isChecked ? "--checked" : "")}>
          Long task name
        </span>
        <button onClick={handleIconClick}>Open</button>
      </div>

      {isOpen && <div>Hello I'm Open</div>}
    </div>
  );
}
export default Task;
