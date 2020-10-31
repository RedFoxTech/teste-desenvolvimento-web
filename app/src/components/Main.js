import axios from 'axios'

import {Container, Row, Col} from 'react-bootstrap'

import Header from './Header'
import Cards from './Cards'
import { useEffect, useState } from 'react'

function Main() {


    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
     function getPokemons() {
            axios.get('http://localhost:8080/pokemons').then(pokemon => {
                const data = pokemon.data
                console.log(data)
                setPokemons(data)
            })
        }
        getPokemons()
    },[])

    return(
        <>
            <Header logo="pokedex" item="novo pokemon" link={'/newpokemon'} />
            <Container>
                <Row>
                    {pokemons.map(pokemon => (
                        <Col sm={12} md={6} lg={4}wq xl={3} >
                            <Cards key={pokemon.id} name={pokemon.name} image={pokemon.image} description={pokemon.description} id={pokemon.id}  />
                        </Col>                   
                    ))}
                </Row>
            </Container>
        </>
    )       
}


export default Main