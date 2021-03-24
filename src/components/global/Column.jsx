import React from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardTask from "./Task/BoardTask";

function Column(props) {
  const { column, tasks, subTasks, handleList } = props;

  const [open, setOpened] = React.useState(false);

  const onButtonClick = () => {
    setOpened(!open);
  };

  return (
    <div className="column__container">
      <h1 className="column__container__heading">
        {column.title}
        <div className="column__sorting">
          <button
            type="button"
            className="column__sorting__button"
            onClick={onButtonClick}
            value={column}
          >
            ☰
          </button>
          {open && (
            <div className="column__dropdown">
              <button
                type="button"
                className="column__dropdown__list"
                onClick={handleList(column.title, "date", false)}
              >
                Newest First
              </button>
              <button
                type="button"
                className="column__dropdown__list"
                onClick={handleList(column.title, "date", true)}
              >
                Oldest First
              </button>
              <button
                type="button"
                className="column__dropdown__list"
                onClick={handleList(column.title, "content", false)}
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
            className="column"
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

export default Column;
