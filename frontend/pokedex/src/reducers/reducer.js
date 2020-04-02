const initialState = {
    allPokemons: [],
    quantityOfPages: 0,
    pokemon: {}
}

const pokemons = (state = initialState, action) => {
    switch(action.type) {
        case "SET_POKEMONS":         
            return {...state, allPokemons: action.payload.pokemons}
        case "SET_QUANTITY_OF_PAGES":
            return { ...state, quantityOfPages: action.payload.quantityOfPages}
        case "SET_POKEMON":         
            return {...state, pokemon: action.payload.pokemon}
        default:
            return state
    }
}

export default pokemons