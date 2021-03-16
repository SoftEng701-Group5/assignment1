import {useContext, useEffect} from "react";
import {PlayContext, TimerContext} from "./TimerContextProvider";
import Timer from "./Timer";
import TimerPlay from "./TimerPlay";
import style from "./Modal.module.scss";

export default function TimerBundle() {

    const [timer, setTimer] = useContext(TimerContext)
    const [play, setPlay] = useContext(PlayContext)

    function decrementTimer() {
        let nextTimer = null;

        if (!(timer.seconds === "00")) {
            nextTimer = decrementSec();
        } else if (!(timer.minutes === "00")) {
            nextTimer = decrementMin()
        } else if (!(timer.hours === "00")) {
            nextTimer = decrementHr();
        }

        return nextTimer;

    }

    function decrementSec() {
        let sec = timer.seconds;
        sec--;
        if (sec < 10) {
            sec = "0" + sec.toString();
        }

        return {hours: timer.hours, minutes: timer.minutes, seconds: sec}
    }

     function decrementMin() {
        let min = timer.minutes;
        let sec = 59;
        min--;
        if (min < 10) {
            min = "0" + min.toString();
        }

        return {hours: timer.hours, minutes: min, seconds: sec}
    }

    function decrementHr() {
        let hr = timer.hours;
        hr--;
        let min = 59;
        let sec = 59;

        if (hr < 10) {
            hr = "0" + hr.toString();
        }

        return {hours: hr, minutes: min, seconds: sec}
    }

    useEffect(() => {
        if (play) {
            setTimeout(() => setTimer(decrementTimer()), 1000);
        }
    }, [play, timer]);



    return (
        <div>
            <Timer startTime={timer}/>
            <TimerPlay play={play} setPlay={setPlay} buttonStyle={style.playButton} divPlay={style.playButtonDiv} divPause={style.pauseButtonDiv}/>
        </div>
    );

}