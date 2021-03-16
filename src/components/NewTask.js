import NewTaskModal from "./global/Modal";
import { useState } from "react";

export default function AddTask() {
    const [display, setDisplay] = useState(false)
    const [name, setName] = useState('');
    const [label, setLabel] = useState('');
    const [desc, setDesc] = useState('');
    const [deadline, setDeadline] = useState('');


    function handleCancelNewTask() {
        setDisplay(false);
        resetValues();
    }


    function handleAddNewTask() {
        setDisplay(false);
        resetValues();
    }


    function resetValues() {
        setDeadline('');
        setDesc('');
        setLabel('');
        setName('');
    }


    return (
        <div>
            <button onClick={() => setDisplay(true)}>Add Task</button>
            <NewTaskModal dismissOnClickOutside={true} onCancel={handleCancelNewTask}
                show={display} children={
                <div>
                     <h2>Add Task</h2>
                        <div>
                            <div>
                                <label>Name:</label>
                                <input type="text" value={name} onInput={e => setName(e.target.value)} />
                            </div>
                            <div>
                                <label>Label:</label>
                                <input type="text" value={label} onInput={e => setLabel(e.target.value)} />
                            </div>
                            <div>
                                <label>Description:</label>
                                <input type="text" value={desc} onInput={e => setDesc(e.target.value)} />
                            </div>
                            <div>
                                <label>Deadline:</label>
                                <input type="text" value={deadline} onInput={e => setDeadline(e.target.value)} />
                            </div>
                            
                            <div>
                                <button
                                    onClick={handleCancelNewTask}>
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddNewTask}>
                                    Add
                                </button>
                            </div>
                        </div>

                </div>
            }/>
        </div>
        
      );
}