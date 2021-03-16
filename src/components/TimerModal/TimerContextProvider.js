import {defaultTimer, defaultPlay} from "./TimerData";
import React from "react";
import {useState} from 'react';

const TimerContext = React.createContext(defaultTimer)
const PlayContext = React.createContext(defaultPlay)

/* Global timer data used to retrieve timer and set the timer.
Bi-directional rendering of components that uses the context.
 */
function TimerContextProvider({children}) {

    let [timer, setTimer] = useState(defaultTimer);
    const [play, setPlay] = useState(defaultPlay);

    return (
        <PlayContext.Provider value={[play, setPlay]}>
            <TimerContext.Provider value={[timer, setTimer]}>
                {children}
            </TimerContext.Provider>
        </PlayContext.Provider>
    );

}

export {
    TimerContext,
    PlayContext,
    TimerContextProvider
};