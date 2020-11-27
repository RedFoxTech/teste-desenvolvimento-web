import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import api from "../services/api";
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonView.css'

interface Pokemon{
    namePokemon: String
    atk: number
    def: number
    type1: String
    type2: String
    evolutionStage: number
    generation:number
    evolved: string
    familyId: number
    cross: string
    weather1: string
    weather2: string
    statTotal: number
    legendary: String
    aquireable: number
    spawns: string
    regional: string
    raidable: number
    hatchable: number
    shiny: number
    nest: string
    newPoke: string
    notGettable: string
    futureEvolved: string
    cp40: number
    cp39: number
    image: string
    image_url: string
  }
interface PokemonParams{
    pokedexNumber: string
  }

  function PokemonView(){
    const params = useParams<PokemonParams>()
    const [pokemon, setPokemon] = useState<Pokemon>()
  
      useEffect(()=>{
          api.get(`Pokemon/${params.pokedexNumber}`).then(res =>{   
              setPokemon(res.data)
          })
      }, [params.pokedexNumber])
  
      if(!pokemon){
        return <p>Loading...</p>
      }
  return(
      <div className="page-view">
        <Sidebar/>
         <div className="page-content">
            <img src={pokemon.image_url} alt="" style={{height: '220px'}}/>
            <h1>{pokemon.namePokemon}</h1>
            <div className="skills">
                      <strong>ATK: </strong>{pokemon.atk} <strong>DEF: </strong>{pokemon.def}
                      <strong>Type 1: </strong>{pokemon.type1} <strong>Type 2: </strong>{pokemon.type2}
                      <strong>Evolved: </strong>{pokemon.evolved} <strong>evolutionStage: </strong>{pokemon.evolutionStage}
            </div>
         </div>
      </div>
    )
  }

  export default PokemonView