import React, {useState, useContext} from "react";
import * as moment from "moment";
import NewTaskModal from "./global/Modal";
import Button from "./global/Button";
import TextInput from "./global/TextInput";
import IconButton from "./global/IconButton";
import AddButton from "./global/AddButton";
import {createTask} from "../services/databaseService";
import {AuthContext} from "../services/providers/authProvider";


export default function NewTask() {
    const [display, setDisplay] = useState(false)
    const [name, setName] = useState('');
    const [label, setLabel] = useState('');
    const [desc, setDesc] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('')
    const { currentUser } = useContext(AuthContext);


    function resetValues() {
        setStartDate('');
        setEndDate('');
        setDesc('');
        setLabel('');
        setName('');
        setError('');
    }


    function handleCancelNewTask() {
        setDisplay(false);
        resetValues();
    }


    async function handleAddNewTask() {
        const stDate = startDate ? moment(startDate, true) : null
        const edDate = endDate ? moment(endDate, true) : null

        // Validate user input (only task name is mandatory)
        if (!name) {
            setError('Please add a task name.')
            return
        }
        if (stDate && edDate && stDate.isValid() && edDate.isValid() && stDate.isAfter(edDate, 'day')) {
            setError('Start date must be before or on the same day as end date.')
            return
        }

        // Persist task in firebase
        await createTask(
            stDate ? stDate.toDate() : null,
            label,
            desc,
            name,
            currentUser.uid,
            edDate ? edDate.toDate() : null
        )
        setDisplay(false);
        resetValues();
    }


    return (
        <div className="newtask-container">
            <AddButton
                onClick={() => setDisplay(true)}
            />
            <NewTaskModal dismissOnClickOutside onCancel={handleCancelNewTask} show={display}>
                <div className="">
                    <div className="hBox">
                        <TextInput
                            label="Task Name"
                            textValue={name}
                            onChangeHandler={setName}
                        />
                        <TextInput
                            label="Label"
                            textValue={label}
                            onChangeHandler={setLabel}
                        />
                    </div>

                    <TextInput
                        label="Description"
                        textValue={desc}
                        onChangeHandler={setDesc}
                    />

                    <div className="hBox">
                        <TextInput
                            label="Start Date"
                            textValue={startDate}
                            placeholderValue="dd/mm/yyyy"
                            onChangeHandler={setStartDate}
                            type="date"
                        />

                        <TextInput
                            label="End Date"
                            textValue={endDate}
                            placeholderValue="dd/mm/yyyy"
                            onChangeHandler={setEndDate}
                            type="date"
                        />
                    </div>

                    <div className="hBox">
                        <div className="newtask-button-component-container">
                            <IconButton
                                icon="cross"
                                size="48px"
                                onClick={handleCancelNewTask}
                            />
                        </div>
                        <Button
                            text="Add Task"
                            icon="plus"
                            height="48px"
                            fontSize="22px"
                            handleOnClick={handleAddNewTask}
                        />
                    </div>
                    <div className="hBox">
                        <h4 className="error-message">{error}</h4>
                    </div>
                </div>
            </NewTaskModal>
        </div>
        
      );
}
