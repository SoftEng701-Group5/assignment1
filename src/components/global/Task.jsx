import React, { useState } from "react";

function Task() {

    const [isChecked, setIsChecked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const handleCheckBoxClick = () => {
        setIsChecked(!isChecked);
    }

    const handleIconClick = () => {
        setIsOpen(!isOpen);
    }

  return (
      <>
    <div className="task-header">
        <div className={"task-checkbox" + (isChecked ? "--checked" : "")}  onClick={handleCheckBoxClick}></div>
        <label className="task-title">Heading</label>
        <button onClick={handleIconClick}>Open</button>
    </div>

    {isOpen && (
        <div>
            Hello I'm Open
        </div>
    )}
    </>
  );

}
export default Task;
