import React, { useEffect, useContext } from "react";
import {
  WorkTimerContext,
  PlayContext,
  BreakTimerContext,
  TimerModalShowContext,
  WorkTimerMemoryContext,
  BreakTimerMemoryContext,
} from "../timer-modal/TimerContextProvider";
import IconButton from "../global/IconButton";
import TimerModal from "../timer-modal/TimerModal";

/**
 * This function represents the Timer component of the Current Tasks component.
 * The timer can be used when a user wishes to complete a task using the
 * pomodoro technique. Timer configuration is available to the user.
 */
export default function CurrentTaskTimer() {
  const [workTimer, setWorkTimer] = useContext(WorkTimerContext);
  const [play, setPlay] = useContext(PlayContext);
  const [breakTimer, setBreakTimer] = useContext(BreakTimerContext);
  const [showModal, setShowModal] = useContext(TimerModalShowContext);

  const [workTimerMemory] = useContext(WorkTimerMemoryContext);
  const [breakTimerMemory] = useContext(BreakTimerMemoryContext);

  const workMinutes = Math.floor(workTimer.seconds / 60);
  const workSeconds = workTimer.seconds % 60;

  const breakMinutes = Math.floor(breakTimer.seconds / 60);
  const breakSeconds = breakTimer.seconds % 60;

  const timerFormat = (m, s) => {
    let timerStr = "";

    if (Number.isNaN(m) && Number.isNaN(s)) {
      return "00:00";
    }

    if (m < 10) {
      timerStr += "0";
    }
    timerStr += m;
    timerStr += ":";

    if (s < 10) {
      timerStr += "0";
    }
    timerStr += s;

    return timerStr;
  };

  useEffect(() => {
    let interval = null;

    if (workTimer.seconds > 0 && play) {
      interval = setTimeout(
        () =>
          setWorkTimer(
            workTimer.seconds !== 0 && { seconds: workTimer.seconds - 1 }
          ),
        1000
      );
    }

    return () => clearTimeout(interval);
  }, [play, workTimer, setWorkTimer]);

  useEffect(() => {
    let interval = null;

    if (workTimer.seconds === 0 && play) {
      interval = setTimeout(
        () =>
          setBreakTimer(
            breakTimer.seconds !== 0 && {
              seconds: breakTimer.seconds - 1,
            }
          ),
        1000
      );
    }

    return () => clearTimeout(interval);
  }, [play, workTimer, breakTimer, setBreakTimer]);

  useEffect(() => {
    if (workTimer.seconds === 0 && breakTimer.seconds === 0) {
      setWorkTimer({ seconds: workTimerMemory.seconds });
      setBreakTimer({ seconds: breakTimerMemory.seconds });
    }
  }, [play, workTimer, breakTimer]);

  return (
    <div className="current-task-timer">
      {showModal && <TimerModal />}
      <div className="current-task-timer__title">
        {workTimer.seconds === 0 ? "Break" : "Work"}
      </div>
      <div className="current-task-timer__content">
        <h1 className="current-task-timer__time-display">
          {workTimer.seconds === 0
            ? timerFormat(breakMinutes, breakSeconds)
            : timerFormat(workMinutes, workSeconds)}
        </h1>

        <div className="current-task-timer__buttons">
          <IconButton
            className="current-task-timer__"
            size="3rem"
            icon={play ? "pause" : "play"}
            type="button"
            onClick={() => setPlay(!play)}
          />
          <IconButton
            className="current-task-timer__"
            size="3rem"
            icon="expand"
            type="button"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    </div>
  );
}
