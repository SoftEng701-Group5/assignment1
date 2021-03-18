import React from "react";

export default function CurrentTask() {

    return (
        <div >
            <div className="task-notes-title">
                <div className="subtask-checkbox"> </div>
                <h2>Assignment 1</h2>
            </div>

            <div className="subtask-container">
                Subtask 1 
            </div>

            <div className="detail-container-modal">
                <div className="due-detail">
                    Due: 34/04/2023
                </div>

                <div className="category-detail">
                    701
                </div>

                <div className="priority-detail">
                    Priority: High
                </div>

            </div>

           


        </div>
    );
}