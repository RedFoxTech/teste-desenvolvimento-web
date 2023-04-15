import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/pokemons';

const getPokemons = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

const getPokemonById = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

const getPokemonByName = async (name) => {
  if (name === "")
    return [];
  const { data } = await axios.get(`${baseUrl}/search/${name}`);
  return data;
};

const createPokemon = async (pokemon) => {
  const { data } = await axios.post(baseUrl, pokemon);
  return data;
};

const updatePokemon = async (id, pokemon) => {
  const { data } = await axios.put(`${baseUrl}/${id}`, pokemon);
  return data;
};

const deletePokemon = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export {
  getPokemons,
  getPokemonById,
  getPokemonByName,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
