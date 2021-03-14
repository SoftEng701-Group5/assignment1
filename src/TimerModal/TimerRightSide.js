import TimerTitle from "./TimerTitle";
import TimerPlay from "./TimerPlay";
import Timer from "./Timer";
import TimerResize from "./TimerResize";

export default function TimerRightSide() {

    return (
        <div>
            <TimerTitle title={"Work"}/>
            <Timer startTime={"00:30:00"}/>
            <TimerPlay />
            <TimerResize />
        </div>


    );
}