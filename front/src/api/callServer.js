import 'whatwg-fetch'

import { API_URL } from '../.env'
import paths from './paths'

const getHeaders = () => {
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
}

const getPath = (pathName, urlParams, queryParams) => {
	let { path } = paths[pathName]

	for (let key in urlParams) {
		const value = urlParams[key]
		path = path.replace(`:${key}`, value)
	}

	let queryParamsArray = []
	for (let key in queryParams) {
		const value = queryParams[key]
		queryParamsArray.push(key + '=' + value)
		console.log(key, value)
	}
	if (!!queryParamsArray.length) {
		path += '?' + queryParamsArray.join('&')
	}

	const finalPath = API_URL + path
	return finalPath
}

const callServer = (pathName, options) => {
	let { method } = paths[pathName]
	const { urlParams, queryParams, ...customOptions } = options

	const finalPath = getPath(pathName, urlParams || {}, queryParams || {})
	const headers = getHeaders()

	return new Promise((resolve, reject) => {
		fetch(finalPath, {
			method,
			headers,
			...customOptions,
			body: JSON.stringify(options.body)
		})
			.then(function(response) {
				return response.json()
			})
			.then(function(json) {
				resolve(json)
			})
			.catch(function(ex) {
				// alert(
				// 'Occorreu um erro de comunicação com o servidor. Se o erro persistir entre em contato com o desenvolvedor.',
				// )
				resolve(ex)
			})
	})
}

export const isError = response => {
	return response instanceof Error || !!response.error
}

export default callServer
