import React from "react";

export default function Timer(props) {

    const {startTime} = props;
    const minutes = Math.floor(startTime.seconds / 60);
    const seconds = startTime.seconds % 60;

    return (
        <div className="timer"> {minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds} </div>
    );
}
