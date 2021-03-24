import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.querySelector("#modal-root");

/**
 * This component is a customisable modal
 * @param dismissOnClickOutside boolean used to specify if clicking outside of modal should close it
 * @param onCancel function to call when the modal is cancelled
 * @param children Variable used to represent all the children of the modal component
 * @param show boolean used to show or hide the modal
 */
export default function Modal({
  dismissOnClickOutside,
  onCancel,
  children,
  show,
}) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="modalContainerBg"
      aria-hidden="true"
      // on every click, checks if it is outside the modal div or not
      onClick={(e) => {
        if (dismissOnClickOutside && e.target.parentElement === modalRoot) {
          onCancel();
        }
      }}
    >
      <div className="modalContainer">{children}</div>
    </div>,
    modalRoot
  );
}
