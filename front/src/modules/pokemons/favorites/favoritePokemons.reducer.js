import { hasObjectWithID } from '../../../helpers/collection'

const defaultState = { list: [] }

export const SET_FAVORITE_POKEMONS = 'SET_FAVORITE_POKEMONS'
export const TOGGLE_FAVORITE_POKEMON = 'TOGGLE_FAVOTIRE_POKEMON'

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_FAVORITE_POKEMONS:
			return { ...state, list: action.payload }

		case TOGGLE_FAVORITE_POKEMON:
			let list = state.list
			const isNew = !hasObjectWithID(state.list, action.payload.id)
			if (isNew) {
				list = [...list, action.payload]
			} else {
				list = list.filter(item => item.id !== action.payload.id)
			}

			return { ...state, list }

		default:
			return state
	}
}

export default reducer
