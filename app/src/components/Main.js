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
            <Header item="novo pokemon" link={'/newpokemon'} />
            <Container>
                <Row>
                    {pokemons.map(pokemon => (
                        <Col  xl={3} >
                            <Cards name={pokemon.name} image={pokemon.image} description={pokemon.description}  />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )       
}


export default Main