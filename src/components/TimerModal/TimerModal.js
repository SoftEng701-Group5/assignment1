import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, AssignmentAndNoteSection }) {

    return ReactDOM.createPortal(
        <div className={style.modalContainer}>

            {/*Components are displayed here*/}
            <div >
                {AssignmentAndNoteSection}
            </div>

            <div>
                {children}
            </div>

            

        </div>
        , modalRoot
    );
}