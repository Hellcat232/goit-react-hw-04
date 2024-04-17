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
};

const ImageModal = ({ modalPhoto, onClose, modalIsOpen, getID }) => {
  console.log(modalPhoto[getID].urls.regular);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={onClose}>close</button>
        <div></div>
      </Modal>
    </div>
  );
};

export default ImageModal;
