import React from "react";
import "../../stylesheets/components/current-task/StatsGoalsPlaceholder.scss";

function StatsGoalsPlaceholder(props) {
    const { headingStats, headingGoals } = props;
    return (
        <div className="container">
            <h1 className="heading"> {headingStats} </h1>
            <div className="placeholderStats" />
            <h1 className="heading"> {headingGoals} </h1>
            <div className="placeholderGoals" />
        </div>
    );
}

export default StatsGoalsPlaceholder;