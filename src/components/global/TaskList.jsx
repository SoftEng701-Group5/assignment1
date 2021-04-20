import React, { useContext } from "react";
import moment from "moment";
import NewTask from "../NewTask";
import Task from "./Task/Task";
import { CurrentTaskContext } from "../timer-modal/TimerContextProvider";
import DarkModeContext from "../../services/theme-context";

/**
 * This function represents the global Task List component used on the home page
 * and Welcome Dashboard. It contains user defined tasks that can be expanded to
 * display task details, and a button to add new tasks.
 */
function TaskList(props) {
  const { onTaskClick, tasks, onNewTask } = props;
  const [currentTask] = useContext(CurrentTaskContext);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const today = new Date().toDateString();
  const seconds = moment(today, false).toDate().getTime();

  const checkDate = (startTime, endTime) =>
    seconds <= endTime * 1000 && seconds >= startTime * 1000;

  return (
    <div className={isDarkMode ? "task-list" : "task-list light"}>
      <h1 className="task-list__title">Today&apos;s Tasks:</h1>
      <div className="task-list__content">
        <div className="task-list__tasks">
          {tasks.map((t) => (
            <div key={t.Task_id}>
              {t.Start_date &&
                t.End_date &&
                checkDate(t.Start_date.seconds, t.End_date.seconds) && (
                  <Task
                    name={t.Name}
                    onClick={() => onTaskClick(t)}
                    selected={currentTask && t.Task_id === currentTask.Task_id}
                    endDate={t.End_date}
                    label={t.Label}
                    startDate={t.Start_date}
                    taskId={t.Task_id}
                    checked={t.Is_complete}
                    description={t.Description}
                    userId={t.User_id}
                    onNewTask={onNewTask}
                  />
                )}
            </div>
          ))}
        </div>

        <div className="add-task-button-container">
          <NewTask onNewTask={onNewTask} />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
