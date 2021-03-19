import React, { useEffect, useContext } from "react";
import { TimerContext, PlayContext } from "./TimerContextProvider";
// import Timer from "./Timer";
// import TimerPlay from "./TimerPlay";
// import TimerResize from "./TimerResize";
import IconButton from "../global/IconButton";

export default function TimerSection() {
  const [timer, setTimer] = useContext(TimerContext);
  const [play, setPlay] = useContext(PlayContext);

  const minutes = Math.floor(timer.seconds / 60);
  const seconds = timer.seconds % 60;

  useEffect(() => {
    let interval = null;

    if (play) {
      interval = setTimeout(
        () => setTimer(timer.seconds !== 0 && { seconds: timer.seconds - 1 }),
        1000
      );
    }

    return () => clearTimeout(interval);
  }, [play, timer, setTimer]);

  return (
    <div>
      <div className="timerTitle">Work</div>
      {/* <Timer startTime={timer} /> */}
      <h1 className="timer-text">
        {minutes < 10 && "0"}
        {minutes}:{seconds < 10 && "0"}
        {seconds}
      </h1>

      <div className="button-align">
        <IconButton
          icon="plus"
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
