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
            axios.get('https://apitestepoke.herokuapp.com/pokemons').then(pokemon => {
                const data = pokemon.data.pokemons
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
                        <Col key={pokemon._id} sm={6} md={4} lg={3} xl={3} >
                            <Cards name={pokemon.name} image={pokemon.image} description={pokemon.description} id={pokemon._id} type={pokemon.type}  />
                        </Col>                   
                    ))}
                </Row>
            </Container>
        </>
    )       
}


export default Main