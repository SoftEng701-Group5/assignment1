import React from "react";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the goal list component used on the Dashboard. It
 * contains user defined goals which can display the goal details in a modal, and
 * a button to add new goals.
 */

function StatsList(props) {
  const { tasksCompleted } = props;
  const { isDarkMode } = React.useContext(DarkModeContext);

  // const [numGoalsAchieved, setNumGoalsAchieved] = useState("?");

  return (
    <div className={isDarkMode ? "stats-list" : "stats-list light"}>
      <h1 className="stats-list__title">Stats:</h1>
      <div className="stats-list__content">
        <div className="stats-list__stat">
          {`Tasks completed: ${tasksCompleted}`}
        </div>
        <br />
        <div className="stats-list__stat">
          {`Tasks completed: ${tasksCompleted}`}
        </div>
      </div>
    </div>
  );
}

export default StatsList;
