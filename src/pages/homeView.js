import React from "react";
import Button from "../components/global/Button";
import TaskList from "../components/global/TaskList";

function homeView() {
  return (
    <div>
      <Button icon={"rightArrow"} text={"Dashboard"} path={"/home"} />
        <TaskList />
    </div>
  );
}

export default homeView;
