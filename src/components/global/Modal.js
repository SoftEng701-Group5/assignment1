import ReactDOM from 'react-dom';
import "../../stylesheets/components/global/modal.scss"

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ dismissOnClickOutside, onCancel, children, show }) {
    if(!show){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="modalContainerBg" onClick={e => {
            if (dismissOnClickOutside && e.target.parentElement === modalRoot) {
                onCancel();
            }
        }}>
            <div className="modalContainer">
                {children}
            </div>
        </div>
        , modalRoot
    );
}

