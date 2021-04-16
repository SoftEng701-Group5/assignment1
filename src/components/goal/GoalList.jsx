import React, { useContext } from "react";
import Goal from "./Goal";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the goal list component used on the Dashboard. It
 * contains user defined goals which can display the goal details in a modal, and
 * a button to add new goals.
 */

function GoalList(props) {
  // const { onGoalClick, goals, onNewGoal } = props;
   const { goals } = props;
  const { isDarkMode } = React.useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? "goal-list" : "goal-list light"}>
      <h1 className="goal-list__title">Today&apos;s goals:</h1>
      <div className="goal-list__content">
        <div className="goal-list__goals">
          {goals.map((g) => (
            <div key={g.goal_id}>
              <Goal
                name={t.Name}
                onClick={() => onGoalClick(t)}
                selected={currentgoal && g.goal_id === currentgoal.goal_id}
              />
            </div>
          ))}
        </div>

        <div className="add-goal-button-container">
          {/* <NewGoal onNewGoal={onNewGoal} /> */}
        </div>
      </div>
    </div>
  );
}

export default goalList;
