import React from "react";

const DogCard = ({ dog, toggleBan }) => {
  if (!dog) return <p>Loading dog...</p>;

  return (
    <div className="dog-card">
      <img src={dog.imageUrl} alt={dog.breed} />
      <h2 className="clickable" onClick={() => toggleBan("breeds", dog.breed)}>
        Breed: {dog.breed}
      </h2>
      <h3 className="clickable" onClick={() => toggleBan("colors", dog.color)}>
        Color: {dog.color}
      </h3>
    </div>
  );
};

export default DogCard;
