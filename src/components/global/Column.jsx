import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "../../stylesheets/components/global/column.scss";
import Task from "./Task/Task";


function Column(props) {

  const { column, tasks, handleList } = props;

  const [open, setOpened] = React.useState(false);

  const onButtonClick = () => {
    setOpened(!open);
  }


  return (
    // This is where the droppable region should be 
    <div className="container">

      <h1 className="heading">
        {column.title}
        <div className="sorting">
          <button type="button" className="sortButton" onClick={onButtonClick} value={column}>☰</button>
          {open &&
            <div className="dropdown">
              <button type="button" className="listItem" onClick={handleList(column.title, "content")}>Newest First</button>
              <button type="button" className="listItem" onClick={handleList(column.title, "content")}>Oldest First</button>
              <button type="button" className="listItem" onClick={handleList(column.title, "content")}>Alphabetically</button>
            </div>
          }
        </div>
      </h1>

      <Droppable droppableId={column.title}>
        {provided => (
          <div
            className="column"
            innerRef={provided.innerRef}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              // const subTaskList = [];

              // // Get all the subtasks for this task
              // for (let pos = 0; pos < task.subTasks.length; pos+=1) {
              //   subTaskList.push(subTasks[task.subTasks[pos]])
              // }

              <Task id={task.id} name={task.content} index={index} expanded={task.expanded} checked={task.checked} boardTask={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>

  );
}

export default Column;
