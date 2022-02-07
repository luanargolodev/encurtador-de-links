import "./menu.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a href="https://www.linkedin.com/in/luanargolo" className="social">
        <BsLinkedin size={24} color="#fff" />
      </a>
      <a href="https://github.com/luanargolodev" className="social">
        <BsGithub size={24} color="#fff" />
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    </div>
  );
}
