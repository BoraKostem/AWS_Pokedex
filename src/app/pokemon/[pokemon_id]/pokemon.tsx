import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Card, ListGroup, Badge, Button } from 'react-bootstrap';
import PolarChartComponent from '@/components/PolarChart';
import Link from 'next/link';
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
    var prevPokemonId = (pokemon.pokemonNumber - 1) % 152;
    if (prevPokemonId <= 0) {
        prevPokemonId = 151;
    }
    var nextPokemonId = (pokemon.pokemonNumber + 1) % 152;
    if (nextPokemonId <= 0) {
        nextPokemonId = 1;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Container className="PokeCard">
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                            <h1 className="PokeCard-Title">
                                ID: {pokemon.pokemonNumber} - {pokemon.pokemonName}
                            </h1>
                            </Col>
                        </Row>
                        <Row className="PokeCard-Center">
                            <Col md="auto">
                            <div className="PokeCard-Image">
                                <Image
                                className="PokeCard-Image-Inner"
                                width="100px"
                                height="100px"
                                src={pokemon.mainImage}
                                />
                            </div>
                            </Col>
                        </Row>
                        <Row className="PokeCard-Center">
                            <Col md="auto">
                                <Link href={`/pokemon/${prevPokemonId}`}>
                                    <Button className="PokeCard-Inner-Btn" >
                                        ←
                                    </Button>
                                </Link>
                            </Col>
                            <Col md="auto">
                                <Link href={`/pokemon/${nextPokemonId}`}>
                                    <Button className="PokeCard-Inner-Btn">
                                        →
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
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