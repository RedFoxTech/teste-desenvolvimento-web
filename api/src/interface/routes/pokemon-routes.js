const { Router } = require("express");
const multer = require("multer");

const { multerConfig } = require("../../drivers/imageStoreSettings/multer");
const pokemonController = require("../adapters/pokemon/PokemonAdapter");
const { authMiddleware } = require("./middlewares/authMiddleware");

const upload = multer(multerConfig);
const pokemonRoutes = Router();

pokemonRoutes.use('/session', authMiddleware);

pokemonRoutes.post('/session/store', upload.single('image'), async (req, res) => await pokemonController.store(req, res));

pokemonRoutes.delete('/session/drop/:id', async (req, res) => await pokemonController.delete(req, res));
pokemonRoutes.delete('/session/dropall', async (req, res) => await pokemonController.deleteAll(req, res));

pokemonRoutes.put('/session/update/:id', async (req, res) => await pokemonController.update(req, res));
pokemonRoutes.put('/session/newimage/:id', upload.single('image'), async (req, res) => await pokemonController.updateImage(req, res));

pokemonRoutes.get('/session/pokemons', async (req, res) => await pokemonController.getAll(req, res));
pokemonRoutes.get('/session/pokemon/:id', async (req, res) => await pokemonController.getOne(req, res));

module.exports = pokemonRoutes;