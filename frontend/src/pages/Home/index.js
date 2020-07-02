import React, { useState, useEffect, useRef } from 'react'
import {Container, Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {toast} from 'react-toastify'
import Modal from '../../components/Modal'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import api from '../../service/api'
import './style.css'

export default function Home() {

  const [pokemons, setPokemons] = useState([])
  const [showPokemon, setShowPokemon] = useState(false);
  const [paginateParams, setPaginateParams] = useState({
    currentPage: 1,
    perPage: 8
  })
  const history = useHistory()

  const searchBar = useRef(null)

  const getPokemons = async () =>{
    const gettedPokemons = await api.get('/pokemons')
    setPokemons(gettedPokemons.data)
  }

  const editFunc = (id) =>{
    history.push(`/save/${id}`)
  }

  const deleteFunc = async (id) =>{
    try{
      await api.delete(`/pokemons/${id}`)
      let filteredArray = pokemons.filter(item => item.id !== id)
      setPokemons(filteredArray)
      toast.success('Pokémon excluido com sucesso')
    }catch(err){
      if(err.response.data.message){
        toast.error(err.response.data.message)
      }
    }
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

  const indexOfLastPost = paginateParams.currentPage * paginateParams.perPage;
  const indexOfFirstPost = indexOfLastPost - paginateParams.perPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => {
    setPaginateParams({...paginateParams, currentPage: pageNum });
  }
  
  const nextPage = () =>{
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemons.length / paginateParams); i++) {
        pageNumbers.push(i);
    }
    if(paginateParams.currentPage <= pageNumbers+1)
      setPaginateParams({...paginateParams, currentPage: paginateParams.currentPage + 1 })
  }

  const prevPage = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemons.length / paginateParams); i++) {
        pageNumbers.push(i);
    }
    if(paginateParams.currentPage > 1)
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
          <InputGroup className='search-bar'>
            <FormControl
              placeholder="Search by Pokedex nº, name or type"
              aria-label="Search by Pokedex nº, name or type"
              aria-describedby="Search Bar"
              ref={searchBar}
              onKeyDown={(e)=>handleKeyDown(e)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" className="btn-search" onClick={searchPokemon}>Search</Button>
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
                  editFunc={()=>editFunc(pokemon.id)}
                  deleteFunc={()=>deleteFunc(pokemon.id)}
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
