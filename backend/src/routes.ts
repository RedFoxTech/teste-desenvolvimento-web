import express from 'express';
import {PokemonsGet} from './controllers/PokemonController'
const routes = express.Router();

routes.get('/pokemons', PokemonsGet)


export { routes };
