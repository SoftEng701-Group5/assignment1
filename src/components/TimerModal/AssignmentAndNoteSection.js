import React from "react";
import CurrentTask from './CurrentTask';
import Notes from './Notes';

export default function AssignmentAndNoteSection() {

    return (

        <div className="current-task-notes-container" >
            <div className="current-task-modal">
                <CurrentTask/>

            </div>

            <div className="notes-modal">
                <Notes/>

            </div>
            
            
        </div>
    );
}