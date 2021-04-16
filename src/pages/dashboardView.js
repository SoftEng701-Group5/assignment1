import React, { useContext, useState, useEffect } from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import TaskList from "../components/global/TaskList";
import GoalList from "../components/goal/GoalList";
import Navbar from "../components/Navbar";
import { CurrentTaskContext } from "../components/timer-modal/TimerContextProvider";

import { fetchTasks } from "../services/databaseService";
import { AuthContext } from "../services/providers/authProvider";
import DarkModeContext from "../services/theme-context";

/**
 * This component represents the placeholder for the Stats and Goals
 * components that can be added through future work
 */
const DashboardPlaceholder = (props) => {
  const { title } = props;
  return (
    <div className="dashboard__placeholder-section">
      <h1 className="dashboard__placeholder-title">{title}</h1>
      <div className="dashboard__placeholder-content" />
    </div>
  );
};

/**
 * This component represents the dashboard page,
 * and should contain all elements present on this page
 */
function DashboardView() {
  const { currentUser } = useContext(AuthContext);
  const [, setCurrentTask] = useContext(CurrentTaskContext);
  const [tasks, setTasks] = useState([]);
  const { isDarkMode } = React.useContext(DarkModeContext);
  const [refetchTasks, setRefetchTasks] = useState(false);

  /**
   * When a task is selected from Today's Tasks,
   * it appears in the Current Task component
   */
  const handleTaskClick = (task) => {
    setCurrentTask(task);
  };

  const triggerRefetchTasks = () => {
    setRefetchTasks(!refetchTasks);
  };

  useEffect(() => {
    fetchTasks(currentUser.uid).then((res) => {
      setTasks(res);
    });
  }, [refetchTasks]);

  const goals = {
    goals: {
      goal1: {
        id: "task1",
        content: "701 Meeting",
        expanded: false,
        checked: false,
        date: "1616115764",
        subTasks: ["subTask1", "subTask2", "subTask3"],
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className={isDarkMode ? "dashboard" : "dashboard light"}>
        <TaskList
          tasks={tasks}
          onNewTask={triggerRefetchTasks}
          onTaskClick={handleTaskClick}
        />
        <CurrentTask />
        <div className="dashboard__placeholder-column">
          <DashboardPlaceholder title="Stats:" />
          <br />
          <GoalList goals={goals} />
        </div>
      </div>
    </>
  );
}

export default DashboardView;
