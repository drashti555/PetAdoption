import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Re-Home and Adopt a Pet</h1>
          <p>Every Pet Deserves a Good Home.</p>
          <p> #Adoptlove</p>
          <Link to="/adopt">
            <button className="adopt-btn">Adopt a pet</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
