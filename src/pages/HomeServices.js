import React, { useState } from "react";
import "./HomeServices.css";

const servicesData = [
  // Mumbai
  {
    name: "Happy Paws Grooming",
    category: "Grooming Center",
    city: "Mumbai",
    contact: "9876543210",
  },
  {
    name: "Fluffy Friends Grooming",
    category: "Grooming Center",
    city: "Mumbai",
    contact: "9822334455",
  },
  {
    name: "PetCare Vets",
    category: "Veterinarian",
    city: "Mumbai",
    contact: "9811122233",
  },
  {
    name: "Animal Aid Hospital",
    category: "Hospital",
    city: "Mumbai",
    contact: "9870011223",
  },
  {
    name: "Pawfect Health Hospital",
    category: "Hospital",
    city: "Mumbai",
    contact: "9875556677",
  },

  // Ahmedabad
  {
    name: "Shiny Fur Grooming",
    category: "Grooming Center",
    city: "Ahmedabad",
    contact: "9900990099",
  },
  {
    name: "Purrfect Groomers",
    category: "Grooming Center",
    city: "Ahmedabad",
    contact: "9911223344",
  },
  {
    name: "Ahmedabad VetCare",
    category: "Veterinarian",
    city: "Ahmedabad",
    contact: "9988776655",
  },
  {
    name: "LifeCare Animal Hospital",
    category: "Hospital",
    city: "Ahmedabad",
    contact: "9900112233",
  },
  {
    name: "Pet Wellness Hospital",
    category: "Hospital",
    city: "Ahmedabad",
    contact: "9933445566",
  },

  // Pune
  {
    name: "Pune Paws Grooming",
    category: "Grooming Center",
    city: "Pune",
    contact: "9001122334",
  },
  {
    name: "FurEver Grooming",
    category: "Grooming Center",
    city: "Pune",
    contact: "9011223344",
  },
  {
    name: "Pune Vet Experts",
    category: "Veterinarian",
    city: "Pune",
    contact: "9022334455",
  },
  {
    name: "Pune Pet Hospital",
    category: "Hospital",
    city: "Pune",
    contact: "9033445566",
  },
  {
    name: "Pet Life Hospital",
    category: "Hospital",
    city: "Pune",
    contact: "9044556677",
  },

  // Delhi
  {
    name: "Delhi Groom & Glow",
    category: "Grooming Center",
    city: "Delhi",
    contact: "9112233445",
  },
  {
    name: "Pet Palace Grooming",
    category: "Grooming Center",
    city: "Delhi",
    contact: "9123344556",
  },
  {
    name: "Delhi VetCare",
    category: "Veterinarian",
    city: "Delhi",
    contact: "9134455667",
  },
  {
    name: "Delhi Animal Hospital",
    category: "Hospital",
    city: "Delhi",
    contact: "9145566778",
  },
  {
    name: "Healthy Paws Hospital",
    category: "Hospital",
    city: "Delhi",
    contact: "9156677889",
  },
];

export default function HomeServices() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredServices = servicesData.filter((service) => {
    return (
      (selectedCategory === "" || service.category === selectedCategory) &&
      (selectedCity === "" || service.city === selectedCity)
    );
  });

  return (
    <div className="services-container">
      <h1>Pet Services</h1>

      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Grooming Center">Grooming Center</option>
          <option value="Veterinarian">Veterinarian</option>
          <option value="Hospital">Hospital</option>
        </select>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      <div className="cards-container">
        {filteredServices.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.name}</h3>
            <p>
              <strong>Category:</strong> {service.category}
            </p>
            <p>
              <strong>City:</strong> {service.city}
            </p>
            <p>
              <strong>Contact:</strong> {service.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
