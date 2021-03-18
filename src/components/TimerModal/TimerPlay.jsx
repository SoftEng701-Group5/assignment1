import React from "react";

export default function TimerPlay(props) {

    const {play, setPlay} = props;
    return (
        <button className="button-play" type='button' onClick={() => setPlay(!play)}>
            Play
        </button>
    );
}