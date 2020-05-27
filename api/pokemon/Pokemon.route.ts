import { Router } from 'express';
import PokemonController from './Pokemon.controller';
const controller = new PokemonController();
const routes = Router();

routes.post('/', controller.create);
routes.post('/upload', controller.upload);
routes.get('/', controller.list);
routes.get('/:_id', controller.listOne);
routes.put('/:_id', controller.update);
routes.delete('/:_id', controller.remove);
