const defaultState = {
	single: {},
	isLoading: true
}

export const SET_POKEMON_FAMILY_SINGLE = 'SET_POKEMON_FAMILY_SINGLE'
export const SET_POKEMON_FAMILY_LOADING = 'SET_POKEMON_FAMILY_LOADING'

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_POKEMON_FAMILY_SINGLE:
			return { ...state, single: action.payload, isLoading: false }

		case SET_POKEMON_FAMILY_LOADING:
			return { ...state, isLoading: action.payload }

		default:
			return state
	}
}

export default reducer
