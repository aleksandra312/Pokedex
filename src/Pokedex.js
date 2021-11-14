import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ pokemons }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header">Pokedex</h1>
      <div className="Pokedex-pokecards">
        {pokemons.map((p) => (
          <Pokecard
            name={p.name}
            id={p.id}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
