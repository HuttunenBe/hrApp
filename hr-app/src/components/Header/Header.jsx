import React, { useState } from "react";
import { NavLink } from "react-router";
import "./header.css";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/about">
        <div className="logo">
          <div className="headingCircle">
            <div className="heading">
              <h1>{props.appName}</h1>
              <h2>Employees</h2>
            </div>
          </div>
        </div>
      </NavLink>

      {!menuOpen && (
        <button
          id="menuToggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Toggle mobile menu"
        >
          <span className="material-icons">menu</span>
        </button>
      )}

      <nav
        id="mobileMenu"
        className={menuOpen ? "mobileMenu open" : "mobileMenu"}
        aria-label="Mobile menu"
      >
        {menuOpen && (
          <button
            id="closeMenu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <span className="material-icons" id="closeIcon">
              close
            </span>
          </button>
        )}

        <div className="mobileNav">
          <ul>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Personlist</NavLink>
            </li>
            <li>
              <NavLink to="/addEmployee">Add Employee</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="desktopMenu">
        <ul>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Personlist</NavLink>
          </li>
          <li>
            <NavLink to="/addEmployee">Add Employee</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
