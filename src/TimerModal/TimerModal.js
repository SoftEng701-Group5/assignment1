import ReactDOM from 'react-dom';
import style from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({onPlay, onResize, children }) {

    return ReactDOM.createPortal(
        <div className={style.modalContainer}>

            {/*Components are displayed here*/}
            <div>
                {children}
            </div>
        </div>
        , modalRoot
    );
}