import React, { useState } from "react";
import RightChevron from "../../assets/icons/RightChevron";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the Notes component that makes up the Current Task component.
 * The current task's notes are shown when the Notes component is expanded.
 */
function CurrentTaskNotes(props) {
  const { notes } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`current-task-notes${isExpanded ? "--expanded" : ""} ${
        isDarkMode ? "" : "light"
      }`}
    >
      <div className="current-task-notes__header">
        <span className="current-task-notes__title">Notes</span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
      </div>

      <div
        className={`current-task-notes__content${
          isExpanded ? "--expanded" : ""
        }`}
      >
        <ul className="current-task-notes__list">
          {notes && notes.map((note) => <li>{note}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CurrentTaskNotes;
