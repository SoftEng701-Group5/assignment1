import React from "react";
import ReactDOM from "react-dom";
import Task from "../global/Task/Task";
import CurrentTaskNotes from "../current-task/CurrentTaskNotes";
import TimerSection from "./TimerSection";

const modalRoot = document.querySelector("#modal-root");

export default function TimerModal() {
  return ReactDOM.createPortal(
    <div className="timer-modal">
      <div className="timer-modal__content">
        {/* Components are displayed here */}
        <div className="timer-modal__content__info">
          <Task
            expanded
            name="Assignment 1"
            subtasks={[
              { id: 0, name: "subtask1" },
              { id: 1, name: "subtask2" },
            ]}
          />
          <CurrentTaskNotes
            notes={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Maecenas porttitor eget purus sit amet commodo. Ut non interdum mi. Donec tortor eros, luctus rutrum purus eget, ultricies fringilla enim.",
            ]}
          />
        </div>
        <div className="timer-modal__content__timer">
          <TimerSection />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
