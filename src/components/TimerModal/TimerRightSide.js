import TimerTitle from "./TimerTitle";
import TimerPlay from "./TimerPlay";
import Timer from "./Timer";
import TimerResize from "./TimerResize";
import {useContext, useEffect} from 'react';
import {TimerContext, PlayContext} from "./TimerContextProvider";

export default function TimerRightSide() {

    const [timer, setTimer] = useContext(TimerContext)
    const [play, setPlay] = useContext(PlayContext)

    function decrementTimer() {
        let nextTimer;

        if (!(timer.seconds === "00")) {
            nextTimer = decrementSec();
        } else if (!(timer.minutes === "00")) {
            nextTimer = decrementMin()
        } else if (!(timer.hours === "00")) {
           nextTimer = decrementHr();
        }

        console.log(nextTimer)
        setTimer(nextTimer);
    }

    function decrementSec() {
        let sec = timer.seconds;
        sec--;
        if (sec < 10) {
            sec = "0" + sec.toString();
        }

        return { hours : timer.hours, minutes : timer.minutes, seconds : sec}
    }

    function decrementMin() {
        let min = timer.minutes;
        let sec = 59;
        min--;
        if (min < 10) {
            min = "0" + min.toString();
        }

        return {hours : timer.hours, minutes : min, seconds : sec}
    }

    function decrementHr() {
        let hr = timer.hours;
        hr--;
        let min = 59;
        let sec = 59;

        if (hr < 10) {
            hr = "0" + hr.toString();
        }

        return { hours : hr, minutes: min, seconds: sec}
    }

    useEffect(() => {
        if (play) {
            setTimeout(() => decrementTimer(), 1000);
        }
    }, [play, timer]);

    return (
        <div>
            <TimerTitle title={"Work"}/>
            <Timer startTime={timer}/>
            <TimerPlay play={play} setPlay={setPlay}/>
            <TimerResize/>
        </div>
    );
}