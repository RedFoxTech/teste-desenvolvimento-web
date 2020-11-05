import {Router} from 'express'
import PokemonController from './controllers/PokemonController'

const routes = Router()
const pokemonController = new PokemonController()

//padrao controller (index, create, show, update, delete)
routes.get('/pokemon', pokemonController.index)
routes.get('/pokemon/:pokedexNumber', pokemonController.show)
routes.post('/pokemon', pokemonController.create)



export default routes