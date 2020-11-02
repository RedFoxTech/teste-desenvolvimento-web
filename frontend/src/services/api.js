import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8080' });

const getAllPokemons = async () => {
  try {
    const { data } = await api.get('/');
    return data;
  } catch (err) {
    return console.error('getAllPokemonsAxios', err.message);
  }
};

const getPokemonById = async (id) => {
  try {
    const { data } = await api.get(`/${id}`);
    return data;
  } catch (err) {
    return console.error('getPokemonByIdAxios', err.message);
  }
};

const getStatsById = async (id) => {
  try {
    const { data } = await api.get(`/${id}/stats`);
    return data;
  } catch (err) {
    return console.error('getStatsByIdAxios', err.message);
  }
};

const getGenerationsById = async (id) => {
  try {
    const { data } = await api.get(`/${id}/generation`);
    return data;
  } catch (err) {
    return console.error('getGenerationsByIdAxios', err.message);
  }
};

const getAttributesById = async (id) => {
  try {
    const { data } = await api.get(`/${id}/attributes`);
    return data;
  } catch (err) {
    return console.error('getAttributesByIdAxios', err.message);
  }
};

export default {
  getAllPokemons,
  getPokemonById,
  getStatsById,
  getGenerationsById,
  getAttributesById,
};
