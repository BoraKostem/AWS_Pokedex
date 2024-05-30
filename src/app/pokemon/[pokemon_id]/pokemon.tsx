import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Card, ListGroup, Badge } from 'react-bootstrap';
import PolarChartComponent from '@/components/PolarChart';
import { Link } from 'react-router-dom';
import '@/app/PokeCard.css';
type Props = {
    pokemon: Pokemon;
}

export default function PokemonComponent(props: Props) {
    const { pokemon } = props;

    const getFamilyTag = (pokemon: Pokemon, evolution: string) => {
        if (evolution === pokemon.devolution) {
          return <Badge bg="danger">Devolution</Badge>
        }
        if (evolution === pokemon.pokemonName) {
          return <Badge bg="primary">Current</Badge>
        }
        if (evolution === pokemon.evolution) {
          return <Badge bg="success">Evolution</Badge>
        }
        return <></>
      }
    const prevPokemonId = (pokemon.pokemonNumber - 1) % 152;

    const nextPokemonId = (pokemon.pokemonNumber + 1) % 152;

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
            </Row>
            <Row>
                <Col>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                            <h1 className="PokeCard-Title">
                                ID: {pokemon.pokemonNumber} - {pokemon.pokemonName}
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
                </Col>
                <Col>
                    <Row className="m-2">
                        <Col>
                            <PolarChartComponent
                            speed={pokemon.speed}
                            health={pokemon.healthPoints}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            />
                        </Col>
                    </Row>
                    <Row className="m-2">
                        <Card className="p-0">
                            <Card.Header>Pokemon type</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.pokemonType.map(type => <ListGroup.Item key={pokemon.pokemonNumber}>{type}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                    <Row className="m-2">
                        <Card className="p-0">
                            <Card.Header>Evaluation family</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.evolutionFamily.map(evolution => <ListGroup.Item key={pokemon.pokemonNumber}>{evolution} {getFamilyTag(pokemon, evolution)}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}