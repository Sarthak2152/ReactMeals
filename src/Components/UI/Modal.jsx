import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
const Modal = function ({ children, open, onClose, className = " " }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog
      onClose={onClose}
      ref={dialog}
      className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] max-h-[90vh]  p-7 bg-[#e4ddd4] border-0 rounded-lg backdrop:bg-stone-900/90 ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
