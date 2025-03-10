import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="https://verifieddoctor.netlify.app" className="logo">
          V-Commerce
        </Link>
      </div>

      <nav className="nav-bar">
        {/* <Link to="https://verifieddoctor.netlify.app/" className="nav-link">
          VDr
        </Link> */}

        {/* Dropdown */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            onMouseOver={() => setDropdownOpen(!isDropdownOpen)}
            onMouseLeave={() => setDropdownOpen(isDropdownOpen)}
            >
            Products ▾
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/products">Doctor's Prescribed</Link>
              <Link to="/health-products">Cold, Fever & Pain Relief</Link>
              <Link to="/supplements">Diabetes & Hypertension</Link>
              <Link to="/supplements">Vitamins & Supplements</Link>
              <Link to="/supplements">Medical Devices</Link>
            </div>
          )}
        </div>

        <Link to="/deals" className="nav-link">
          Deals
        </Link>
        <Link to="https://verifieddoctor.netlify.app/founderPage" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="https://verifieddoctor.netlify.app/loginPage" className="nav-link">
          Login
        </Link>
        <Link to="/cart" className="cart-link">
          <button className="cart-btn">🛒</button>
        </Link>
      </nav>
    </header>
  );
}
