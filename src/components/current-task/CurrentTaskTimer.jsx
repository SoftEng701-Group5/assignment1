import React, { useEffect, useContext } from "react";
import {
  TimerContext,
  PlayContext,
  BreakTimerContext,
  TimerModalShowContext,
  WorkTimerMemoryContext,
  BreakTimerMemoryContext,
} from "../timer-modal/TimerContextProvider";
import IconButton from "../global/IconButton";
import TimerModal from "../timer-modal/TimerModal";

export default function CurrentTaskTimer() {
  const [timer, setTimer] = useContext(TimerContext);
  const [play, setPlay] = useContext(PlayContext);
  const [breakTimer, setBreakTimer] = useContext(BreakTimerContext);
  const [showModal, setShowModal] = useContext(TimerModalShowContext);

  const [workTimerMemory] = useContext(WorkTimerMemoryContext);
  const [breakTimerMemory] = useContext(BreakTimerMemoryContext);

  const minutes = Math.floor(timer.seconds / 60);
  const seconds = timer.seconds % 60;

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

    if (timer.seconds > 0 && play) {
      interval = setTimeout(
        () => setTimer(timer.seconds !== 0 && { seconds: timer.seconds - 1 }),
        1000
      );
    }

    return () => clearTimeout(interval);
  }, [play, timer, setTimer]);

  useEffect(() => {
    let interval = null;

    if (timer.seconds === 0 && play) {
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
  }, [play, timer, breakTimer, setBreakTimer]);

  useEffect(() => {
    if (timer.seconds === 0 && breakTimer.seconds === 0) {
      setTimer({ seconds: workTimerMemory.seconds });
      setBreakTimer({ seconds: breakTimerMemory.seconds });
    }
  }, [play, timer, breakTimer]);

  return (
    <div className="current-task-timer">
      {showModal && <TimerModal />}
      <div className="current-task-timer__title">
        {timer.seconds === 0 ? "Break" : "Work"}
      </div>
      <div className="current-task-timer__content">
        <h1 className="current-task-timer__time-display">
          {timer.seconds === 0
            ? timerFormat(breakMinutes, breakSeconds)
            : timerFormat(minutes, seconds)}
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
