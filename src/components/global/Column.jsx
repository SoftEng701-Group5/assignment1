import React from "react";
import "../../stylesheets/components/global/column.scss";
import Task from "./Task/Task";
import { Droppable } from "react-beautiful-dnd";
import "../../stylesheets/components/global/column.scss"
import Subtask from "./Task/Subtask";


function Column(props) {

  const { heading } = props;
  const [open, setOpened] = React.useState(false);

  const onButtonClick = () => {
    setOpened(!open);
  }

  const onListClick = param => () => {
    console.log(param);
    setOpened(!open);
  }

  const { column, tasks, subTasks } = props;

  return (
    // This is where the droppable region should be 
    <div className="container">

      <h1 className="heading">
        {column.title}
        <div className="sorting">
          <button type="button" className="sortButton" onClick={onButtonClick} value={heading}>☰</button>
          {open &&
            <div className="dropdown">
              <button type="button" className="listItem" onClick={onListClick("1")} onKeyDown={onListClick("1")}>Newest First</button>
              <button type="button" className="listItem" onClick={onListClick("2")} onKeyDown={onListClick("2")}>Oldest First</button>
              <button type="button" className="listItem" onClick={onListClick("3")} onKeyDown={onListClick("3")}>Alphabetically</button>
            </div>
          }
        </div></h1>

      <Droppable droppableId={column.title}>
        {provided => (
          <div
            className="column"
            innerRef={provided.innerRef}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => {
              var subTaskList = [];

              // Get all the subtasks for this task
              for (var pos = 0; pos < task.subTasks.length; pos++) {
                subTaskList.push(subTasks[task.subTasks[pos]])
              }

              return <Task id={task.id} name={task.content} index={index} expanded={task.expanded} checked={task.checked} boardTask={task} subtasks={subTaskList} />
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>

  );
}

export default Column;
