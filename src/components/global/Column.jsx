import React from "react";
import "../../stylesheets/components/global/column.scss";
import Task from "./Task/Task";


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

  return (
    <div className="container">

      <h1 className="heading">
        {heading}
        <div className="sorting">
          <button type="button" className="sortButton" onClick={onButtonClick} value={heading}>☰</button>
          {open &&
            <div className="dropdown">
                <button type="button" className="listItem" onClick={onListClick("1")} onKeyDown={onListClick("1")}>Newest First</button>
                <button type="button" className="listItem" onClick={onListClick("2")} onKeyDown={onListClick("2")}>Oldest First</button>
                <button type="button" className="listItem" onClick={onListClick("3")} onKeyDown={onListClick("3")}>Alphabetically</button>
            </div>
          }
        </div>
      </h1>

      <div className="column">

        <Task name="Assignment 1" />
        <Task name="Task 1" />
        <Task name="Task 2" />
        <Task name="Assignment 2" />
        <Task name="Task 1" />
        <Task name="Task 2" />
        <Task name="Task 3" />

      </div>
    </div>

  );
}

export default Column;
