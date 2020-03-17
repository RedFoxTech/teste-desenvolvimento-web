import { saveFavoritesIDsToLocalStorage } from '../../../helpers/favorites'

const defaultState = { ids: [], list: [], isLoading: true }

export const SET_FAVORITE_POKEMONS_IDS = 'SET_FAVORITE_POKEMONS_IDS'
export const SET_FAVORITE_POKEMONS_LIST = 'SET_FAVORITE_POKEMONS_LIST'
export const SET_FAVORITE_POKEMONS_LOADING = 'SET_FAVORITE_POKEMONS_LOADING'
export const ADD_FAVORITE_POKEMONS = 'ADD_FAVORITE_POKEMONS'
export const REMOVE_FAVORITE_POKEMONS = 'REMOVE_FAVORITE_POKEMONS'

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_FAVORITE_POKEMONS_IDS:
			return { ...state, ids: action.payload }

		case SET_FAVORITE_POKEMONS_LIST:
			return { ...state, list: action.payload.list, isLoading: false }

		case SET_FAVORITE_POKEMONS_LOADING:
			return { ...state, isLoading: action.payload }

		case ADD_FAVORITE_POKEMONS:
			var { list, ids } = state
			list = [...list, action.payload]
			ids = [...ids, action.payload.id]
			saveFavoritesIDsToLocalStorage(ids)
			return { ...state, list, ids }

		case REMOVE_FAVORITE_POKEMONS:
			var { list, ids } = state
			list = list.filter(item => item.id !== action.payload.id)
			ids = ids.filter(item => item !== action.payload.id)
			saveFavoritesIDsToLocalStorage(ids)
			return { ...state, list, ids }

		default:
			return state
	}
}

export default reducer
