import { Router } from 'express'

import PokemonController from './controllers/Pokemon/PokemonController'

const routes = Router()

routes.post('/pokemons', PokemonController.index)

export default routes
