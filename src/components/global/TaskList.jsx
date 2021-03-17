import React from "react";
import Task from "./Task/Task";
import {useState} from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import Button from "./Button";


function TaskList(){

    const [isExpanded, setIsExpanded] = useState(false);
    const handlePlusClick = () => setIsExpanded(!isExpanded);

    const [task, setTask] = React.useState("");
    const [tasks, setTasks] = React.useState([]);

    function handleTaskSubmit(e) {
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 10000),
            text: task,
        };
        const newTasks = [newTask, ...tasks];
        setTasks(newTasks);
        setTask("");
    }

    return (
        <div>
            <h1>Today's Tasks</h1>

            {tasks.map((task) => (
                <div key={task.id} className="task">
                    <Task name={task.text}/>
                </div>

            ))}

            <div className={"task-container" + (isExpanded ? "--expanded" : "")}>
                <div className="task-header-container">
                    <PlusIcon handleOnClick={ handlePlusClick } />
                </div>

                <div className={"task-details-container" + (isExpanded ? "--expanded" : "")}>
                    <form>
                        <input
                            type='text'
                            placeholder='Add a task name'
                            onChange={(e) => setTask(e.target.value)}
                            value={task}
                        />
                        <button onClick={handleTaskSubmit}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default TaskList;
