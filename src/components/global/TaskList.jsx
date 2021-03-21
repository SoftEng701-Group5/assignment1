
import React, { useContext, useState, useEffect } from "react";
import NewTask from "../NewTask";
import Task from "./Task/Task";
import "../../stylesheets/components/global/taskList.scss"

import { fetchTasks } from "../../services/databaseService";
import { AuthContext } from "../../services/providers/authProvider";

function TaskList() {

    
    const { currentUser } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks(currentUser.uid).then(res => {setTasks(res)});
      }, [])

    
    return (
        <div className="task-list">

            <div className="all-tasks">
            {tasks.map((t) => (
                <div key={t.Task_id}>
                    <Task name={t.Name} />
                </div>
            ))}
            </div>

            <div className="add-task-button-container">
                <NewTask />
            </div>
        
        </div>

    )
    

}

export default TaskList;
