import { Router } from 'express';
import PokemonController from './Pokemon.controller';
import multer from 'multer'
const uploadMiddleware = multer({ dest: 'uploads' });
const controller = new PokemonController();
const routes = Router();

routes.post('/', controller.create);
routes.post('/upload', uploadMiddleware.single('file'), controller.upload);
routes.get('/download', controller.download);
routes.get('/length', controller.listLength);
routes.get('/', controller.list);
routes.get('/:_id', controller.listOne);
routes.put('/:_id', controller.update);
routes.delete('/:_id', controller.remove);
routes.post('/remove_many', controller.removeMany);

export default routes;