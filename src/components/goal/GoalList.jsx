import React, { useState } from "react";
import Goal from "./Goal";
import NewGoal from "./NewGoal";
import GoalInfo from "./GoalInfo";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the goal list component used on the Dashboard. It
 * contains user defined goals which can display the goal details in a modal, and
 * a button to add new goals.
 */

function GoalList(props) {
  const { goals, onNewGoal } = props;
  const [currentGoal, setCurrentGoal] = useState();
  const { isDarkMode } = React.useContext(DarkModeContext);
  const [goalModalOpen, setGoalModalOpen] = useState(false);

  const handleGoalClick = (goal) => {
    if (goal === currentGoal) {
      setGoalModalOpen(true);
    } else {
      setCurrentGoal(goal);
    }
  };

  const handleGoalModalClose = () => {
    setGoalModalOpen(false);
  };

  return (
    <div className={isDarkMode ? "goal-list" : "goal-list light"}>
      <h1 className="goal-list__title">Goals:</h1>
      <div className="goal-list__content">
        <div className="goal-list__goals">
          {goals.map((g) => (
            <div key={g.Goal_id}>
              <Goal
                name={g.Name}
                onClick={() => handleGoalClick(g)}
                selected={currentGoal && g.Goal_id === currentGoal.Goal_id}
                endDate={g.End_date}
                goalId={g.Goal_id}
                checked={g.Is_complete}
                description={g.Description}
                userId={g.User_id}
              />
            </div>
          ))}
        </div>

        <div className="add-goal-button-container">
          <NewGoal onNewGoal={onNewGoal} />
        </div>
      </div>

      <GoalInfo
        goal={currentGoal}
        modalOpen={goalModalOpen}
        onModalClose={handleGoalModalClose}
      />
    </div>
  );
}

export default GoalList;
