import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {

    const {children, assignmentAndNoteSection} = props;
    return ReactDOM.createPortal(
        <div className="modal-container">

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