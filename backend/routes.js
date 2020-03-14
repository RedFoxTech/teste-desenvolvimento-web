const { Router } = require('express');
const PokemonController = require('./controllers/PokemonController');

const router = Router();

router.get('/pokemons', PokemonController.index); 
router.post('/pokemons', PokemonController.store); 

module.exports = router;