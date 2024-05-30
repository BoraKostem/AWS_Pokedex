import React, { useState } from "react";
import Pokemon from "@/model/pokemon";
import "./PokeCard.css";
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

interface PokeCardProps {
  id: number;
  pokemon: Pokemon;
  speed: number;
  health: number;
  attack: number;
  defense: number;
}

const PokeCard: React.FC<PokeCardProps> = ({ id, pokemon, speed, health, attack, defense }) => {
    const prevPokemonId = (id - 1) % 152;

    const nextPokemonId = (id + 1) % 152;

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
                <Link to={`/pokemon/${prevPokemonId}`}>
                    <button className="PokeCard-Inner-Btn" >
                        ←
                    </button>
                </Link>
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
                <Link to={`/pokemon/${nextPokemonId}`}>
                    <button className="PokeCard-Inner-Btn">
                        →
                    </button>
                </Link>
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