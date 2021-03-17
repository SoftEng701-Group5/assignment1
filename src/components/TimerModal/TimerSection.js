import TimerResize from "./TimerResize";
import TimerBundle from "./TimerBundle";

export default function TimerSection(timerTitle) {

    return (
        <div>
            <TimerBundle timerTitle={timerTitle}/>
            <TimerResize/>
        </div>
    );
}