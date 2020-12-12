import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
              <Card key={ index }>
                <CardHeader>
                  <Row>
                    <Col xs="6" sm="4">{ pokemon.Name }</Col>
                    <Col xs="6" sm="4">Pokedex Number: { pokemon.['Pokedex Number'] }</Col>
                    <Col sm="4">Pokemon Generation: { pokemon.Generation }</Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <p className="card-text">Type: { pokemon.['Type 1'] } and { pokemon.['Type 2']}</p> 
                    <p className="card-text">Where to find: { pokemon.['Weather 1'] } and { pokemon.['Weather 2'] }</p>
                  </CardTitle>
                  <CardTitle tag="h6">STATUS</CardTitle>
                  <CardText>
                    <p className="card-text">Total: { pokemon.['STAT TOTAL'] }</p>
                    <p className="card-text">Atack: { pokemon.['ATK'] }</p>
                    <p className="card-text">Defense: { pokemon.['DEF'] }</p>
                    <p className="card-text">Status: { pokemon.['STA'] }</p>
                    <p className="card-text">100% CP @ 40: { pokemon.['100% CP @ 40'] }</p>
                    <p className="card-text">100% CP @ 39: { pokemon.['100% CP @ 39'] }</p>
                  </CardText>
                </CardBody>
                <CardFooter className="text-muted">2 days ago</CardFooter>
              </Card>
            ))
          }
      </Container>  
  )
}
export default Pokedex;