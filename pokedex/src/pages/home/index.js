import React, { useEffect, useState } from 'react'
import axios from "axios"


const Home = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [search, setSearch ] = useState([])
    const [inputSearch, setInputSearch] = useState("")

    const handleInputSearch = (event) => {
        setInputSearch(event.target.value)
    }

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

    const searchPokemon = (name) => {
        axios.get(`https://gopokemon.herokuapp.com/pokemon/search?${name}`)
            .then((response)=>{
                setSearch(response.data.results)
            }).catch((error)=>{
                alert(error.message)
                console.log(error.message)
            })
    }
    return(
        <div>
            <input
                type="search"
                name = "search"
                value={inputSearch}
                onChange={handleInputSearch}
            
            />
            <button onClick={searchPokemon}>search</button>
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