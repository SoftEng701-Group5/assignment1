import React from "react";
import ReactDOM from 'react-dom';
import Task from '../global/Task/Task';
import CurrentTaskNotes from "../current-task/CurrentTaskNotes";
import TimerSection from "./TimerSection";

const modalRoot = document.querySelector('#modal-root');

export default function TimerModal() {

    return ReactDOM.createPortal(

        <div className="timer-modal">
            {/* Components are displayed here */}
            <div className="timer-modal__info">
                <Task />
                <CurrentTaskNotes />
            </div>
            <div className="timer-modal__timer">
                <TimerSection />
            </div>
        </div>
        , modalRoot
    );
}