import React, { useState, useEffect } from  'react'

import PokemonItem from  '../../components/pokemon-item'
import NavBar from '../../components/nav-bar/nav-bar.js'
import ChipsSelect from  '../../components/list-filter/filter'
import GenerationsString, { GenerationsENUM, getGenerationsNum } from  '../../utils/Generations'
import Types from  '../../utils/Types'
import Eggs from  '../../utils/Eggs'
import parseStringAsArray from '../../utils/parseStringAsArray'
import { navigate } from 'hookrouter'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Pagination from '@material-ui/lab/Pagination';

import api from '../../services/api'

import './pokemon-list.css';

function PokemonList() {
  /* const [ searchText, setSearchText ] = useState() */
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([])
  const [generations, setGenerations] = useState(false)
  const [types, setTypes] = useState(false)
  const [eggs, setEggs] = useState(false)

  useEffect(() => {
    api.get(`/pokemons`)
    .then(res => {
      setPokemons(res.data)
    })
  },[])

 /*  useEffect(() => {
    api.get(`/pokemons?page=${page}`)
    .then(res => {
      setPokemons(res.data)
    })
  },[page]) */

  useEffect(() => {
    api.post(`/pokemons/filter?page=${page}`, {
      types: types ? types: Types, 
      eggs: eggs ? eggs: Eggs,
      generations: generations ? getGenerationsNum(generations) : getGenerationsNum(GenerationsString)
    })
    .then(res => {
      setPokemons(res.data)
    })
  },[page, generations, types, eggs])

  /* 
  function handleChangeSearch(e){
    setSearchText(e.target.value)
  } */

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleGenerationValue = (arr) => {
    setGenerations(arr)
  }

  const handleTypesValue = (arr) => {
    console.log(arr)
    if(!arr[0]){
      console.log('entrou no fucking if'+arr)
      setTypes(false)
    }else{
      console.log('vai logar vazio mesmo?' + arr)
    }
    setTypes(arr)
  }

  const handleEggsValue = (arr) => {
    if(!arr){
      setEggs(Eggs)
    }
    setEggs(arr)
  }
  
  return (
    <div className="pokemon-list">
      <header>
        <NavBar title={'Pokemon List'} />
        <div className='firstLine'>
          <div className="chips">
            <ChipsSelect name={'Generation'} array={GenerationsString} value={handleGenerationValue}/>
            <ChipsSelect name={'Type'} array={Types} value={handleTypesValue}/>
            <ChipsSelect name={'Eggs'} array={Eggs} value={handleEggsValue}/>
          </div>
          <div className='pagination'>
            <Pagination count={pokemons.totalPages} page={page} onChange={handleChangePage} />
          </div>
        </div>
      </header>
      <main>
        <ul>{
          pokemons.docs 
          ? pokemons.docs.map(pokemon => (
            <PokemonItem key={pokemon.name} pokemon={pokemon}/>			
          ))
          : false
        }</ul>
        <div className={'add-icon'}>
          <Fab color="primary" aria-label="add" onClick={() => navigate('/create')}>
            <AddIcon />
          </Fab>
        </div>
      </main>
    </div>
  );
}

export default PokemonList;
