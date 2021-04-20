import React, { useState } from "react";
import moment from "moment";
import RightChevron from "../../../assets/icons/RightChevron";
import DarkModeContext from "../../../services/theme-context";
import Subtask from "./Subtask";
import { updateTask } from "../../../services/databaseService";
import getIcon from "../componentFunctions";
import EditTaskModal from "../Modal";
import TextInput from "../TextInput";
import IconButton from "../IconButton";
import Button from "../Button";

function Task(props) {
  const {
    name,
    onClick,
    selected,
    endDate,
    label,
    startDate,
    taskId,
    checked,
    description,
    userId,
    expanded,
    subtasks,
    onNewTask,
  } = props;

  // formats firebase timestamp object into string foe textinput display
  function formatInitialDates(date) {
    if (date == null) {
      return {};
    }
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    date.toDate();
    const day = date.getDate().toString();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString();
    return `${year} + "-" + ${month} + "-" + ${day}`;
  }

  const [formattedStartDate, setFormattedStartDate] = useState(
    formatInitialDates(startDate)
  );
  const [formattedEndDate, setFormattedEndDate] = useState(
    formatInitialDates(endDate)
  );
  const [nameState, setName] = useState(name);
  const [labelState, setLabel] = useState(label);
  const [descriptionState, setDesc] = useState(description);
  const [startDateState, setStartDate] = useState(startDate);
  const [endDateState, setEndDate] = useState(endDate);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(checked);
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [display, setDisplay] = useState(false);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const handleCheckBoxClick = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    updateTask(taskId, {
      Description: descriptionState,
      End_date: endDateState ? endDateState.toDate() : null,
      Label: labelState,
      Name: nameState,
      Start_date: startDateState ? startDateState.toDate() : null,
      Task_id: taskId,
      User_id: userId,
      Is_complete: newIsChecked,
    });
  };

  // resets the values of all the fields in the modal so they are empty the next time the modal is opened
  function resetValues() {
    setStartDate(startDateState);
    setEndDate(endDateState);
    setDesc(descriptionState);
    setLabel(labelState);
    setName(nameState);
    setError("");
  }

  function handleCancelEditTask() {
    setDisplay(false);
    resetValues();
  }

  // these handlers handle changes in the textinput for dates to set both the formatted date and Date object
  function handleStartDateChange(startDateString) {
    setFormattedStartDate(startDateString);
    const stDate = startDateString ? moment(startDateString, true) : null;
    setStartDate(stDate);
  }

  function handleEndDateChange(endDateString) {
    setFormattedEndDate(endDateString);
    const edDate = endDateString ? moment(endDateString, true) : null;
    setEndDate(edDate);
  }

  // validates the fields of the newly edited task and makes a request to the database to update the task
  function handleEditTask() {
    // Validate user input (only task name is mandatory)
    if (!name) {
      setError("Please add a task name.");
      return;
    }

    // Validates the start and end date values(make sure end date is after start date)
    if (
      startDateState &&
      endDateState &&
      startDateState.isValid() &&
      endDateState.isValid() &&
      startDateState.isAfter(endDateState, "day")
    ) {
      setError("Start date must be before or on the same day as end date.");
      return;
    }

    // Persist task in firebase
    updateTask(taskId, {
      Description: descriptionState,
      End_date: endDateState ? endDateState.toDate() : null,
      Label: labelState,
      Name: nameState,
      Start_date: startDateState ? startDateState.toDate() : null,
      Task_id: taskId,
      User_id: userId,
    });
    setDisplay(false);
    resetValues();
    onNewTask();
  }

  /**
   * Called for any keypress while user is focused on the button
   * If the key pressed is enter, the supplied clickHandler function is called
   * @param event Keypress event
   */
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleEditTask();
    }
  }

  const handleIconClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`task${isExpanded ? "--expanded" : ""}  ${
        isDarkMode ? "" : "light"
      }`}
    >
      <div className={`task__header${selected ? "--selected" : ""}`}>
        <div className="editbutton-container">
          <div
            className="task__editbutton"
            onClick={() => setDisplay(true)}
            onKeyDown={() => setDisplay(true)}
            role="button"
            tabIndex="0"
          >
            {getIcon("edit")}
          </div>
          <EditTaskModal
            dismissOnClickOutside
            onCancel={handleCancelEditTask}
            show={display}
            handleKeyPress={handleKeyPress}
          >
            <div className="">
              <div className="hBox">
                <TextInput
                  label="Task Name"
                  textValue={nameState}
                  onChangeHandler={setName}
                />
                <TextInput
                  label="Label"
                  textValue={labelState}
                  onChangeHandler={setLabel}
                />
              </div>

              <TextInput
                label="Description"
                textValue={descriptionState}
                onChangeHandler={setDesc}
              />

              <div className="hBox">
                <TextInput
                  label="Start Date"
                  textValue={formattedStartDate}
                  onChangeHandler={handleStartDateChange}
                  type="date"
                />

                <TextInput
                  label="End Date"
                  textValue={formattedEndDate}
                  onChangeHandler={handleEndDateChange}
                  type="date"
                />
              </div>

              <div className="hBox">
                <div className="newtask-button-component-container">
                  <IconButton
                    icon="cross"
                    size="48px"
                    onClick={handleCancelEditTask}
                  />
                </div>
                <Button
                  text="Edit Task"
                  height="48px"
                  fontSize="22px"
                  handleOnClick={handleEditTask}
                />
              </div>
              <div className="hBox">
                <h4 className="error-message">{error}</h4>
              </div>
            </div>
          </EditTaskModal>
        </div>
        <div
          className={`task__checkbox${isChecked ? "--checked" : ""}`}
          onClick={handleCheckBoxClick}
          onKeyDown={handleCheckBoxClick}
          role="checkbox"
          aria-label="checkbox"
          tabIndex="0"
          aria-checked={isChecked}
        />
        <span
          className={`task__title${isChecked ? "--checked" : ""}`}
          onClick={onClick}
          onKeyDown={onClick}
          role="button"
          tabIndex="0"
        >
          {name}
        </span>
        <RightChevron handleOnClick={handleIconClick} isRotated={isExpanded} />
      </div>

      <div className={`task__content${isExpanded ? "--expanded" : ""}`}>
        <div className="task__subtask-list">
          {subtasks &&
            subtasks.map((subtask) => (
              <Subtask
                key={subtask.id}
                name={subtask.name}
                checked={subtask.checked}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default Task;
