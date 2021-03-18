import React from "react";
import IconButton from "../global/IconButton";

export default function TimerResize() {

    return (
        <IconButton icon="minimize" size="6" onClick={() => console.log("Resize on click")}/>
    );

}