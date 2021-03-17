import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {

    const {children, assignmentAndNoteSection } = props;
    return ReactDOM.createPortal(
        <div className={style.modalContainer}>

            {/*Components are displayed here*/}
            <div >
                {assignmentAndNoteSection}
            </div>

            <div>
                {children}
            </div>

        </div>
        , modalRoot
    );
}