import axios from 'axios'
import { push } from 'connected-react-router'
import { routes } from "../containers/Router"

const baseUrl = "";


// ASSINCRONAS //

export const register = (form) => async dispatch => {
    let dataToSend = { ...form }
    try {
        const response = await axios.post(`${baseUrl}/register`, dataToSend)

        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.register))
    }
    catch (error) {
        console.error(error)
        window.alert('Falha ao realizar cadastro, por favor tente mais tarde')
    }
}

export const getPokemonsList = () => async dispatch => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.get(`${baseUrl}/pokemons`, {
            headers: {
                "Content-Type": "application/json",
                auth: token
            }
        })

        dispatch(setPokemonsList(response.data.posts))
    }
    catch (error) {
        console.error(error)
    }
}

export const getPostDetails = (pokemonsId) => async dispatch => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.get(`${baseUrl}/pokemons/${pokemonsId}`, {
            headers: {
                "Content-Type": "application/json",
                auth: token
            }
        })
        dispatch(setPokemonsId(response.data.post))
    }
    catch (error) {
        console.error(error)
    }
}

export const updateRegister = (form) => async (dispatch) => {
    let dataToSend = { ...form }
    try {
        const response = await axios.put(`${baseUrl}/update`, dataToSend)

        dispatch(setPokemonsList(response.data.user))
        dispatch(push(routes.home))

    } catch (error) {
        console.error(error)
        alert("Erro ao tentar burscar o registro")
    }
}

export const deletePokemon = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${baseUrl}/pokemons/${id}`)
        dispatch(setPokemonsList(response.data.user))

    }
    catch (err) {
        console.error(err)
    }
}


// SINCRONAS //
export const setPokemonsList = (listPokemons) => ({
    type: "SET_POKEMON_LIST",
    payload: { listPokemons, }
})

export const setPokemonsId = (pokemonsId) => ({
    type: "SET_POKEMONS_ID",
    payload: { pokemonsId, }
})