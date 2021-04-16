import React from "react";
import IconButton from "../global/IconButton";
import NewGoalModal from "../global/Modal";

/**
 * This component is used to generate a add goal button("+") that , when clicked, prompts the new goal modal
 * in which the user can create a new goal by filling put the fields and clicking the "add goal" button
 * This component also presists the goal on the firebase database
 */
export default function GoalInfo(props) {
  const { goal, modalOpen, onModalClose } = props;

  return (
    <div className="newGoal-container">
      <NewGoalModal
        dismissOnClickOutside
        onCancel={onModalClose}
        show={modalOpen}
      >
        <div className="goal-info">
          <div className="goal-info__header">
            <span className="goal-info__header__title">
              {goal ? goal.Name : ""}
            </span>
            <IconButton
              className="goal-info__header__"
              icon="cross"
              size="48px"
              onClick={onModalClose}
            />
          </div>
          <br />
          <div className="goal-info__content">
            {goal ? goal.Description : ""}
          </div>
        </div>
      </NewGoalModal>
    </div>
  );
}
