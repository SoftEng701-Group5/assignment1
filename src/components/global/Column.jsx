import React from "react";
// import { Link } from "react-router-dom";
import "../../stylesheets/components/global/column.scss"
import Subtask from "./Task/Subtask";
import Task from "./Task/Task"

// import getIcon from "./componentFunctions";

function Column(props) {

  const { heading } = props;

  return (
      <div className="container">
        <h1 className="heading"> {heading} </h1>
        <div className = "column">
          <Task name = "Assignment 1"/>
          <Task name = "Task 1"/>
          <Task name = "Task 2"/>
          <Task name = "Task 3"/>
          <Task name = "Assignment 2"/>
          <Task name = "Task 1" subtask = "task"/>
          <Subtask name = "task"/>
          <Task name = "Task 2"/>
          <Task name = "Task 3"/>
          
          
        </div>
      </div>

  );
}

export default Column;
