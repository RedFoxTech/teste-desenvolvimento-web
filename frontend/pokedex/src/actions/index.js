import axios from "axios"

const setPokemons = (pokemons) => ({
    type: "SET_POKEMONS",
    payload: {
        pokemons
    }
})

const setQuantityOfPages = (quantityOfPages) => ({
    type: "SET_QUANTITY_OF_PAGES",
    payload: {
        quantityOfPages
    }
})

const setPokemon = (pokemon) => ({
    type: "SET_POKEMON",
    payload: {
        pokemon
    }
})

export const getPokemons = (page) => async(dispatch) => {
    try{
        const response = await axios.post("https://redfox-pokedex.herokuapp.com/pokemons", {page})
        dispatch(setPokemons(response.data.pokemons))
    }catch(err){
        console.log(err)
    }
}

export const getQuantityOfPages = () => async(dispatch) => {
    try{
        const response = await axios.get("https://redfox-pokedex.herokuapp.com/pages")
        dispatch(setQuantityOfPages(response.data.quantityOfPages))

    }catch(err){
        console.log(err)
    }
}

export const getPokemonByNameOrNumber = (nameOrNumber) => async(dispatch) => {
    try{
        const response = await axios.get(`https://redfox-pokedex.herokuapp.com/pokemons/${nameOrNumber}`)
        const quantityOfPages = 0
        dispatch(setQuantityOfPages(quantityOfPages))
        dispatch(setPokemons(response.data.pokemons))
    }catch(err){
        console.log(err)
        alert("Pokemon não encontrado")
    }
}

export const getPokemonById = (id) => async(dispatch) => {
    try{
        const response = await axios.get(`https://redfox-pokedex.herokuapp.com/pokemon/${id}`)
        dispatch(setPokemon(response.data.pokemon))
    }catch(err){
        console.log(err)
        alert("Pokemon não encontrado")
    }
}