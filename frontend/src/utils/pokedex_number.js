export function pad(numero, tamanho) {
	var txt = '' + numero;
	while (txt.length < tamanho) {
		txt = '0' + txt;
	}
	return txt;
}