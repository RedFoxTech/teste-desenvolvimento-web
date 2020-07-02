import React, { useState, useEffect, useRef } from 'react'
import {Container, Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap'
import Modal from '../../components/Modal'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import api from '../../service/api'

export default function Home() {

  const [pokemons, setPokemons] = useState([])
  const [showPokemon, setShowPokemon] = useState(false);
  const [paginateParams, setPaginateParams] = useState({
    currentPage: 1,
    perPage: 8
  })
  
  const indexOfLastPost = paginateParams.currentPage * paginateParams.perPage;
  const indexOfFirstPost = indexOfLastPost - paginateParams.perPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  const searchBar = useRef(null)

  const getPokemons = async () =>{
    const gettedPokemons = await api.get('/pokemons')
    setPokemons(gettedPokemons.data)
  }

  const searchPokemon = async ()=>{
    const text = searchBar.current.value
    const pokemonTypes = [
      'normal',
      'fighting',
      'flying',
      'poison',
      'ground',
      'rock',
      'bug',
      'ghost',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'fairy',
      'dark',
    ]
    let gettedPokemons = []
    if(text){
      if(pokemonTypes.includes(text.toLowerCase())){
        gettedPokemons = await api.get(`/pokemons?type=${text}`)
      }else if(isNaN(text)){
        gettedPokemons = await api.get(`/pokemons?name=${text}`)
      }else{
        gettedPokemons = await api.get(`/pokemons?pokedex_number=${text}`)
      }
    }else{
      gettedPokemons = await api.get('/pokemons')
    }
    if(gettedPokemons.data && Array.isArray(gettedPokemons.data))
      setPokemons(gettedPokemons.data)
    else if(gettedPokemons.data && !Array.isArray(gettedPokemons.data))
      setPokemons([gettedPokemons.data])
    else if(!gettedPokemons.data)
      setPokemons([])
  }

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      searchPokemon()
    }
  }

  const paginate = (pageNum) => {
    setPaginateParams({...paginateParams, currentPage: pageNum });
  }
  const nextPage = () =>{
    setPaginateParams({...paginateParams, currentPage: paginateParams.currentPage + 1 })
  }

  const prevPage = () => {
    setPaginateParams({...paginateParams, currentPage: paginateParams.currentPage - 1 })
  }

  useEffect(() => {
    getPokemons()
  }, [])
  
  return (
    <>
    <Container fluid>
      <Row>
        <Col md={{span:6, offset:3}}>
          <InputGroup>
            <FormControl
              placeholder="Search by Pokedex nº, name or type"
              aria-label="Search by Pokedex nº, name or type"
              aria-describedby="Search Bar"
              ref={searchBar}
              onKeyDown={(e)=>handleKeyDown(e)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={searchPokemon}>Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
          {
            currentPosts.map(pokemon=>(
              <Col md={3} sm={6} xs={12} key={pokemon.id}>
                <Card
                  img={pokemon.imgUrl}
                  pokedexNumber={pokemon.pokedexNumber}
                  alt={pokemon.name}
                  name={pokemon.name}
                  type1={pokemon.type1}
                  type2={pokemon.type2}
                  onClick={()=>setShowPokemon(pokemon)}
                />
              </Col>
            ))
            
          }
      </Row>
      {
        pokemons.length > 8
        &&
        <Pagination
        postsPerPage={paginateParams.perPage}
        totalPosts={pokemons.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage} />
      }
    </Container>
    <Modal showPokemon={showPokemon} changeShowPokemon={()=>setShowPokemon(false)}/>
    </>
  )
}
