import { Router } from 'express';
import multer from 'multer';

import uploadConfig  from '../../../../../shared/config/upload';

import PokemonsController from '../controllers/PokemonsController';

const pokemonRouter = Router();
const pokemonsController = new PokemonsController();
const upload = multer(uploadConfig);

pokemonRouter.get('/find', pokemonsController.find);

pokemonRouter.post(
    '/import/xlsx',
    upload.single('file'),
    pokemonsController.importPokemonsFromXlsx
)

export default pokemonRouter;
