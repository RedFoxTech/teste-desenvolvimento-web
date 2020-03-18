const defaultState = {
	list: [],
	filter: {},
	total: 0,
	page: 1,
	isLoading: true,
	refresh: false,
	isLoadingMore: false,
	canLoadMore: false
}

export const SET_POKEMONS_LIST = 'SET_POKEMONS_LIST'
export const MERGE_POKEMONS_LIST = 'MERGE_POKEMONS_LIST'
export const SET_POKEMONS_LOADING = 'SET_POKEMONS_LOADING'
export const ADD_POKEMONS_PAGE = 'ADD_POKEMONS_PAGE'

export const SET_POKEMONS_FILTER_ITEM = 'SET_POKEMONS_FILTER_ITEM'
export const FORCE_POKEMONS_REFRESH = 'FORCE_POKEMONS_REFRESH'

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_POKEMONS_LIST:
			var { list, total, totalPages, page } = action.payload
			return { ...state, list, total, page: 1, isLoading: false, canLoadMore: totalPages > page, refresh: false }

		case MERGE_POKEMONS_LIST:
			var { list, page, total, totalPages } = action.payload
			return { ...state, list: [...state.list, ...list], isLoadingMore: false, canLoadMore: totalPages > page }

		case SET_POKEMONS_LOADING:
			return { ...state, isLoading: action.payload }

		case ADD_POKEMONS_PAGE:
			return { ...state, page: state.page + 1, isLoadingMore: true }

		case SET_POKEMONS_FILTER_ITEM:
			const { field, value } = action.payload
			return { ...state, filter: { ...state.filter, [field]: value } }

		case FORCE_POKEMONS_REFRESH:
			return { ...state, refresh: true }

		default:
			return state
	}
}

export default reducer
