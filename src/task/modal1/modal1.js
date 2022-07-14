import React from "react";
import "./modal1.css";
import Modal from "react-modal";

export const Modal1 = ({
  selectedItem,
  setSelectedItem,
  modalOpen,
  setModalOpen,
}) => {
  const contentOnSmall = {
    width: "80%",
    height: "80vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const contentOnLarge = {
    width: "40%",
    height: "40vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        style={{
          overlay: {
            background: "rgba(0, 0, 0 , 0.5)",

            zIndex: 2,
          },

          content: window.innerWidth <= 460 ? contentOnSmall : contentOnLarge,
        }}
      >
        <div className="modal-title">
          <h2>Task-Details</h2>
          <i
            onClick={() => {
              setModalOpen(false);
              setSelectedItem({});
            }}
            className="ri-close-circle-fill close"
          ></i>
        </div>
        <div className="modal-body">
          <div className="task-Describsion">
            <strong>Describsion: {selectedItem.value1}</strong>
          </div>
          <div className="task-status">
            <strong color="red">
              Status: {selectedItem.checked ? "Completed...!" : "Pending...!"}
            </strong>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="close-button"
            onClick={() => {
              setModalOpen(false);
              setSelectedItem({});
            }}
          >
            close
          </button>
        </div>
      </Modal>
    </div>
  );
};
