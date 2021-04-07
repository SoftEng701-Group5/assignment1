import React, { useState } from "react";
import RightChevron from "../../assets/icons/RightChevron";
import Button from "../global/Button";

/**
 * This function represents the Notes component that makes up the Current Task component.
 * The current task's notes are shown when the Notes component is expanded.
 */
function CurrentTaskNotes(props) {
  const { notes, handleSaveNote } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNotes, setNotes] = useState(notes);
  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    <div className={`current-task-notes${isExpanded ? "--expanded" : ""}`}>
      <div className="current-task-notes__header">
        <span className="current-task-notes__title">Notes</span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
      </div>
      <form
        className={`current-task-notes__content${
          isExpanded ? "--expanded" : ""
        }`}
      >
        <textarea
          className="current-task-notes-text-area"
          value={newNotes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
        <Button
          text="Save"
          height="24px"
          fontSize="11px"
          handleOnClick={() => {
            handleSaveNote(newNotes);
          }}
        />
      </form>
    </div>
  );
}

export default CurrentTaskNotes;
