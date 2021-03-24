import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import RightChevron from "../../../assets/icons/RightChevron";
import TaskBoardSampleData from "../../../assets/TaskBoardSampleData";
import Subtask from "./Subtask";

function BoardTask(props) {
  const { id, name, index, checked, expanded, subtasks, boardTask } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleCheckBoxClick = () => {
    // Update the sample data file
    if (boardTask) {
      TaskBoardSampleData.tasks[boardTask.id].checked = !isChecked;
    }
    setIsChecked(!isChecked);
  };
  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    // Task wrapped in a draggable instance. Dnd library requires the contents of a draggable to be wrapped in (provided)
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className={`task${isExpanded ? "--expanded" : ""}`}
          // Props and references for the drag-and-drop library
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          ref={provided.innerRef}
        >
          <div className="task__header">
            <div
              className={`task__checkbox${isChecked ? "--checked" : ""}`}
              onClick={handleCheckBoxClick}
              onKeyDown={handleCheckBoxClick}
              role="checkbox"
              aria-label="checkbox"
              tabIndex="0"
              aria-checked={isChecked}
            />
            <span className={`task__title${isChecked ? "--checked" : ""}`}>
              {name}
            </span>
            <RightChevron
              handleOnClick={handleIconClick}
              isRotated={isExpanded}
            />
          </div>

          <div className={`task__content${isExpanded ? "--expanded" : ""}`}>
            <div className="task__subtask-list">
              {subtasks &&
                subtasks.map((subtask) => (
                  <Subtask
                    key={subtask.id}
                    name={subtask.name}
                    checked={subtask.checked}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default BoardTask;
