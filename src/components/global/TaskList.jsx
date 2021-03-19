import React, { useState } from "react";

import Task from "./Task/Task";
import PlusIcon from "../../assets/icons/PlusIcon";
import Button from "./Button";



function TaskList() {

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
            <h1>Today&apos;s Tasks</h1>

            {tasks.map((t) => (
                <div key={t.id} className="task">
                    <Task name={t.text} />
                </div>

            ))}

            <div className={`task${isExpanded ? "--expanded" : ""}`}>
                <div className='task__header'>
                    <PlusIcon handleOnClick={handlePlusClick} />
                </div>

                <div className={`task__content${isExpanded ? "--expanded" : ""}`}>
                    <form>
                        <input
                            type='text'
                            placeholder='Add a task name'
                            onChange={(e) => setTask(e.target.value)}
                            value={task}
                        />
                        {/* <button type="button" onClick={handleTaskSubmit}>Submit</button> */}
                        <Button text="Add" handleOnClick={handleTaskSubmit} />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default TaskList;
