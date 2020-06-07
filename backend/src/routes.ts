import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import TypeController from './controllers/TypeController';
import WeatherController from './controllers/WeatherController';
import PokemonControler from './controllers/PokemonController';

const routes = express.Router();
const upload = multer(multerConfig);

const pokemonController = new PokemonControler();
const typeController = new TypeController();
const weatherController = new WeatherController();

routes.get('/types', typeController.index);
routes.get('/weather', weatherController.index);
routes.post('/create-pokemon', upload.single('image'),pokemonController.create);
routes.get('/pokemons/:id', pokemonController.show);
routes.get('/pokemons', pokemonController.index);
routes.delete('/pokemons/:id', pokemonController.delete);
routes.put('/pokemons/:id', upload.single('image'),pokemonController.update);

export default routes;