import React from "react";

const BanList = ({ banList, toggleBan }) => {
  if (banList.breeds.length === 0 && banList.colors.length === 0) return null;

  return (
    <div className="section ban-list">
      <h3>Ban List:</h3>
      <ul>
        {banList.breeds.map((breed) => (
          <li key={breed} onClick={() => toggleBan("breeds", breed)}>
            {breed} (Click to remove)
          </li>
        ))}
        {banList.colors.map((color) => (
          <li key={color} onClick={() => toggleBan("colors", color)}>
            {color} (Click to remove)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BanList;
