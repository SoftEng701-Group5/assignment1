import React, { useState } from "react";
import DarkModeContext from "../../../services/theme-context";

function Goal(props) {
  const { name, checked, selected, onClick } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const handleCheckBoxClick = () => setIsChecked(!isChecked);

  return (
    <div
      className={`goal${isExpanded ? "--expanded" : ""}  ${
        isDarkMode ? "" : "light"
      }`}
    >
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
export default goal;
