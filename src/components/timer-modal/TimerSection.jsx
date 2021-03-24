import React, { useEffect, useContext } from "react";
import {
  WorkTimerContext,
  PlayContext,
  BreakTimerContext,
  TimerModalShowContext,
  WorkTimerMemoryContext,
  BreakTimerMemoryContext,
} from "./TimerContextProvider";
import IconButton from "../global/IconButton";

/**
 * Creates a TimerSection component with the timer title, timer,
 * play and minimise elements. All rendering of elements will propogate
 * to all other elements since timer-related contexts are used.
 * @returns a TimerSection component with the title, timer, play and
 * minimise element.
 */
export default function TimerSection() {
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

  /**
   * timerFormat function takes two parameters
   * m: the minutes
   * s: the seconds
   * The function returns a string in the form mm:ss
   * where m is minutes and s is seconds.
   */
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

  /**
   * UseEffect hooked invoked to decrease the work timer when the
   * play button is active and work time has not completed.
   */
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

  /**
   * UseEffect hook invoked to decrease the break timer when play is
   * invoked and work timer has reached completion.
   */
  useEffect(() => {
    let interval = null;

    if (workTimer.seconds === 0 && play) {
      interval = setTimeout(
        () =>
          setBreakTimer(
            breakTimer.seconds !== 0 && { seconds: breakTimer.seconds - 1 }
          ),
        1000
      );
    }

    return () => clearTimeout(interval);
  }, [play, workTimer, breakTimer, setBreakTimer]);

  /**
   * UseEffect hook invoked to reset the work and break timer to its
   * original set value after both timers have finished - looping the
   * work and break cycle over and over.
   */
  useEffect(() => {
    if (workTimer.seconds === 0 && breakTimer.seconds === 0) {
      setWorkTimer({ seconds: workTimerMemory.seconds });
      setBreakTimer({ seconds: breakTimerMemory.seconds });
    }
  }, [play, workTimer, breakTimer]);

  return (
    <div>
      <div className="timerTitle">
        {workTimer.seconds === 0 ? "Break" : "Work"}
      </div>
      <h1 className="timer-text">
        {workTimer.seconds === 0
          ? timerFormat(breakMinutes, breakSeconds)
          : timerFormat(workMinutes, workSeconds)}
      </h1>

      <div className="button-align">
        <IconButton
          icon={play ? "pause" : "play"}
          size="5rem"
          type="button"
          onClick={() => setPlay(!play)}
        />
        <IconButton
          icon="minimize"
          size="5rem"
          type="button"
          onClick={() => setShowModal(!showModal)}
        />
      </div>
    </div>
  );
}
