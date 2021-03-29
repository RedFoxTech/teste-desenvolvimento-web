import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API}/api`,
  timeout: 10000,
});

API.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export default API;