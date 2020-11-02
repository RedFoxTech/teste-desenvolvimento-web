import { navigate } from 'hookrouter'
import React from 'react'
import HSBar from "react-horizontal-stacked-bar-chart";
import './style.css'

function PokemonItem({ pokemon }) {
  return (
    <li className='pokemon-item' /* onClick={() => navigate('/details/' + pokemon.pokedexNum)} */>
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokedexNum}.png`} alt={pokemon.name}/> 
      <div className='pokemon-info'>
        <strong>#{pokemon.pokedexNum} {pokemon.name}</strong>
        <span>{pokemon.type.join(', ')}</span>
        <h5>Status Total: {pokemon.statsTotal}</h5>
        <HSBar
          data={[
            { value: pokemon.atk, color: "rgb(255, 51, 51)" },
            { value: pokemon.sta, color: "rgb(102, 255, 255)" },
            { value: pokemon.def, color: "rgb(255, 255, 102)" }
          ]}
          outlineWidth={1}
          height={10}
        />
      </div>
    </li>
  )
}

export default PokemonItem