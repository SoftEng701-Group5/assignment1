import React, { useState } from "react";

function Subtask() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
    console.log('e');
  };

  return (
    <div className="subtask-container">
      <div
        className={"subtask-checkbox" + (isChecked ? "--checked" : "")}
        onClick={handleCheckBoxClick}
      />
      <span className={"subtask-title" + (isChecked ? "--checked" : "")}>
        Long subtask name
      </span>
    </div>
  );
}
export default Subtask;
