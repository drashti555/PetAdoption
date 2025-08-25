import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; // your original UI section
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import AdoptPet from "./pages/AdoptPet";
import Signup from "./pages/Signup";
import HomeServices from "./pages/HomeServices";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/adopt" element={<AdoptPet />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home-services" element={<HomeServices />} />
      </Routes>
    </Router>
  );
}

export default App;
