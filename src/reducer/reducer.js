const initialState = {
    pokemonsData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case('FETCH_POKEMON_DATA'):
            return {
                ...state,
                pokemonsData: [...action.data]
            }
        case('START_SEARCH'):
            let results = state.pokemonsData;
            if(action.searchParams !== "") {
                results = state.pokemonsData.filter( (pokemon) => {
                    return [...Object.values(pokemon)].indexOf(action.searchParams) >= 0 ? true : false;
                })
            }
            return {
                ...state,
                searchResults: results
            }
        default:
            return state;
    }
}

export default reducer;
