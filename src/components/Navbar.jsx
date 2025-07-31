import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import GlowingButtons from "./GlowingButtons";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">My Portfolio</div>
        <div className={`navbar-links ${drawerOpen ? "active" : ""}`}>
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setDrawerOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="GlowingButtons"><GlowingButtons /></div>
        </div>
        <div
          className={`hamburger ${drawerOpen ? "open" : ""}`}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
