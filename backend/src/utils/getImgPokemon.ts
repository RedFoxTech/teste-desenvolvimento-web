import axios from "axios";

async function getImgPokemon(name: string){
  try{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().replace(' ', '-')}`)
    return response.data.sprites.other.dream_world.front_default;
  }
  catch(err){
    console.log(err)
    return '';
  }
}

export { getImgPokemon }