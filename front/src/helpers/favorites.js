const key = '@RedFoxPokedex/Favorites'

export const saveFavoritesIDsToLocalStorage = ids => {
	localStorage.setItem(key, JSON.stringify(ids))
}

export const getFavoritesIDsFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem(key) || '[]')
}
