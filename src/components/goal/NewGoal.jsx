import React, { useState, useContext } from "react";
import moment from "moment";
import NewGoalModal from "../global/Modal";
import Button from "../global/Button";
import TextInput from "../global/TextInput";
import IconButton from "../global/IconButton";
import AddButton from "../global/AddButton";
import { createGoal } from "../../services/databaseService";
import { AuthContext } from "../../services/providers/authProvider";

/**
 * This component is used to generate a add goal button("+") that , when clicked, prompts the new goal modal
 * in which the user can create a new goal by filling put the fields and clicking the "add goal" button
 * This component also presists the goal on the firebase database
 */
export default function NewGoal(props) {
  const { onNewGoal } = props;

  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(AuthContext);

  // resets the values of all the fields in the modal so they are empty the next time the modal is opened
  function resetValues() {
    setEndDate("");
    setDesc("");
    setName("");
    setError("");
  }

  // sets the 'show' prop in the modal to false so that the modal disappears and resets the modal values
  function handleCancelNewGoal() {
    setDisplay(false);
    resetValues();
  }

  // validates the fields of the newly created goal and makes a request to the database to presist the new goal
  async function handleAddNewGoal() {
    const edDate = endDate ? moment(endDate, true) : null;

    // Validate user input (only goal name is mandatory)
    if (!name) {
      setError("Please add a goal name.");
      return;
    }

    // Persist goal in firebase
    await createGoal(
      desc,
      name,
      currentUser.uid,
      edDate ? edDate.toDate() : null
    );
    setDisplay(false);
    onNewGoal();
    resetValues();
  }

  /**
   * Called for any keypress while user is focused on the button
   * If the key pressed is enter, the supplied clickHandler function is called
   * @param event Keypress event
   */
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddNewGoal();
    }
  }

  return (
    <div className="new-goal">
      <AddButton onClick={() => setDisplay(true)} />
      <NewGoalModal
        dismissOnClickOutside
        onCancel={handleCancelNewGoal}
        show={display}
        handleKeyPress={handleKeyPress}
      >
        <div className="new-goal__container">
          <TextInput
            label="Goal Name"
            textValue={name}
            onChangeHandler={setName}
          />

          <TextInput
            label="Description"
            textValue={desc}
            onChangeHandler={setDesc}
            textArea
          />

          <TextInput
            label="Planned to achieve by"
            textValue={endDate}
            placeholderValue="dd/mm/yyyy"
            onChangeHandler={setEndDate}
            type="date"
          />

          <div className="new-goal__container__footer">
            <IconButton
              icon="cross"
              size="48px"
              onClick={handleCancelNewGoal}
            />
            <div className="new-goal__container__footer__button">
              <Button
                text="Add Goal"
                icon="plus"
                height="48px"
                fontSize="22px"
                handleOnClick={handleAddNewGoal}
              />
            </div>
          </div>
          <h4 className="new-goal__container__error-message">{error}</h4>
        </div>
      </NewGoalModal>
    </div>
  );
}
