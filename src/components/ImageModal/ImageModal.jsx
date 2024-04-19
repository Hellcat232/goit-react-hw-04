import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "azure",
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

const ImageModal = ({ onClose, modalIsOpen, link, description }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <button className={css.button} onClick={onClose}>
          <IoIosCloseCircleOutline />
        </button>
        <div>
          <img src={link} alt={description} />
          <p className={css.description}>{description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
