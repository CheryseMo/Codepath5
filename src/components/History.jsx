import React from "react";

const History = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className="section">
      <h3>Previously Seen Dogs:</h3>
      <div className="history-grid">
        {history.map((dog, index) => (
          <div key={index} className="history-item">
            <img src={dog.imageUrl} alt={dog.breed} />
            <p>{dog.breed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
