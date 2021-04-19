import React, { useState } from "react";
import RightChevron from "../../../assets/icons/RightChevron";
import DarkModeContext from "../../../services/theme-context";
import NewSubtask from "../../NewSubtask";
import Subtask from "./Subtask";
import { updateTask } from "../../../services/databaseService";

function Task(props) {
  const {
    name,
    onClick,
    onCheck,
    selected,
    endDate,
    label,
    startDate,
    taskId,
    checked,
    description,
    userId,
    expanded,
    subtasks,
    onNewSubtask,
  } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [isExpanded, setIsExpanded] = useState(expanded);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const handleCheckBoxClick = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    updateTask(taskId, {
      Description: description,
      End_date: endDate,
      Label: label,
      Name: name,
      Start_date: startDate,
      Task_id: taskId,
      User_id: userId,
      Is_complete: newIsChecked,
    }).then(onCheck());
  };
  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`task${isExpanded ? "--expanded" : ""}  ${
        isDarkMode ? "" : "light"
      }`}
    >
      <div className={`task__header${selected ? "--selected" : ""}`}>
        <div
          className={`task__checkbox${isChecked ? "--checked" : ""}`}
          onClick={handleCheckBoxClick}
          onKeyDown={handleCheckBoxClick}
          role="checkbox"
          aria-label="checkbox"
          tabIndex="0"
          aria-checked={isChecked}
        />
        <span
          className={`task__title${isChecked ? "--checked" : ""}`}
          onClick={onClick}
          onKeyDown={onClick}
          role="button"
          tabIndex="0"
        >
          {name}
        </span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
      </div>

      <div className={`task__content${isExpanded ? "--expanded" : ""}`}>
        <div className="task__subtask-list">
          {subtasks &&
            subtasks.map((subtask) => (
              <Subtask key={subtask.Subtask_id} name={subtask.Name} />
            ))}
        </div>

        <div className="task__new-subtask">
          <NewSubtask taskId={taskId} onNewSubtask={onNewSubtask} />
        </div>
      </div>
    </div>
  );
}
export default Task;
