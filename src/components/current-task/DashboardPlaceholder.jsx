import React from "react";
import "../../stylesheets/components/current-task/dashboardPlaceholder.scss";

function DashboardPlaceholder(props) {
    const {heading, placeholderType} = props;
    // let placeholderSize;
    // placeholderType === "big" ? (placeholderSize="big") : (placeholderSize="small");
    return (
        <div className="container">
            <h1 className="heading"> {heading} </h1>
            <div className={(placeholderType === "big" ? "big" : "small")} />
        </div>
    );
}

export default DashboardPlaceholder;