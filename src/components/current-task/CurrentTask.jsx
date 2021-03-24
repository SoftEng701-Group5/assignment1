import React, { useState, useContext } from "react";
import IconButton from "../global/IconButton";
import Button from "../global/Button";
import Task from "../global/Task/Task";
import CurrentTaskNotes from "./CurrentTaskNotes";
import TimerConfig from "./TimerConfig";
import CurrentTaskTimer from "./CurrentTaskTimer";
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
function CurrentTask() {
  const [currentTask] = useContext(CurrentTaskContext);
  const [, setWorkTimerMemory] = useContext(WorkTimerMemoryContext);
  const [, setBreakTimerMemory] = useContext(BreakTimerMemoryContext);
  const [, setShowModal] = useContext(TimerModalShowContext);
  const [, setPlay] = useContext(PlayContext);
  const [isChecked] = useContext(FullscreenContext);

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

  const handleConfigButtonClicked = () => {
    setShowConfig(!showConfig);
  };

  const handleStartButtonClicked = () => {
    setShowConfig(false);
    setShowTimer(true);
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

  return (
    <div className="current-task">
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
                subtasks={currentTask.Subtasks}
              />
              <CurrentTaskNotes notes={[currentTask.Description]} />
            </div>
          )}

          {showTimer ? (
            <CurrentTaskTimer timerConfigValues={timerConfigValues} />
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
