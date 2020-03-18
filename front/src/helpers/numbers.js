export const formatTo3Digits = number => {
	const strNumber = number.toString()
	switch (strNumber.length) {
		case 1:
			return '00' + strNumber
		case 2:
			return '0' + strNumber
		default:
			return strNumber
	}
}
