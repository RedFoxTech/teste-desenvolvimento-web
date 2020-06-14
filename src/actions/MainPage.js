import axios from 'axios'

const baseUrl = 'https://sec9w2ixle.execute-api.us-east-1.amazonaws.com/v1'

export const setPokemonList = (pokemons) => {
  return {
    type: 'SET_POKEMONS',
    payload: {
      pokemons
    }
  }
}
export const setFilteredPokemon = (filteredPokemons) => {
  return {
    type: 'SET_FILTER',
    payload: {
      filteredPokemons
    }
  }
}
export const setPageNumber = (pageNumber) => {
  return {
    type: 'SET_PAGE_NUMBER',
    payload: {
      pageNumber
    }
  }
}
export const setLastPageNumber = (lastPageNumber) => {
  return {
    type: 'SET_LAST_PAGE',
    payload: {
      lastPageNumber
    }
  }
}

export const getPokemonList = (pageNumber) => async (dispatch) => {
  try {
    if (pageNumber) {
      const result = await axios.get(`${baseUrl}/PokemonGo?page=${pageNumber}`)

      const nextPageResult = await axios.get(`${baseUrl}/PokemonGo?page=${pageNumber + 1}`)

      if (!nextPageResult.data.length) {
        dispatch(setLastPageNumber(pageNumber - 1))
      }
      if (result.data.length) {
        dispatch(setPokemonList(result.data))
        dispatch(setPageNumber(pageNumber))
      }
    }

  } catch (error) {
    console.log(error)
  }
}

export const getFilteredPokemons = (Type_1) => async (dispatch) => {
  try {
    const result = await axios.get(`${baseUrl}/PokemonGo`,
      {
        params: {
          name: "fire"
        },
        body: {
          type: Type_1
        }
      })

    dispatch(setFilteredPokemon(result.data))

  } catch (error) {
    console.log(error)
  }
}