import "./link-item.css";
import { FiClipboard, FiX } from "react-icons/fi";

export default function LinkItem({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link Encurtado!</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000000" />
        </button>
      </div>

      <span>https://luanargolo.com</span>
      <button className="modal-link">
        https://bit.ly/sadhuasds
        <FiClipboard size={20} color="#ffffff" />
      </button>
    </div>
  );
}
