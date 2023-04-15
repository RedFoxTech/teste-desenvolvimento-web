import axios from "axios";

export const pokemonsURL = axios.create({
  baseURL: "http://localhost:5500/pokemons",
});
