import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
      saveLink("@bitly", response.data);
      setLink("");
    } catch {
      alert("Ops! Parece que algo deu errado.");
      setLink("");
    }
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

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
