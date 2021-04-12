import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/global/Button";
import HomepageImage from "../assets/images/HomepageImage";
import DateTime from "../components/DateTime";
import Navbar from "../components/Navbar";
import { CurrentTaskContext } from "../components/timer-modal/TimerContextProvider";
import { fetchTasks } from "../services/databaseService";
import { AuthContext } from "../services/providers/authProvider";
import DarkModeContext from "../services/theme-context";
import TaskList from "../components/global/TaskList";

function HomeView() {
  const { currentUser } = useContext(AuthContext);
  const [, setCurrentTask] = useContext(CurrentTaskContext);
  const [tasks, setTasks] = useState([]);
  const [refetchTasks, setRefetchTasks] = useState(false);
  const history = useHistory();
  const { isDarkMode } = React.useContext(DarkModeContext);

  const triggerRefetchTasks = () => {
    setRefetchTasks(!refetchTasks);
  };

  const getGreeting = () => {
    const myDate = new Date();
    const hrs = myDate.getHours();

    if (hrs < 12) return "Good Morning";
    if (hrs < 18) return "Good Afternoon";
    return "Good Evening";
  };

  useEffect(() => {
    fetchTasks(currentUser.uid).then((res) => {
      setTasks(res);
    });
  }, [refetchTasks]);

  const handleTaskClick = (task) => {
    history.push("/dashboard");
    setCurrentTask(task);
  };

  return (
    <>
      <Navbar />
      <div className={isDarkMode ? "home-page--root" : "home-page--root light"}>
        <div className="home-page--welcome-container">
          <h1 className="home-page--welcome-message">
            <span>{getGreeting()}</span>
            <br />
            <span>{currentUser?.firstName}</span>
          </h1>
          <Button
            icon="rightArrow"
            text="Dashboard"
            height="4rem"
            fontSize="1.5rem"
            path="/dashboard"
          />
        </div>
        <div className="home-page--task-list">
          <TaskList
            tasks={tasks}
            onNewTask={triggerRefetchTasks}
            onTaskClick={handleTaskClick}
          />
        </div>
        <DateTime />
        <HomepageImage />
      </div>
    </>
  );
}

export default HomeView;
