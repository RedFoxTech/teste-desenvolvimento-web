import axios from "axios";

const baseURL = "https://pokeapiteste.herokuapp.com"

const setPokemons = (pokemons) => ({
    type: 'SET_POKEMONS',
    payload: {
        pokemons
    }
})

export const getPokemons = (page) => async (dispath) => {
    try {
        const response = await axios.get(`${baseURL}/list?page=${page}`)
       
        dispath(setPokemons(response.data.result.pokemons))


    } catch (error) {
        window.alert("List not found")
    }
}