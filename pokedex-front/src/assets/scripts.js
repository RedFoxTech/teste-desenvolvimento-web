export function pad(number, length) {
	//add numbers in front of the numbers.
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}