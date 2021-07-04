import axios from "axios";
import store from "@/store";

// const url = "http://[::1]:3000"; // DEV
const url = "https://pokemon-go-redfox-backend.herokuapp.com/" //PROD
export default class DB {
  constructor() {
    axios.defaults.headers.common["Authorization"] = store.state.token;
  }
  
  /* Pokémons */
  getPokemons() {
    return axios.get(url + '/pokemon');
  }
  createPokemon(pokemon) {
    return axios.post(url + "/pokemon", pokemon);
  }
  updatePokemon(pokemon) {
    return axios.patch(url + "/pokemon/" + pokemon.id, pokemon);
  }
  deletePokemon(id) {
    return axios.delete(url + "/pokemon/" + id);
  }
}