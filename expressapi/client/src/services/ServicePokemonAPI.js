import http from '../http-common';
import url from 'url';
import { trackPromise } from 'react-promise-tracker';

const ServicePokemonAPI = {}


//create 
ServicePokemonAPI.insertPokemon = () =>
{ return http.post(`/api/pokemon`); };

//find 
// ServicePokemonAPI.findUniquePokemon = () =>
// { return http.post(`/api/pokemon/unique`); };
ServicePokemonAPI.findPokemonById = (id) =>
{ return trackPromise(http.get(`/api/pokemon/${id}`)); };
ServicePokemonAPI.findAllPokemonByProperty = (name, value) =>
{
  //const params = new url.URLSearchParams({ name: name, value: value })
  // change it later
  return trackPromise(http.get(`/api/pokemons/?name=${name}&value=${value}`));
};

//update
ServicePokemonAPI.updatePokemonById = (id, data) =>
{ return trackPromise(http.put(`/api/pokemon/${id}`, data)); };

//delete
ServicePokemonAPI.deletePokemonById = (id) =>
{ return trackPromise(http.delete(`/api/pokemon/${id}`)); };
ServicePokemonAPI.removeAllPokemonByProperty = (name, value) =>
{
  const params = new url.URLSearchParams({ name: name, value: value })
  return http.delete(`/api/pokemons/${params}`);
};











export default ServicePokemonAPI