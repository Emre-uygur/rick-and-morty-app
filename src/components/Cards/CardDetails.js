import React from 'react';

const CardDetails = ({ character, onBack }) => {
  if (!character) return null; // Eğer seçilen karakter yoksa hiçbir şey gösterme

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={onBack}>
        Back to List
      </button>
      <div className="card mt-4 text-bg-primary mb-3" style={{ width: "35rem", margin: "auto" }}>
        <img src={character.image} alt={character.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Status:</strong> {character.status} <br />
            <strong>Species:</strong> {character.species} <br />
            <strong>Gender:</strong> {character.gender} <br />
            <strong>Origin:</strong> {character.origin?.name} <br />
            <strong>Location:</strong> {character.location?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

