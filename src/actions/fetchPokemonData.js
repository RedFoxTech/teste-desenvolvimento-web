import axios from 'axios';

const setData = (pokemonData) => {
    return ({
        type: 'FETCH_POKEMON_DATA',
        data: pokemonData
    })
}

export const fetchPokemonData = () => {
    return async dispatch => {
        // const response = await axios.get("https://pokemongoredfoxotavio.firebaseio.com/.json");
        const response = await axios.get("./data/pokemon_go.json");
        dispatch(setData(response.data));
    }
}