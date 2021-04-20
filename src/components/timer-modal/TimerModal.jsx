import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Task from "../global/Task/Task";
import CurrentTaskNotes from "../current-task/CurrentTaskNotes";
import TimerSection from "./TimerSection";
import { CurrentTaskContext } from "./TimerContextProvider";
import DarkModeContext from "../../services/theme-context";

const modalRoot = document.querySelector("#modal-root");

/**
 * Creates a modal with Task, CurrentTaskNotes, and Timer Section
 * overlaying on top of the current components on screen.
 * @returns an overlayed timer modal component with a Task,
 * CurrentTaskNotes, and Timer Section component.
 */
export default function TimerModal(props) {
  const { subtasks, onNewSubtask } = props;
  const [currentTask] = useContext(CurrentTaskContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return ReactDOM.createPortal(
    <div className={isDarkMode ? "timer-modal" : "timer-modal light"}>
      {/* Components are displayed here */}
      <div className="timer-modal__info">
        <Task
          endDate={currentTask.End_date}
          label={currentTask.Label}
          startDate={currentTask.Start_date}
          taskId={currentTask.Task_id}
          checked={currentTask.Is_complete}
          description={currentTask.Description}
          userId={currentTask.User_id}
          name={currentTask.Name}
          subtasks={subtasks.filter(
            (subtask) => subtask.Task_id === currentTask.Task_id
          )}
          onNewSubtask={onNewSubtask}
        />
        <CurrentTaskNotes notes={[currentTask.Description]} />
      </div>
      <div className="timer-modal__timer">
        <TimerSection />
      </div>
    </div>,
    modalRoot
  );
}
