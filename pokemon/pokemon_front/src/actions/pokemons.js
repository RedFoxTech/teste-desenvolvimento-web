import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"
import { getPokemons } from "./pokemonList";

const baseURL = "https://pokeapiteste.herokuapp.com"

export const setPokemonId = (id) => ({
    type: "SET_POKEMON_ID",
    payload: {
        id
    }
})





export const deletePokemon = (id, name) => async (dispatch) => {

    try {
        if (window.confirm(`Delete Pokemon ${name} ?`)) {
            await axios.delete(`${baseURL}/deletePokemon/${id}`)
            window.alert(`The pokemon ${name} is deleted`)
            dispatch(getPokemons())
        }

    } catch (error) {
        window.alert("error")
    }
}

export const createPokemon = (
    pokedexID, name, img, generation, envolved, familyID, cross_gen, type1,
    type2, weather1, weather2, stat_total, atk, def, sta, shiny) => async (dispatch) => {
        const newPokemon = {
            pokedexID, name, img, generation, envolved, familyID, cross_gen, type1,
            type2, weather1, weather2, stat_total, atk, def, sta, shiny
        }

        try {
            await axios.post(`${baseURL}/register`, newPokemon)

            window.alert("Pokemon Registred!")
            dispatch(push(routes.Home))

        } catch (error) {
            window.alert("Error !")
        }
    } 