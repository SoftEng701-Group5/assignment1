import React, { useState, useContext } from "react";
import AddButton from "./global/AddButton";
import NewSubtaskModal from "./global/Modal";
import IconButton from "./global/IconButton";
import Button from "./global/Button";
import TextInput from "./global/TextInput";
import { createSubtask } from "../services/databaseService";
import { AuthContext } from "../services/providers/authProvider";

export default function NewSubtask(props) {
  const { taskId, onNewSubtask } = props;

  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(AuthContext);

  // reset the values of the new subtask modal so fields are empty when it is reopened.
  function resetValues() {
    setName("");
    setError("");
  }

  // closes the new subtask modal
  function handleCancelNewSubtask() {
    setDisplay(false);
    resetValues();
  }

  // makes a request to the database to persist the new subtask.
  async function handleAddNewSubtask() {
    if (!name) {
      setError("Please enter a subtask name.");
      return;
    }

    createSubtask(name, taskId, currentUser.uid);

    onNewSubtask();
    setDisplay(false);
    resetValues();
  }

  /**
   * called for any key press while user is focused on the modal.
   * if the user presses "Enter", the supplied clickHandler function is called.
   * @param {*} event Keypress event
   */
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddNewSubtask();
    }
  }

  return (
    <div className="new-subtask-container">
      <AddButton onClick={() => setDisplay(true)} />
      <div className="new-subtask-modal">
        <NewSubtaskModal
          dismissOnClickOutside
          onCancel={handleCancelNewSubtask}
          show={display}
          handleKeyPress={handleKeyPress}
        >
          <div className="new-subtask-modal__title-input">
            <TextInput
              label="Subtask Name"
              textValue={name}
              onChangeHandler={setName}
            />
          </div>
          <div className="new-subtask-modal__button-container">
            <div className="new-subtask-modal__button-container__cancel">
              <IconButton
                icon="cross"
                size="48px"
                onClick={handleCancelNewSubtask}
              />
            </div>
            <div className="new-subtask-modal__button-container__confirm">
              <Button
                text="Add Task"
                icon="plus"
                height="48px"
                fontSize="22px"
                handleOnClick={handleAddNewSubtask}
              />
            </div>
          </div>
          <div className="new-subtask-modal__error-message">
            <h4>{error}</h4>
          </div>
        </NewSubtaskModal>
      </div>
    </div>
  );
}
