import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, id, type, exp }) => {
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img className="Pokecard-img" src={img} />
      <div className="Pokecard-info">Type: {type}</div>
      <div className="Pokecard-info">Exp: {exp}</div>
    </div>
  );
};

export default Pokecard;
