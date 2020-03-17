export const prepareFilterParams = filter => {
	const cleanFilter = {}

	Object.keys(filter).forEach(key => {
		const value = filter[key]
		if (!!value) {
			cleanFilter[key] = value
		}
	})

	return cleanFilter
}
