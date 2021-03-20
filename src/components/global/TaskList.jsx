
import React, { useContext, useState, useEffect } from "react";
import NewTask from "../NewTask";
import Task from "./Task/Task";

import { fetchTasks } from "../../services/databaseService";
import { AuthContext } from "../../services/providers/authProvider";

function TaskList() {

    
    const { currentUser } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks(currentUser.uid).then(res => {setTasks(res)});
      }, [])

    
    return (
        <div className="Task-List">
            <div className="All-Tasks">
            {tasks.map((t) => (
                <div key={t.Task_id}>
                    <Task name={t.Name} />
                </div>
            ))}
            </div>

            <div style={{display:"flex",flex:1}}>
            <NewTask />
            </div>
        
        </div>

    )
    // const [isExpanded, setIsExpanded] = useState(false);
    // const handlePlusClick = () => setIsExpanded(!isExpanded);

    // const [task, setTask] = React.useState("");
    // const [tasks, setTasks] = React.useState([]);

    // function handleTaskSubmit(e) {
    //     e.preventDefault();
    //     const newTask = {
    //         id: Math.floor(Math.random() * 10000),
    //         text: task,
    //     };
    //     const newTasks = [newTask, ...tasks];
    //     setTasks(newTasks);
    //     setTask("");
    // }

    // return (
    //     <div>
    //         <div> 
    //         <h1 style={{textAlign: "center"}}>Today&apos;s Tasks</h1>
    //         </div>

    //         {tasks.map((t) => (
    //             <div key={t.id} className="task">
    //                 <Task name={t.text} />
    //             </div>

    //         ))}

    //         <div className={`task${isExpanded ? "--expanded" : ""}`}>
    //             <div className='task__header'>
    //                 <PlusIcon handleOnClick={handlePlusClick} />
    //             </div>

    //             <div className={`task__content${isExpanded ? "--expanded" : ""}`}>
    //                 <form>
    //                     <input
    //                         type='text'
    //                         placeholder='Add a task name'
    //                         onChange={(e) => setTask(e.target.value)}
    //                         value={task}
    //                     />
    //                     {/* <button type="button" onClick={handleTaskSubmit}>Submit</button> */}
    //                     <Button text="Add" handleOnClick={handleTaskSubmit} />
    //                 </form>

    //             </div>
    //         </div>
    //     </div>
    // )
}

export default TaskList;
