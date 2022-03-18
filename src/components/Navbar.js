import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/Hashtag_722.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#homepage">Home</a>
          </li>
          <li>
            <a href="#menu-items">Menu</a>
          </li>
          <li>
            <a href="#aboutpage">About us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
