import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleShortLink() {
    setShowModal(true);
  }

  return (
    <div className="container-home">
      <Menu />
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Encurtador de Links</h1>
        <span>Encurte os seus links de forma rápida e eficaz! ✂️</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#ffffff" />
          <input
            type="text"
            placeholder="Cole seu link aqui"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar link</button>
      </div>

      {showModal && <LinkItem closeModal={() => setShowModal(false)} />}
    </div>
  );
}
