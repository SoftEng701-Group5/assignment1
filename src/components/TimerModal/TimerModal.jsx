import React from "react";
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {

    const {timerSection, assignmentAndNoteSection} = props;
    return ReactDOM.createPortal(
        <div className="modal-container">
            {/* Components are displayed here */}
            <div className="modal-content">
                <div>
                    {assignmentAndNoteSection}
                </div>

                <div>
                    {timerSection}
                </div>

            </div>
        </div>
        , modalRoot
    );
}