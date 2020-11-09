import {Router} from 'express'
import multer from 'multer'
import PokemonController from './controllers/PokemonController'
import uploadConfig from './config/upload'


const routes = Router()
const pokemonController = new PokemonController()
const upload = multer(uploadConfig)

//padrao controller (index, create, show, update, delete)
routes.get('/pokemon', pokemonController.index)
routes.get('/pokemon/:pokedexNumber', pokemonController.show)
routes.post('/pokemon', upload.array('image'), pokemonController.create)



export default routes