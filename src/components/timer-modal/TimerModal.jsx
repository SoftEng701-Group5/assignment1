import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Task from "../global/Task/Task";
import CurrentTaskNotes from "../current-task/CurrentTaskNotes";
import TimerSection from "./TimerSection";
import { CurrentTaskContext } from "./TimerContextProvider";

const modalRoot = document.querySelector("#modal-root");

export default function TimerModal() {
  const [currentTask] = useContext(CurrentTaskContext);

  return ReactDOM.createPortal(
    <div className="timer-modal">
      {/* Components are displayed here */}
      <div className="timer-modal__info">
        <Task name={currentTask.Name} subTasks={currentTask.Subtasks} />
        <CurrentTaskNotes notes={[currentTask.Description]} />
      </div>
      <div className="timer-modal__timer">
        <TimerSection />
      </div>
    </div>,
    modalRoot
  );
}
