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
  fetchSubtasks,
  fetchTasksCompleted,
  fetchGoalsCompleted,
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
  const { isDarkMode } = React.useContext(DarkModeContext);

  const [tasks, setTasks] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  const [goals, setGoals] = useState([]);

  const [tasksCompleted, setTasksCompleted] = useState("?");
  const [goalsAchieved, setGoalsAchieved] = useState("?");

  const [refetchTasks, setRefetchTasks] = useState(false);
  const [refetchGoals, setRefetchGoals] = useState(false);
  const [refetchSubtasks, setRefetchSubtasks] = useState(false);

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

  const triggerRefetchSubtasks = () => {
    setRefetchSubtasks(!refetchSubtasks);
  };

  useEffect(() => {
    fetchTasks(currentUser.uid).then((res) => {
      setTasks(res);
    });
    fetchTasksCompleted(currentUser.uid).then((res) => {
      setTasksCompleted(res);
    });
  }, [refetchTasks]);

  useEffect(() => {
    fetchGoals(currentUser.uid).then((res) => {
      setGoals(res);
    });
    fetchGoalsCompleted(currentUser.uid).then((res) => {
      setGoalsAchieved(res);
    });
  }, [refetchGoals]);

  useEffect(() => {
    fetchSubtasks(currentUser.uid).then((res) => {
      setSubtasks(res);
    });
  }, [refetchSubtasks]);

  return (
    <>
      <Navbar />
      <div className={isDarkMode ? "dashboard" : "dashboard light"}>
        <TaskList
          tasks={tasks}
          subtasks={subtasks}
          onNewTask={triggerRefetchTasks}
          onTaskCheck={triggerRefetchTasks}
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
            onNewGoal={triggerRefetchGoals}
            onGoalCheck={triggerRefetchGoals}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardView;
