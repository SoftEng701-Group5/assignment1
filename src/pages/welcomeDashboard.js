import React from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import DashboardPlaceholder from "../components/current-task/DashboardPlaceholder";
import "../stylesheets/welcomeDashboard.scss";

function welcomeDashboard() {
  return (
      <div className="row">
        <DashboardPlaceholder heading="Today's Tasks:" placeholderType="big"/>
        {/* <DashboardPlaceholder heading="Goals:" placeholderType="medium"/> */}
        <CurrentTask />
        <DashboardPlaceholder heading="Stats:" placeholderType="small"/>
      </div>
  );
}

export default welcomeDashboard;