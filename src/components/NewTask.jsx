import React, {useState} from "react";
import NewTaskModal from "./global/Modal";
import "../stylesheets/components/newTaskModalContent.scss"


export default function AddTask() {
    const [display, setDisplay] = useState(false)
    const [name, setName] = useState('');
    const [label, setLabel] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('')


    function resetValues() {
        setStartDate('');
        setEndDate('');
        setDesc('');
        setLabel('');
        setName('');
    }


    function handleCancelNewTask() {
        setDisplay(false);
        resetValues();
    }


    function handleAddNewTask() {
        setDisplay(false);
        resetValues();
    }


    return (
        <div>
            <button type="button" onClick={() => setDisplay(true)}>Add Task</button>
            <NewTaskModal dismissOnClickOutside onCancel={handleCancelNewTask} show={display}>
                <div className="">
                    <div>
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label>Task Name:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={name} onInput={e => setName(e.target.value)} />
                        </div>

                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label>Label:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={label} onInput={e => setLabel(e.target.value)} />
                        </div>

                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label>Description:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={desc} onInput={e => setDesc(e.target.value)} />
                        </div>

                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label>Start Date:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={startDate} onInput={e => setStartDate(e.target.value)} />
                        </div>

                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label>End Date:</label>
                        <div className="textInputContainer">
                            <input className="textInput" type="text" value={endDate} onInput={e => setEndDate(e.target.value)} />
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={handleCancelNewTask}>
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleAddNewTask}>
                                Add
                            </button>
                        </div>
                    </div>

                </div>
            </NewTaskModal>
        </div>
        
      );
}