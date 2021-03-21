import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.querySelector("#modal-root");

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
