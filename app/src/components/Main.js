import axios from 'axios'

import {Container, Row, Col} from 'react-bootstrap'

import Header from './Header'
import Cards from './Cards'
import { useEffect, useState } from 'react'

function Main() {
    const [search, setSearch] = useState('')
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

    const filterPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <>
            <Header logo="pokedex" item="novo pokemon" link={'/newpokemon'} />
            <Container>
            <div className="form-group">
                <input className="form-control mt-4" type="text" placeholder="Procure por um pokemon" onChange={ e => setSearch(e.target.value)} />
            </div>
                <Row my-1>
                    {filterPokemons.map(pokemon => (
                        <Col sm={6} md={4} lg={3}wq xl={3} >
                            <Cards key={pokemon.id} name={pokemon.name} image={pokemon.image} description={pokemon.description} id={pokemon.id}  />
                        </Col>                   
                    ))}
                </Row>
            </Container>
        </>
    )       
}


export default Main