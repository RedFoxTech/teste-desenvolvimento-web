const initialState = {
    allPokemons: [],
    quantityOfPages: 0,
    pokemon:[]
}

const pokemonReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_POKEMONS":
            const pokemonList = action.payload.allPokemons;
            return {...state, allPokemons: pokemonList}
        case "SET_QUANTITY_PAGES":
            return {...state, quantityOfPages: action.payload.quantityOfPages}

            default:
            return state
    }
}

export default pokemonReducer