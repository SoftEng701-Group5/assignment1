import TimerResize from "./TimerResize";
import TimerBundle from "./TimerBundle";
import style from "./Modal.module.scss"


export default function TimerSection(timerTitle) {

    return (
        <div>
            <TimerBundle timerTitle={timerTitle}/>
            <TimerResize resizeStyle={style.resizeButton} arrow={style.arrow} line={style.arrowLine}/>
        </div>
    );
}