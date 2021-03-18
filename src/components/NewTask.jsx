import React, {useState} from "react";
import NewTaskModal from "./global/Modal";
import Button from "./global/Button";
import TextInput from "./global/TextInput";
import IconButton from "./global/IconButton";


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
                            typeValue="date"
                        />

                        <TextInput
                            label="End Date"
                            textValue={endDate}
                            placeholderValue="dd/mm/yyyy"
                            onChangeHandler={setEndDate}
                            typeValue="date"
                        />
                    </div>

                    <div className="hBox">
                        <IconButton
                            icon="minimize"
                            size="48px"
                            onClick={handleCancelNewTask}
                            color="rgba(153, 153, 153, 0.35)"
                        />
                        <Button
                            text="Add Task"
                            icon="plus"
                            height="48px"
                            fontSize="22px"
                            handleOnClick={handleAddNewTask}
                        />
                    </div>

                </div>
            </NewTaskModal>
        </div>
        
      );
}