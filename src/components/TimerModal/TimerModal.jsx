import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, assignmentAndNoteSection }) {

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