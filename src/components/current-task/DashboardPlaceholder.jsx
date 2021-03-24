import React from "react";
import "../../stylesheets/components/current-task/dashboardPlaceholder.scss";

function DashboardPlaceholder(props) {
  const { heading } = props;
  return (
    <div className="container">
      <h1 className="heading"> {heading} </h1>
      <div className="placeholder" />
    </div>
  );
}

export default DashboardPlaceholder;
