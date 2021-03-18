import React, {useContext, useEffect} from "react";
import {PlayContext, TimerContext} from "./TimerContextProvider";
import Timer from "./Timer";
import TimerPlay from "./TimerPlay";
import style from "./Modal.scss";

export default function TimerBundle(props) {

    const {timerTitle} = props;
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
            <h2> {timerTitle} </h2>
            <Timer startTime={timer}/>
            <TimerPlay play={play} setPlay={setPlay}/>
        </div>
    );

}