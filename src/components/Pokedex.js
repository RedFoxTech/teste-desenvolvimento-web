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
    
    // pokemons.map((pokemon, index) => {
    //   if (pokemon.Evolved === 1) {
    //     return (
    //       <>
    //         <span>o pokemon está na forma evoluída</span>
    //       </>
    //     ) 
    //   } else {
    //     return (
    //       <span>o pokemon pode evoluir</span>
    //     )
    //   }
    // }
    return (
      <Container>
          {
            pokemons.map((pokemon, index) => (
              <Card body className="text-center" key={ index }>
                <CardHeader>
                  <Row>
                    <Col className="pokemon" xs="6" sm="4">{ pokemon.Name }</Col>
                    <Col xs="6" sm="4">Pokedex Number: { pokemon.['Pokedex Number'] }</Col>
                    <Col xs="6" sm="4">Pokemon Generation: { pokemon.Generation }</Col>
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
                <CardFooter className="text-muted">infos adicionais</CardFooter>
              </Card>
            ))
          }
      </Container>  
  )
}
export default Pokedex;