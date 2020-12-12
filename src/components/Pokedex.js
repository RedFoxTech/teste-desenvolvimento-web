import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pokedex.css';
import { Container, Row, Col, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      axios.get('pokemon.json').then((response) => {
        setPokemons(response.data)
      })
    })
    
    return (
      <Container>
          {
            pokemons.map((pokemon, index) => (
              <Card body className="text-center">
                <CardHeader>
                  <Row>
                    <Col className="pokemon" xs="1" md="4">{ pokemon.Name }</Col>
                    <Col xs="1" md="4">Pokedex Number: { pokemon.['Pokedex Number'] }</Col>
                    <Col xs="1" md="4">Pokemon Generation: { pokemon.Generation }</Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <Row xs="2">
                      <Col>Type: { pokemon.['Type 1'] } and { pokemon.['Type 2']}</Col>
                      <Col>Where to find: { pokemon.['Weather 1'] } and { pokemon.['Weather 2'] }</Col>
                    </Row>
                    </CardTitle>
                  <CardTitle>STATUS</CardTitle>
                  <CardText>
                    <Row xs="2">
                      <Col>Total: { pokemon.['STAT TOTAL'] }</Col>
                      <Col>Atack: { pokemon.['ATK'] }</Col>
                    </Row>
                    <Row xs="2">
                      <Col>Defense: { pokemon.['DEF'] }</Col>
                      <Col>Status: { pokemon.['STA'] }</Col>
                    </Row>
                    <p className="card-text">100% CP @ 39: { pokemon.['100% CP @ 39'] }</p>
                    <p className="card-text">100% CP @ 40: { pokemon.['100% CP @ 40'] }</p>                    
                  </CardText>
                </CardBody>
                <CardFooter>
                  <p>{pokemon.Evolved === '1' ? 'This Pokemon is already evolved' : 'This Pokemon can evolve'}</p>
                  <p>{pokemon.Legendary === '1' ? 'This Pokemon is Legendary!' : null}</p>
                  <p>{pokemon.Shiny === '1' ? 'This Pokemon is Shiny!' : null}</p>
                  <p>{pokemon.Aquireable === '0' ? 'You can not aquire this Pokemon :(' : null}</p>
                  <p>{pokemon.Regional === '1' ? 'This is a regional Pokemon' : null}</p>
                  <p>{pokemon.['Not-Gettable'] === '1' ? 'You can not have this Pokemon, Sorry!' : null}</p>
                  <p>{(pokemon.Hatchable === '2') ? 'You can hatch this Pokemon with a 2km egg' : (pokemon.Hatchable === '5') ? 'You can hatch this Pokemon with a 2km egg' : (pokemon.Hatchable === '10') ? 'You can hatch this Pokemon with a 10km egg' : null}</p>
                </CardFooter>
              </Card>
            ))
          }
      </Container>  
  )
}
export default Pokedex;