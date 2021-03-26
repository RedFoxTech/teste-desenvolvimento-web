import React, { useEffect, useState } from 'react'
import axios from "axios"


const Home = () => {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(()=>{
        getPokemons()
    },[])

    const getPokemons = () => {
        axios.get("https://gopokemon.herokuapp.com/pokemon")
        .then((response)=>{
            setPokemonList(response.data.result)
        }).catch((error)=>{
            alert("Algo deu errado! ", error.message)
        })
    }

    return(
        <div>
            {
                pokemonList.map((pokemon)=>{
                    return(
                        <div key={pokemon.id}>
                            
                            <p>{pokemon.name}</p>
                            <p>{pokemon.types}</p>
                            <p>{pokemon.atack}</p>
                            <p>{pokemon.defense}</p>
                            <p>{pokemon.stat}</p>
                            <button>Details</button>
                            <button>Delete</button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default Home