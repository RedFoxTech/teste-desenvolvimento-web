import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

import PokemonController from '../controllers/PokemonController';

const routes = Router();
const upload = multer(multerConfig);

const pokemonController = new PokemonController();

routes.get('/pokemons', pokemonController.index);
routes.get('/pokemon/:id', pokemonController.show);
routes.post('/pokemon',upload.single('img_name'), pokemonController.create);
routes.put('/pokemon/:id',upload.single('img_name'), pokemonController.update);
routes.delete('/pokemon/:id', pokemonController.delete);


export default routes;
