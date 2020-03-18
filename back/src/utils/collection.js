const getUniqValuesFromCollection = (data, ...fields) => {
	let list = []
	fields.forEach(field => {
		list = [...list, ...data.map(item => item[field])]
	})

	return [...new Set(list)].filter(name => !!name)
}

// [{id: 1, name: 'Pikachu'}] -> {Pikachu: 1}
const formatToCollectionIntoObject = (data, fieldKey, fieldValue) => {
	const obj = {}
	data.forEach(item => {
		obj[item[fieldKey]] = item[fieldValue]
	})
	return obj
}

module.exports = { getUniqValuesFromCollection, formatToCollectionIntoObject }
