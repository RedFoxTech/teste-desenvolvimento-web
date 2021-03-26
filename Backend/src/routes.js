import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import TypesController from './app/controllers/TypesController'
import WeatherController from './app/controllers/WeatherController'
import PokemonsController from './app/controllers/PokemonsController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/user', UserController.store)
routes.put('/user', UserController.update)

routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.post('/types', TypesController.store)
routes.get('/types', TypesController.index)
routes.get('/types/:id', TypesController.show)
routes.put('/types/:id', TypesController.update)

routes.post('/weather', WeatherController.store)
routes.get('/weather', WeatherController.index)
routes.get('/weather/:id', WeatherController.show)
routes.put('/weather/:id', WeatherController.update)

routes.post('/pokemon', PokemonsController.store)
routes.get('/pokemon', PokemonsController.index)
routes.get('/pokemon/:id', PokemonsController.show)
routes.put('/pokemon/:id', PokemonsController.update)
routes.delete('/pokemon/:id', PokemonsController.delete)

export default routes
