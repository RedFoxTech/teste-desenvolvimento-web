import React from "react";
import "./ModalConfirm.css";

export const Modal = ({ show, closeModalHandler }) => {
  return (
    <div
     className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>Alert!</p>
        <span onClick={closeModalHandler} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <p> Deseja realmente exluir esse pokemon ?</p>
        </div>
        <div className="modal-footer">
          <button onClick={closeModalHandler} className="btn-no">
            No
          </button>
          <button onClick={closeModalHandler} className="btn-yes">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
