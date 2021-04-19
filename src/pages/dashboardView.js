import React, { useContext, useState, useEffect } from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import TaskList from "../components/global/TaskList";
import GoalList from "../components/goal/GoalList";
import StatsList from "../components/stats/StatsList";
import Navbar from "../components/Navbar";
import { CurrentTaskContext } from "../components/timer-modal/TimerContextProvider";
import {
  fetchGoals,
  fetchTasks,
<<<<<<< HEAD
  fetchSubtasks,
  fetchTasksCompleted
=======
  fetchTasksCompleted,
  fetchGoalsCompleted,
>>>>>>> shows correct stats for goals achieved
} from "../services/databaseService";
import { AuthContext } from "../services/providers/authProvider";
import DarkModeContext from "../services/theme-context";

/**
 * This component represents the dashboard page,
 * and should contain all elements present on this page
 */
function DashboardView() {
  const { currentUser } = useContext(AuthContext);
  const [, setCurrentTask] = useContext(CurrentTaskContext);
  const [tasks, setTasks] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  const [goals, setGoals] = useState([]);
  const [goalsAchieved, setGoalsAchieved] = useState("?");
  const { isDarkMode } = React.useContext(DarkModeContext);
  const [tasksCompleted, setTasksCompleted] = useState("?");
  const [refetch, setRefetch] = useState(false);

  /**
   * When a task is selected from Today's Tasks,
   * it appears in the Current Task component
   */
  const handleTaskClick = (task) => {
    setCurrentTask(task);
  };

  const triggerRefetch = () => {
    setRefetch(!refetch);
  };

  useEffect(() => {
    fetchTasks(currentUser.uid).then((res) => {
      setTasks(res);
    });
    fetchTasksCompleted(currentUser.uid).then((res) => {
      setTasksCompleted(res);
    });
    fetchGoals(currentUser.uid).then((res) => {
      setGoals(res);
    });
    fetchGoalsCompleted(currentUser.uid).then((res) => {
      setGoalsAchieved(res);
    });
    fetchSubtasks(currentUser.uid).then((res) => {
      setSubtasks(res);
  }, [refetch]);

  return (
    <>
      <Navbar />
      <div className={isDarkMode ? "dashboard" : "dashboard light"}>
        <TaskList
          tasks={tasks}
          subtasks={subtasks}
          onNewTask={triggerRefetch}
          onTaskCheck={triggerRefetch}
          onTaskClick={handleTaskClick}
          onNewSubtask={triggerRefetchSubtasks}
        />
        <CurrentTask
          subtasks={subtasks}
          onNewSubtask={triggerRefetchSubtasks}
        />
        <div className="dashboard__stats-goals-column">
          <StatsList
            tasksCompleted={tasksCompleted}
            goalsAchieved={goalsAchieved}
          />
          <br />
          <GoalList
            goals={goals}
            onNewGoal={triggerRefetch}
            onGoalCheck={triggerRefetch}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardView;
