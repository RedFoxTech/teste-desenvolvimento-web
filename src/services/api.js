import axios from 'axios'; 

const api = axios.create({
	baseURL:
		process.env.REACT_APP_APP_TYPE !== 'development'
			? process.env.REACT_APP_API_URL
			: 'http://localhost:3333/',
	headers : { }
});


export default api; 