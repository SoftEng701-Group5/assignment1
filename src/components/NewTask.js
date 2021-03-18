import NewTaskModal from "./global/Modal";
import { useState } from "react";
import "../stylesheets/components/newTaskModalContent.scss"


export default function AddTask() {
    const [display, setDisplay] = useState(false)
    const [name, setName] = useState('');
    const [label, setLabel] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('')


    function handleCancelNewTask() {
        setDisplay(false);
        resetValues();
    }


    function handleAddNewTask() {
        setDisplay(false);
        resetValues();
    }


    function resetValues() {
        setStartDate('');
        setEndDate('');
        setDesc('');
        setLabel('');
        setName('');
    }


    return (
        <div>
            <button onClick={() => setDisplay(true)}>Add Task</button>
            <NewTaskModal dismissOnClickOutside={true} onCancel={handleCancelNewTask}
                show={display} children={
                <div className="">
                    <div>
                        <label>Task Name:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={name} onInput={e => setName(e.target.value)} />
                        </div>

                        <label>Label:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={label} onInput={e => setLabel(e.target.value)} />
                        </div>

                        <label>Description:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={desc} onInput={e => setDesc(e.target.value)} />
                        </div>

                        <label>Start Date:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={startDate} onInput={e => setStartDate(e.target.value)} />
                        </div>

                        <label>End Date:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={endDate} onInput={e => setEndDate(e.target.value)} />
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