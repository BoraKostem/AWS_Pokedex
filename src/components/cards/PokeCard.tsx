import React, { useState } from "react";
import Pokemon from "@/model/pokemon";
import { useNavigate } from 'react-router-dom';
import "./PokeCard.css";
import { Row, Col, Container, Image, ProgressBar, Card, ListGroup, Badge } from 'react-bootstrap';

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
    <Container className="PokeCard">
        <Row className="justify-content-md-center">
            <Col md="auto">
            <h1 className="PokeCard-Title">
                ID: {id} - {pokemon.pokemonName}
            </h1>
            </Col>
        </Row>
        <Row className="PokeCard-Center">
            <Col md="auto">
            <button className="PokeCard-Inner-Btn" onClick={goToPrevPokemon}>
                ←
            </button>
            </Col>
            <Col md="auto">
            <div className="PokeCard-Image">
                <img
                className="PokeCard-Image-Inner"
                width="100px"
                height="100px"
                src={pokemon.mainImage}
                />
            </div>
            </Col>
            <Col md="auto">
            <button className="PokeCard-Inner-Btn" onClick={goToNextPokemon}>
                →
            </button>
            </Col>
        </Row>
        <Row>
            <Col>
            <p>Speed: {speed} Health: {health} Attack: {attack} Defense: {defense}</p>
            </Col>
        </Row>
    </Container>
  );
};

export default PokeCard;