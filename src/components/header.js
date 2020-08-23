import React from "react";
import './styles/header.scss'

function Header() {
    return (
      <nav>
        <a href="/" id="nav-logo">
          Victor J Perez III
        </a>
        <div className="nav-links">
          <a href="https://victorjperez.github.io/writing">
            WRITING
          </a>
          <a href="https://victorjperez.github.io/portfolio/">
            RESUME
          </a>
          <a href="https://www.linkedin.com/in/victorjpereziii/">
            LINKEDIN
          </a>
        </div>
      </nav>
    );
}
export default Header