import React from "react";

const Navbar = () => {
  const menuItems = ["about", "contact", "dishes", "login"];

  return (
    // Puedo usar react-roouter-dom para este navbar
    <header className="">
      <a href="#" className="fas fa-bars"></a>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
