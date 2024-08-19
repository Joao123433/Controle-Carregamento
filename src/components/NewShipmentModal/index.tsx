import Modal from "react-modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
interface NewShipmentModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewShipmentmodal({ isOpen, onRequestClose }: NewShipmentModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <FontAwesomeIcon icon={faXmark} size="xl" />        
      </button>
      <form action="">
        <label htmlFor="">Expedicao</label>
        <input type="text" />
      </form>
    </Modal>
  )
}