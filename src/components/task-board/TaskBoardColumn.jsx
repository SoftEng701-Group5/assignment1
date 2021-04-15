import React, { useEffect, useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import DarkModeContext from "../../services/theme-context";
import BoardTask from "../global/Task/BoardTask";

function TaskBoardColumn(props) {
  const {
    column,
    tasks,
    subTasks,
    sortListOpened,
    onSortButtonClick,
    handleSortList,
  } = props;
  const myRef = useRef();

  const { isDarkMode } = React.useContext(DarkModeContext);

  useEffect(() => {
    /**
     * handler for mouse click event, close the dropdown list when mouse clicked
     * the sort list
     * @param {*} e The mouse clicked event
     */
    const handleOutsideClick = (e) => {
      if (!myRef.current.contains(e.target)) {
        if (sortListOpened) {
          onSortButtonClick(column);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  return (
    <div className={isDarkMode ? "column-container" : "column-container light"}>
      <h1 className="column-container__heading">
        {column.title}
        <div className="column__sorting" ref={myRef}>
          <button
            type="button"
            className="column__sorting__button"
            onClick={() => onSortButtonClick(column)}
            value={column}
          >
            ☰
          </button>
          {sortListOpened && (
            <div className="column__dropdown">
              <button
                type="button"
                className="column__dropdown__list"
                onClick={handleSortList(column.title, "date", false)}
              >
                Newest First
              </button>
              <button
                type="button"
                className="column__dropdown__list"
                onClick={handleSortList(column.title, "date", true)}
              >
                Oldest First
              </button>
              <button
                type="button"
                className="column__dropdown__list"
                onClick={handleSortList(column.title, "content", false)}
              >
                Alphabetically
              </button>
            </div>
          )}
        </div>
      </h1>

      {/* Droppable identified by it's title. Dnd library requires the contents of the droppable to be wrapped in (provided) */}
      <Droppable droppableId={column.title}>
        {(provided) => (
          <div
            className={isDarkMode ? "column" : "column light"}
            // References and props for the drag-and-drop library
            innerRef={provided.innerRef}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {/* Create the list of tasks using a mapping function */}
            {tasks.map((task, index) => {
              const subTaskList = Object.values(subTasks);
              const filteredSubTasks = [];

              // Get all the subtasks for this task
              for (let pos = 0; pos < subTaskList.length; pos += 1) {
                if (task.subTasks.includes(subTaskList[pos].id)) {
                  filteredSubTasks.push(subTaskList[pos]);
                }
              }

              return (
                <BoardTask
                  id={task.id}
                  name={task.content}
                  index={index}
                  expanded={task.expanded}
                  checked={task.checked}
                  boardTask={task}
                  subtasks={filteredSubTasks}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskBoardColumn;
