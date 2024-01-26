import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children, onClose }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
      if (onClose) {
        onClose(); // Optional: Notify parent component about modal closure
      }
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="close-button" onClick={onClose}>
          &times;
        </div>
        {children}
      </div>
    </>,
    elRef.current
  );
};

export default Modal;
