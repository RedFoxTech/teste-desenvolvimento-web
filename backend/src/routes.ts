import { Router } from 'express'

import PokemonController from './controllers/Pokemon/PokemonController'
import multer from 'multer'
import multerConfig from './config/multer'

const routes = Router()

routes.post('/pokemons', multer(multerConfig).single('img'), PokemonController.store.bind(PokemonController))
routes.get('/pokemons', PokemonController.index)
routes.get('/pokemons:id', PokemonController.index)
routes.put('/pokemons/:id', multer(multerConfig).single('img'), PokemonController.update.bind(PokemonController))
routes.delete('/pokemons/:id', PokemonController.delete)

export default routes
