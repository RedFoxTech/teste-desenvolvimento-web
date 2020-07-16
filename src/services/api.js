import axios from 'axios'; 

const api = axios.create({
	baseURL:
		process.env.APP_TYPE !== 'development'
			? 'https://pokedex-backend-k.herokuapp.com/'
			: 'http://localhost:3333/',
});

export default api; 