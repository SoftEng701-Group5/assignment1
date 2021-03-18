
import React, { useEffect, useContext } from "react";
import {TimerContext, PlayContext } from "./TimerContextProvider";
import Timer from "./Timer";
import TimerPlay from "./TimerPlay";
import TimerResize from "./TimerResize";

export default function TimerSection(props) {

    const timerTitle = props;
    const [timer, setTimer] = useContext(TimerContext)
    const [play, setPlay] = useContext(PlayContext)

    useEffect(() => {
        let interval = null;

        if (play) {
            interval = setTimeout(() => setTimer(timer.seconds !== 0 && {seconds: timer.seconds - 1}), 1000);
        }

        return () => clearTimeout(interval);
    }, [play, timer, setTimer]);

    return (

        <div>
            <div className="timerTitle">
                {timerTitle}
            </div>
            <Timer startTime={timer}/>
            <div className="button-align">
                <TimerPlay play={play} setPlay={setPlay}/>
                <TimerResize/>
            </div>

        </div>
    );

}