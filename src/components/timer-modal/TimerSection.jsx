import React, { useEffect, useContext } from "react";
import {
  TimerContext,
  PlayContext,
  BreakTimerContext,
} from "./TimerContextProvider";
import IconButton from "../global/IconButton";

export default function TimerSection() {
  const [timer, setTimer] = useContext(TimerContext);
  const [play, setPlay] = useContext(PlayContext);
  const [breakTimer, setBreakTimer] = useContext(BreakTimerContext);

  const minutes = Math.floor(timer.seconds / 60);
  const seconds = timer.seconds % 60;

  const breakMinutes = Math.floor(breakTimer.seconds / 60);
  const breakSeconds = breakTimer.seconds % 60;

  const timerFormat = (m,s) => {
    let timerStr = "";

    if (Number.isNaN(m) && Number.isNaN(s)) {
      return "00:00";
    }

    if (m < 10) {
        timerStr+= "0";
    }
    timerStr+= m;
    timerStr+= ":";

    if (s < 10) {
      timerStr+= "0";
    }
    timerStr+= s;

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
            breakTimer.seconds !== 0 && { seconds: breakTimer.seconds - 1 }),
        1000
      );
    }

    return () => clearTimeout(interval);
  }, [play, timer, breakTimer, setBreakTimer]);

  return (
    <div>
      <div className="timerTitle"> {timer.seconds === 0 ? "Break" : "Work"} </div>
      <h1 className="timer-text">
          {timer.seconds === 0 ? timerFormat(breakMinutes, breakSeconds): timerFormat(minutes, seconds)}
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
          onClick={() => setPlay(!play)}
        />
      </div>
    </div>
  );
}
