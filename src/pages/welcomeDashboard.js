import React from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import DashboardPlaceholder from "../components/current-task/DashboardPlaceholder";
import StatsGoalsPlaceholder from "../components/current-task/StatsGoalsPlaceholder";
import "../stylesheets/welcomeDashboard.scss";

function welcomeDashboard() {
  return (
    <div className="row">
      <DashboardPlaceholder heading="Today's Tasks:" />
      <CurrentTask />
      <StatsGoalsPlaceholder headingStats="Stats:" headingGoals="Goals:" />
    </div>
  );
}

export default welcomeDashboard;
