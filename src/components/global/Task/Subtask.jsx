import React, { useState } from "react";

function Subtask(props) {
  const { name, checked } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckBoxClick = () => setIsChecked(!isChecked);
  

  return (
    <div className="subtask-container">
      <div
        className={`subtask-checkbox${  isChecked ? "--checked" : ""}`}
        onClick={handleCheckBoxClick}
        onKeyDown={handleCheckBoxClick}
      />
      <span className={`subtask-title${  isChecked ? "--checked" : ""}`}>
        {name}
      </span>
    </div>
  );
}
export default Subtask;
