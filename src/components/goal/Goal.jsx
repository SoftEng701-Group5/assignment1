import React, { useState } from "react";
import { updateGoal } from "../../services/databaseService";
import DarkModeContext from "../../services/theme-context";

function Goal(props) {
  const {
    name,
    onClick,
    onCheck,
    selected,
    endDate,
    goalId,
    checked,
    description,
    userId,
  } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const handleCheckBoxClick = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    updateGoal(goalId, {
      Description: description,
      End_date: endDate,
      Goal_id: goalId,
      Is_complete: newIsChecked,
      Name: name,
      User_id: userId,
    }).then(onCheck());
  };

  return (
    <div className={`goal ${isDarkMode ? "" : "light"}`}>
      <div className={`goal__header${selected ? "--selected" : ""}`}>
        <div
          className={`goal__checkbox${isChecked ? "--checked" : ""}`}
          onClick={handleCheckBoxClick}
          onKeyDown={handleCheckBoxClick}
          role="checkbox"
          aria-label="checkbox"
          tabIndex="0"
          aria-checked={isChecked}
        />
        <span
          className={`goal__title${isChecked ? "--checked" : ""}`}
          onClick={onClick}
          onKeyDown={onClick}
          role="button"
          tabIndex="0"
        >
          {name}
        </span>
      </div>
    </div>
  );
}
export default Goal;
