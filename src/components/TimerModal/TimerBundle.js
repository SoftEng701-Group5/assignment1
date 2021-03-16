import {useContext, useEffect} from "react";
import {PlayContext, TimerContext} from "./TimerContextProvider";
import Timer from "./Timer";
import TimerPlay from "./TimerPlay";
import style from "./Modal.module.scss";

export default function TimerBundle() {

    const [timer, setTimer] = useContext(TimerContext)
    const [play, setPlay] = useContext(PlayContext)

    useEffect(() => {

        if (play) {
            setTimeout(() => setTimer(timer.seconds !== 0 && {seconds: timer.seconds - 1}), 1000);
        }

    }, [play, timer, setTimer]);

    return (
        <div>
            <Timer startTime={timer}/>
            <TimerPlay play={play} setPlay={setPlay} buttonStyle={style.playButton} divPlay={style.playButtonDiv}
                       divPause={style.pauseButtonDiv}/>
        </div>
    );

}