import TimerTitle from "./TimerTitle";
import TimerResize from "./TimerResize";
import TimerBundle from "./TimerBundle";
import style from "./Modal.module.scss"


export default function TimerRightSide() {

    return (
        <div>
            <TimerTitle title={"Work"}/>
            <TimerBundle/>
            <TimerResize resizeStyle={style.resizeButton} arrow={style.arrow} line={style.arrowLine}/>
        </div>
    );
}