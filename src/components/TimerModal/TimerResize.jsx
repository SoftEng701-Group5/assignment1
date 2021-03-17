import IconButton from "../global/IconButton";

export default function TimerResize(props) {

    return (
        <IconButton icon={"minimize"} size={"6"} onClick={() => console.log("Resize on click")}/>

    );

}