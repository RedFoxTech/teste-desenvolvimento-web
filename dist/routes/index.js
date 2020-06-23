"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("../config/multer"));
var PokemonController_1 = __importDefault(require("../controllers/PokemonController"));
var routes = express_1.Router();
var upload = multer_1.default(multer_2.default);
var pokemonController = new PokemonController_1.default();
routes.get('/pokemons', pokemonController.index);
routes.get('/pokemon/:id', pokemonController.show);
routes.post('/pokemon', upload.single('img_name'), pokemonController.create);
routes.put('/pokemon/:id', upload.single('img_name'), pokemonController.update);
routes.delete('/pokemon/:id', pokemonController.delete);
exports.default = routes;
