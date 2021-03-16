import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({onPlay, onResize, children, leftSide }) {

    return ReactDOM.createPortal(
        <div className={style.modalContainer}>

            {/*Components are displayed here*/}
            <div >
                {leftSide}
            </div>

            <div>
                {children}
            </div>

            

        </div>
        , modalRoot
    );
}