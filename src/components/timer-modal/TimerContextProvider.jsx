import React, { useState } from "react";
import {
  defaultWorkTimer,
  defaultBreakTimer,
  defaultPlay,
  defaultTimerModalShow,
} from "./timerData";

const WorkTimerContext = React.createContext(defaultWorkTimer);
const PlayContext = React.createContext(defaultPlay);
const BreakTimerContext = React.createContext(defaultBreakTimer);
const TimerModalShowContext = React.createContext(defaultTimerModalShow);
const BreakTimerMemoryContext = React.createContext(defaultBreakTimer);
const WorkTimerMemoryContext = React.createContext(defaultWorkTimer);
const CurrentTaskContext = React.createContext();
const FullscreenContext = React.createContext();

/**
 * Global timer context used to retrieve related contexts to timer.
 * Bi-directional component rendering that uses the context.
 * children property will be able to use all contexts provided.
 * @param {children} props - a child component for all timer contexts to wrap around.
 * @returns all context providers wrapped around the child component.
 */
function TimerContextProvider(props) {
  const { children } = props;
  const [workTimer, setWorkTimer] = useState(defaultWorkTimer);
  const [play, setPlay] = useState(defaultPlay);
  const [breakTimer, setBreakTimer] = useState(defaultBreakTimer);
  const [showModal, setShowModal] = useState(defaultTimerModalShow);
  const [currentTask, setCurrentTask] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const [workTimerMemory, setWorkTimerMemory] = useState(defaultWorkTimer);
  const [breakTimerMemory, setBreakTimerMemory] = useState(defaultBreakTimer);
  return (
    <PlayContext.Provider value={[play, setPlay]}>
      <WorkTimerContext.Provider value={[workTimer, setWorkTimer]}>
        <BreakTimerContext.Provider value={[breakTimer, setBreakTimer]}>
          <TimerModalShowContext.Provider value={[showModal, setShowModal]}>
            <BreakTimerMemoryContext.Provider
              value={[breakTimerMemory, setBreakTimerMemory]}
            >
              <WorkTimerMemoryContext.Provider
                value={[workTimerMemory, setWorkTimerMemory]}
              >
                <CurrentTaskContext.Provider
                  value={[currentTask, setCurrentTask]}
                >
                  <FullscreenContext.Provider value={[isChecked, setIsChecked]}>
                    {children}
                  </FullscreenContext.Provider>
                </CurrentTaskContext.Provider>
              </WorkTimerMemoryContext.Provider>
            </BreakTimerMemoryContext.Provider>
          </TimerModalShowContext.Provider>
        </BreakTimerContext.Provider>
      </WorkTimerContext.Provider>
    </PlayContext.Provider>
  );
}

export {
  WorkTimerContext,
  PlayContext,
  BreakTimerContext,
  TimerModalShowContext,
  WorkTimerMemoryContext,
  BreakTimerMemoryContext,
  CurrentTaskContext,
  FullscreenContext,
  TimerContextProvider,
};
