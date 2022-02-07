import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";

export default function Home() {
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
          <input type="text" placeholder="Cole seu link aqui" />
        </div>

        <button>Encurtar link</button>
      </div>
    </div>
  );
}
