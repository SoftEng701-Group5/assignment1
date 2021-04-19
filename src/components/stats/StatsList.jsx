import React from "react";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the goal list component used on the Dashboard. It
 * contains user defined goals which can display the goal details in a modal, and
 * a button to add new goals.
 */

function StatsList(props) {
  const { tasksCompleted, goalsAchieved } = props;
  const { isDarkMode } = React.useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? "stats-list" : "stats-list light"}>
      <h1 className="stats-list__title">Stats:</h1>
      <div className="stats-list__content">
        <div className="stats-list__stat">
          {tasksCompleted === 1
            ? `1 task completed`
            : `${tasksCompleted} tasks completed`}
        </div>
        <br />
        <div className="stats-list__stat">
          {goalsAchieved === 1
            ? `1 goal achieved`
            : `${goalsAchieved} goals achieved`}
        </div>
      </div>
    </div>
  );
}

export default StatsList;
