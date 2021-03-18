import ReactDOM from 'react-dom';
import style from "./Modal.scss";

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {

    const {timerSection, assignmentAndNoteSection} = props;
    return ReactDOM.createPortal(
        <div className="modal-container">

            {/* Components are displayed here */}
            <div>
                {assignmentAndNoteSection}
            </div>

            <div>
                {timerSection}
            </div>

        </div>
        , modalRoot
    );
}