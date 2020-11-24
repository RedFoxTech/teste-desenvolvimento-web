import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import api from "../services/api";

interface Pokemon{
    namePokemon: String
    atk: number
    def: number
    type1: String
    type2: String
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
        return <p>Carregando...</p>
      }
  return(
      <>
      <h1>{pokemon.namePokemon}</h1>
      </>
    )
  }

  export default PokemonView