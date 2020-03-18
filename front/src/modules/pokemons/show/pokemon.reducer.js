export const SET_POKEMON_SINGLE = 'SET_POKEMON_SINGLE'
export const SET_POKEMON_LOADING = 'SET_POKEMON_LOADING'

const defaultState = { single: {}, isLoading: true }

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_POKEMON_SINGLE:
			return { ...state, single: action.payload, isLoading: false }

		case SET_POKEMON_LOADING:
			return { ...state, isLoading: action.payload }

		default:
			return state
	}
}

export default reducer
