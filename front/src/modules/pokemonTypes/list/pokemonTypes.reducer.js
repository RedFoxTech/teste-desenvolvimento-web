const defaultState = { list: {} }

export const SET_POKEMON_TYPES_LIST = 'SET_POKEMON_TYPES_LIST'

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_POKEMON_TYPES_LIST:
			return { ...state, list: action.payload.list }

		default:
			return state
	}
}

export default reducer
