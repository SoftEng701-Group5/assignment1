import React from "react";
import "../../stylesheets/components/global/column.scss"
import Task from "./Task/Task"


function Column(props) {

  const { heading } = props;

  return (
      <div className="container">

        <h1 className="heading"> {heading} </h1>
        
        <div className = "column">

          <Task name = "Assignment 1"/>
          <Task name = "Task 1"/>
          <Task name = "Task 2"/>
          <Task name = "Assignment 2"/>
          <Task name = "Task 1" />
          <Task name = "Task 2"/>
          <Task name = "Task 3"/>
          
        </div>
      </div>

  );
}

export default Column;
