import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://157.245.95.117:3333/',
    baseURL: 'http://localhost:3333/',
});

export default api;