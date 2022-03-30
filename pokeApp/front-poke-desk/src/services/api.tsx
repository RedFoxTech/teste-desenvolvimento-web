import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:1337/",
    
  });
  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
  export default api