import React, { useState, useContext } from "react";
import IconButton from "../global/IconButton";
import Button from "../global/Button";
import Task from "../global/Task/Task";
import CurrentTaskNotes from "./CurrentTaskNotes";
import TimerConfig from "./TimerConfig";
import CurrentTaskTimer from "./CurrentTaskTimer";
import DarkModeContext from "../../services/theme-context";
import { updateTask } from "../../services/databaseService";
import {
  BreakTimerContext,
  WorkTimerContext,
  WorkTimerMemoryContext,
  BreakTimerMemoryContext,
  PlayContext,
  TimerModalShowContext,
  CurrentTaskContext,
  FullscreenContext,
} from "../timer-modal/TimerContextProvider";

/**
 * This function represents the Current Task component which shows
 * a detailed view of a selected task from Today's Tasks, along
 * with a timer that can be used to complete the current task.
 * Timer configuration is available to the user.
 */
function CurrentTask(props) {
  const { subtasks, onNewSubtask } = props;
  const [currentTask] = useContext(CurrentTaskContext);
  const [, setWorkTimerMemory] = useContext(WorkTimerMemoryContext);
  const [, setBreakTimerMemory] = useContext(BreakTimerMemoryContext);
  const [, setShowModal] = useContext(TimerModalShowContext);
  const [, setPlay] = useContext(PlayContext);
  const [isChecked] = useContext(FullscreenContext);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const [, setWorkTimer] = useContext(WorkTimerContext);
  const [, setBreakTimer] = useContext(BreakTimerContext);
  const [showConfig, setShowConfig] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timerConfigValues, setTimerConfigValues] = useState({
    workMinutes: 25,
    workSeconds: 0,
    breakMinutes: 5,
    breakSeconds: 0,
    autoFullScreen: false,
  });

  /**
   * Helper function to help validate inputted times for the timer, they are only valid if they are non-NaN
   */
  function isValidTimes() {
    if (
      Number.isNaN(timerConfigValues.workMinutes) ||
      Number.isNaN(timerConfigValues.workSeconds) ||
      Number.isNaN(timerConfigValues.breakMinutes) ||
      Number.isNaN(timerConfigValues.breakSeconds)
    ) {
      return false;
    }
    return true;
  }

  const handleConfigButtonClicked = () => {
    setShowConfig(!showConfig);
  };

  const handleStartButtonClicked = () => {
    // If not valid, do not start timer
    if (!isValidTimes()) {
      return;
    }
    setShowConfig(false);
    setShowTimer(true);
    if (Number.isNaN(timerConfigValues.workMinutes)) {
      timerConfigValues.workMinutes = 0;
    }
    if (Number.isNaN(timerConfigValues.workSeconds)) {
      timerConfigValues.workSeconds = 0;
    }
    if (Number.isNaN(timerConfigValues.breakMinutes)) {
      timerConfigValues.breakMinutes = 0;
    }
    if (Number.isNaN(timerConfigValues.breakSeconds)) {
      timerConfigValues.breakSeconds = 0;
    }
    const workSec =
      timerConfigValues.workMinutes * 60 + timerConfigValues.workSeconds;
    const breakSec =
      timerConfigValues.breakMinutes * 60 + timerConfigValues.breakSeconds;
    setWorkTimer({ seconds: workSec });
    setBreakTimer({ seconds: breakSec });

    setWorkTimerMemory({ seconds: workSec });
    setBreakTimerMemory({ seconds: breakSec });

    if (isChecked) setShowModal(true);

    setPlay(true);
  };

  // persists changes in the description to the database
  async function handleSaveNote(newDescription) {
    currentTask.Description = newDescription;
    await updateTask(currentTask.Task_id, currentTask);
  }

  return (
    <div className={isDarkMode ? "current-task" : "current-task light"}>
      <h1 className="current-task__title">Current Task:</h1>
      {currentTask ? (
        <div className="current-task__content">
          {showConfig ? (
            <TimerConfig setTimerConfigValues={setTimerConfigValues} />
          ) : (
            <div className="current-task__info">
              <Task
                expanded
                name={currentTask.Name}
                subtasks={subtasks.filter(
                  (subtask) => subtask.Task_id === currentTask.Task_id
                )}
                endDate={currentTask.End_date}
                label={currentTask.Label}
                startDate={currentTask.Start_date}
                taskId={currentTask.Task_id}
                checked={currentTask.Is_complete}
                description={currentTask.Description}
                userId={currentTask.User_id}
                onNewSubtask={onNewSubtask}
                onCheck={() => {}}
              />
              <CurrentTaskNotes
                notes={[currentTask.Description]}
                handleSaveNote={handleSaveNote}
              />
            </div>
          )}

          {showTimer ? (
            <CurrentTaskTimer
              timerConfigValues={timerConfigValues}
              subtasks={subtasks}
              onNewSubtask={onNewSubtask}
            />
          ) : (
            <div className="current-task__buttons">
              <Button
                className="current-task__"
                text="START"
                height="3rem"
                fontSize="1.2rem"
                handleOnClick={handleStartButtonClicked}
              />
              <div>
                <IconButton
                  className="current-task__"
                  icon="settings"
                  onClick={handleConfigButtonClicked}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="current-task__empty">
          <h1>Click on a task from the left</h1>
        </div>
      )}
    </div>
  );
}

export default CurrentTask;
