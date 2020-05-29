import { Router }from 'express'
import PokemonController from './app/controllers/PokemonController'
import AquireableController from './app/controllers/AquireableController'
import EvolutionStageController from './app/controllers/EvolutionStageController'
import GenerationController from './app/controllers/GenerationController'
import HatchableController from './app/controllers/HatchableController'
import LegendaryController from './app/controllers/LegendaryController'
import RaidableController from './app/controllers/RaidableController'
import TypeController from './app/controllers/TypeController'
import WeatherController from './app/controllers/WeatherController'

const routes = new Router()

routes.get('/pokemons', PokemonController.index)
routes.post('/pokemons', PokemonController.store)
routes.put('/pokemons/:id', PokemonController.update)
routes.delete('/pokemons/:id', PokemonController.delete)

routes.get('/aquireables', AquireableController.index)
routes.get('/evolution_stages', EvolutionStageController.index)
routes.get('/generations', GenerationController.index)
routes.get('/hatchables', HatchableController.index)
routes.get('/legendaries', LegendaryController.index)
routes.get('/raidables', RaidableController.index)
routes.get('/types', TypeController.index)
routes.get('/weathers', WeatherController.index)

export default routes