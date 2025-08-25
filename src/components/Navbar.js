// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/749/563/non_2x/hand-with-paw-print-line-icon-pet-care-love-animal-support-hand-paw-symbol-compassion-kindness-community-protection-shelter-adoption-rescue-charity-icon-wellness-vector.jpg"
            alt="ThePetNest"
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/home-services">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
