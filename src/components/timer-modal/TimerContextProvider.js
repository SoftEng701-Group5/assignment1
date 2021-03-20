import React, { useState } from "react";
import {
  defaultTimer,
  defaultBreakTimer,
  defaultPlay,
  defaultTimerModalShow,
} from "./TimerData";

const TimerContext = React.createContext(defaultTimer);
const PlayContext = React.createContext(defaultPlay);
const BreakTimerContext = React.createContext(defaultBreakTimer);
const TimerModalShowContext = React.createContext(defaultTimerModalShow);

/* Global timer data used to retrieve timer and set the timer.
Bi-directional rendering of components that uses the context.
 */
function TimerContextProvider(props) {
  const { children } = props;
  const [timer, setTimer] = useState(defaultTimer);
  const [play, setPlay] = useState(defaultPlay);
  const [breakTimer, setBreakTimer] = useState(defaultBreakTimer);
  const [showModal, setShowModal] = useState(defaultTimerModalShow);

  return (
    <PlayContext.Provider value={[play, setPlay]}>
      <TimerContext.Provider value={[timer, setTimer]}>
        <BreakTimerContext.Provider value={[breakTimer, setBreakTimer]}>
          <TimerModalShowContext.Provider value={[showModal, setShowModal]}>
            {children}
          </TimerModalShowContext.Provider>
        </BreakTimerContext.Provider>
      </TimerContext.Provider>
    </PlayContext.Provider>
  );
}

export { TimerContext, PlayContext, BreakTimerContext, TimerModalShowContext, TimerContextProvider };
