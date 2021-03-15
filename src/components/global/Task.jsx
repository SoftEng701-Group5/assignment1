import React, { useState } from "react";
import RightChevron from "../../assets/icons/RightChevron";

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
      <div className="task-header-container">
        <div
          className={"task-checkbox" + (isChecked ? "--checked" : "")}
          onClick={handleCheckBoxClick}
        ></div>
        <span className={"task-title" + (isChecked ? "--checked" : "")}>
          Long task name
        </span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isOpen}/>
      </div>

      {isOpen && <div className="task-details-container">Hello I'm Open</div>}
    </div>
  );
}
export default Task;
