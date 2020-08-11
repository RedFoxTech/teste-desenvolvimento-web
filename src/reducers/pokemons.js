const initialState = {
    pokemonsList: [],
    pokemons: undefined,
    pokemonsId:localStorage.getItem('pokemonsId')
  }
  
  const pokemons = (state = initialState, action) => {
    switch (action.type) {
      case "SET_POKEMON_LIST":
        return {
          ...state, postList: action.payload.listPost
        }
        case "SET_POKEMONS_ID":
          localStorage.setItem('pokemonsId', action.payload.pokemonsId)
          return{
            ...state, pokemonsId: action.payload.pokemonsId
          }
      default:
        return {
          ...state
        }
    }
  }
  
  export default pokemons;