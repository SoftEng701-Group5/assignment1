import React, { useState } from "react";
import {
  defaultTimer,
  defaultBreakTimer,
  defaultPlay,
} from "./TimerData";

const TimerContext = React.createContext(defaultTimer);
const PlayContext = React.createContext(defaultPlay);
const BreakTimerContext = React.createContext(defaultBreakTimer);

/* Global timer data used to retrieve timer and set the timer.
Bi-directional rendering of components that uses the context.
 */
function TimerContextProvider(props) {
  const { children } = props;
  const [timer, setTimer] = useState(defaultTimer);
  const [play, setPlay] = useState(defaultPlay);
  const [breakTimer, setBreakTimer] = useState(defaultBreakTimer);

  return (
    <PlayContext.Provider value={[play, setPlay]}>
      <TimerContext.Provider value={[timer, setTimer]}>
        <BreakTimerContext.Provider value={[breakTimer, setBreakTimer]}>
          {children}
        </BreakTimerContext.Provider>
      </TimerContext.Provider>
    </PlayContext.Provider>
  );
}

export { TimerContext, PlayContext, BreakTimerContext, TimerContextProvider };
