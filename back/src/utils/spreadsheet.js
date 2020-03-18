const formatSpreadsheetDataIntoCollection = rawData => {
	const [headRawData, ...contentRawData] = rawData[0].data

	return contentRawData.map(row => {
		const rowObj = {}
		row.forEach((value, index) => {
			const label = headRawData[index]
			rowObj[label] = value
		})
		return rowObj
	})
}

module.exports = { formatSpreadsheetDataIntoCollection }
