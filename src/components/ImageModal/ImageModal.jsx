import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const ImageModal = ({ onClose, modalIsOpen, description, regular }) => {
  console.log(description, regular);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={onClose}>close</button> */}
        <div>
          <img src={regular} alt={description} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
