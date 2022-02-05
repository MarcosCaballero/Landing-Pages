import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <header>
      <a href="#" className="logo">
        logo <i className="fas fa-leaf"></i>
      </a>

      <nav>
        <ul>
          <li style={{ "--i": 1 }}>
            <a href="#">home</a>
          </li>
          <li style={{ "--i": 2 }}>
            <a href="#">about</a>
          </li>
          <li style={{ "--i": 3 }}>
            <a href="#">contact</a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="#">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
