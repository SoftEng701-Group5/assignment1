import React from "react";
import IconButton from "../global/IconButton"

export default function TimerPlay(props) {

    const {play, setPlay} = props;
    return (
        <IconButton icon="plus" size="6" type="button" onClick={() => setPlay(!play)}/>
    );
}