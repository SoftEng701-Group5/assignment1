import React, { useState, useEffect } from "react";
import RightChevron from "../../assets/icons/RightChevron";
import DarkModeContext from "../../services/theme-context";
import Button from "../global/Button";

/**
 * This function represents the Notes component that makes up the Current Task component.
 * The current task's notes are shown when the Notes component is expanded and can be edited by clicking the save button.
 */
function CurrentTaskNotes(props) {
  const { notes, handleSaveNote } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const [isEdited, setIsEdited] = useState(false);
  const [editedNotes, setEditedNotes] = useState(notes);
  const handleIconClick = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    setEditedNotes(notes);
    setIsEdited(false);
  }, [notes]);

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
      <form
        className={`current-task-notes__content${
          isExpanded ? "--expanded" : ""
        }`}
      >
        <div className="current-task-notes-container">
          <div className="current-task-notes-text-container">
            <textarea
              className="current-task-notes-text-area"
              value={editedNotes}
              // upon typing, edits are stored as state
              onChange={(e) => {
                setIsEdited(true);
                setEditedNotes(e.target.value);
              }}
            />
          </div>
          <div className="save-cancel-button-container">
            <Button
              // if no edits have been made, button appears disabled
              className={`save-and-cancel${!isEdited ? "--disabled" : ""}`}
              text="Save"
              height="24px"
              fontSize="11px"
              handleOnClick={() => {
                // notes are only saved to the database if they are edited
                if (isEdited) {
                  setIsEdited(false);
                  handleSaveNote(editedNotes);
                }
              }}
            />
            <Button
              className={`save-and-cancel${!isEdited ? "--disabled" : ""}`}
              text="Cancel"
              height="24px"
              fontSize="11px"
              handleOnClick={() => {
                if (isEdited) {
                  setIsEdited(false);
                  setEditedNotes(notes);
                }
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default CurrentTaskNotes;
