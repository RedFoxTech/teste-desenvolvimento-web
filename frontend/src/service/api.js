import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NODE_ENV==="development" ? 'http://127.0.0.1:3333/' : "https://pokedexredfox.herokuapp.com/"
});

export default api;