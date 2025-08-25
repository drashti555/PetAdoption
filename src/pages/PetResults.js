import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const petsData = [
  {
    id: 1,
    name: "Tommy",
    type: "dog",
    breed: "Labrador",
    age: 2,
    city: "Mumbai",
    state: "Maharashtra",
    image: "https://placedog.net/400/300?id=1",
    contact: "9876543210",
  },
  {
    id: 2,
    name: "Kitty",
    type: "cat",
    breed: "Persian",
    age: 1,
    city: "Pune",
    state: "Maharashtra",
    image: "https://placekitten.com/400/300",
    contact: "9876543211",
  },
  {
    id: 3,
    name: "Coco",
    type: "dog",
    breed: "Beagle",
    age: 3,
    city: "Ahmedabad",
    state: "Gujarat",
    image: "https://placedog.net/400/300?id=3",
    contact: "9876543212",
  },
  {
    id: 4,
    name: "Milo",
    type: "bird",
    breed: "Parrot",
    age: 1,
    city: "Delhi",
    state: "Delhi",
    image: "https://loremflickr.com/400/300/parrot",
    contact: "9876543213",
  },
];

export default function PetResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const type = queryParams.get("type");
  const state = queryParams.get("state");
  const city = queryParams.get("city");

  const filteredPets = petsData.filter(
    (pet) =>
      (!type || pet.type === type) &&
      (!state || pet.state === state) &&
      (!city || pet.city === city)
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Available Pets for Adoption</h1>
      <button style={{ marginBottom: "15px" }} onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
      {filteredPets.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <img
                src={pet.image}
                alt={pet.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{pet.name}</h3>
              <p>
                <strong>Breed:</strong> {pet.breed}
              </p>
              <p>
                <strong>Age:</strong> {pet.age} years
              </p>
              <p>
                <strong>Location:</strong> {pet.city}, {pet.state}
              </p>
              <p>
                <strong>Contact:</strong> {pet.contact}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No pets found for your selected filters.</p>
      )}
    </div>
  );
}
