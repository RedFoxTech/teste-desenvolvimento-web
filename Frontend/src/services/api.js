import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000,
});

API.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export default API;