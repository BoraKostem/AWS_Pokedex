import React, { useState } from "react";
import Pokemon from "@/model/pokemon";
import { useNavigate } from 'react-router-dom';
import "./PokeCard.css";

interface Sprites {
  [key: string]: string | null;
}

interface PokeCardProps {
  id: number;
  pokemon: Pokemon;
  speed: number;
  health: number;
  attack: number;
  defense: number;
}

const PokeCard: React.FC<PokeCardProps> = ({
  id,
  pokemon,
  speed,
  health,
  attack,
  defense,
}) => {
  const navigate = useNavigate();

  const goToPrevPokemon = () => {
    const prevPokemonId = id - 1;
    navigate(`/pokemon/${prevPokemonId}`);
  };

  const goToNextPokemon = () => {
    const nextPokemonId = (id + 1) % 152;
    navigate(`/pokemon/${nextPokemonId}`);
  };

  return (
    <div className="PokeCard">
      <h1 className="PokeCard-Title">
        ID: {id} - {pokemon.pokemonName}
      </h1>
      <div className="PokeCard-Center">
        <button className="PokeCard-Inner-Btn" onClick={goToPrevPokemon}>
          ←
        </button>
        <div className="PokeCard-Image">
          <img
            className="PokeCard-Image-Inner"
            width="100px"
            height="100px"
            src={pokemon.mainImage}
          />
        </div>
        <button className="PokeCard-Inner-Btn" onClick={goToNextPokemon}>
          →
        </button>
      </div>
      <div>
        <p>Speed: {speed} Health: {health} Attack: {attack} Defense: {defense}</p>
      </div>
    </div>
  );
};

export default PokeCard;