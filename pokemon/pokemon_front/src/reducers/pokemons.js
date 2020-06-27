const initialState = {
    allPokemons: [],
    selectedPokemonId: ""
};

const pokemons = (state= initialState, action) => {
    switch(action.type) {
        case "SET_POKEMONS":
            return { ...state, allPokemons: action.payload.pokemons}

            default:
                return state;
        
    }
}

export default pokemons;