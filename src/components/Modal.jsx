import React from "react";
import "./Modal.css";


// if modal is not open, render null
// model overlay is outer wrapper 
// model content is content inside the box modal.
//{children} renders content passed as children
// a close button represented by 'x' triggers onclose function
// stopPropagation here prevents click event from propagating up allowing users to interact with the elements without closing the modal unintentionally.
const Modal = ({ isOpen, onClose, children }) => {
if (!isOpen) return null;

return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <span className="close-button" onClick={onClose}>
        &times;
        </span>
    </div>
    </div>
);
};

export default Modal;