import React, { useState } from 'react'
import NavBar from '../../components/nav-bar/nav-bar.js'
import Pokemon from  '../../models/pokemon.models'

//TODO: Criar componente para evoluções
function PokemonDetails(props) {
  const pokemon = Pokemon[props.pokedexNum-1] 
  return (
    <div className="pokemon-details">
      <header>
        <NavBar title={'Pokemon Details'} home/>
      </header>
      <main>
        <h1>{pokemon.name}</h1>
      </main>
    </div>
  )
}

export default PokemonDetails