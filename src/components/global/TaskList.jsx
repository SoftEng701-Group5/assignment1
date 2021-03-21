import React, { useContext } from "react";
import NewTask from "../NewTask";
import Task from "./Task/Task";
import { CurrentTaskContext } from "../timer-modal/TimerContextProvider";

function TaskList(props) {
  const { onTaskClick, tasks } = props;
  const [currentTask] = useContext(CurrentTaskContext);

  return (
    <div className="task-list">
      <h1 className="task-list__title">Today&apos;s Tasks:</h1>
      <div className="task-list__content">
        <div className="task-list__tasks">
          {tasks.map((t) => (
            <div key={t.Task_id}>
              <Task
                name={t.Name}
                onClick={() => onTaskClick(t)}
                selected={currentTask && t.Task_id === currentTask.Task_id}
              />
            </div>
          ))}
        </div>

        <div className="add-task-button-container">
          <NewTask />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
