import React, { useContext, useState, useEffect } from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import TaskList from "../components/global/TaskList";
import GoalList from "../components/goal/GoalList";
import Navbar from "../components/Navbar";
import { CurrentTaskContext } from "../components/timer-modal/TimerContextProvider";

import { fetchGoals, fetchTasks } from "../services/databaseService";
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
  const [goals, setGoals] = useState([]);
  const { isDarkMode } = React.useContext(DarkModeContext);
  const [refetchTasks, setRefetchTasks] = useState(false);
  const [refetchGoals, setRefetchGoals] = useState(false);

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

  const triggerRefetchGoals = () => {
    setRefetchGoals(!refetchGoals);
  };

  useEffect(() => {
    fetchTasks(currentUser.uid).then((res) => {
      setTasks(res);
    });
    fetchGoals(currentUser.uid).then((res) => {
      setGoals(res);
    });
  }, [refetchTasks, refetchGoals]);

  return (
    <>
      <Navbar />
      <div className={isDarkMode ? "dashboard" : "dashboard light"}>
        <TaskList
          tasks={tasks}
          onNewTask={triggerRefetchTasks}
          onTaskClick={handleTaskClick}
        />
        <CurrentTask onNewTask={triggerRefetchTasks} />
        <div className="dashboard__placeholder-column">
          <DashboardPlaceholder title="Stats:" />
          <br />
          <GoalList goals={goals} onNewGoal={triggerRefetchGoals} />
        </div>
      </div>
    </>
  );
}

export default DashboardView;
