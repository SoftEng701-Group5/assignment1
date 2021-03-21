import React, { useContext, useState, useEffect } from "react";
import CurrentTask from "../components/current-task/CurrentTask";
import TaskList from "../components/global/TaskList";
import Navbar from "../components/Navbar";
import { CurrentTaskContext } from "../components/timer-modal/TimerContextProvider";

import { fetchTasks } from "../services/databaseService";
import { AuthContext } from "../services/providers/authProvider";

const DashboardPlaceholder = (props) => {
  const { title } = props;
  return (
    <div className="dashboard__placeholder-section">
      <h1 className="dashboard__placeholder-title">{title}</h1>
      <div className="dashboard__placeholder-content" />
    </div>
  );
};

function DashboardView() {
  const { currentUser } = useContext(AuthContext);
  const [, setCurrentTask] = useContext(CurrentTaskContext);
  const [tasks, setTasks] = useState([]);

  const handleTaskClick = (task) => {
    setCurrentTask(task);
  };

  useEffect(() => {
    fetchTasks(currentUser.uid).then((res) => {
      setTasks(res);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
        <CurrentTask />
        <div className="dashboard__placeholder-column">
          <DashboardPlaceholder title="Stats:" />
          <br />
          <DashboardPlaceholder title="Goals:" />
        </div>
      </div>
    </>
  );
}

export default DashboardView;
