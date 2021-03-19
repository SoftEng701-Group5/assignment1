import React from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import "../stylesheets/welcomeDashboard.scss";

function welcomeDashboard() {
  return (
      <div className="row">
        <CurrentTask />
      </div>
  );
}

export default welcomeDashboard;