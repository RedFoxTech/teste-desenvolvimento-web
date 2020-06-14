const initialState = {
  currentPage: [],
  nextPage: [],
  pageNumber: 1,
  lastPageNumber: 0
}

export const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS": {
      return {
        ...state, 
        list: action.payload.pokemons
      }
    }
    case "SET_FILTER": {
      return {
        ...state, 
        list: action.payload.filteredPokemons
      }
    }
    case "SET_PAGE_NUMBER": {
      return {
        ...state, 
        pageNumber: action.payload.pageNumber
      }
    }
    case "SET_LAST_PAGE": {
      return {
        ...state, 
        lastPageNumber: action.payload.lastPageNumber
      }
    }
    default: {
      return state
    }
  }
}

export default pokemons;