const { Router } = require('express');
const PokemonController = require('./controllers/PokemonController');

const router = Router();

// Listar pokemons
router.get('/pokemons', PokemonController.index); 

// Cadastrar pokemon
router.post('/pokemons', PokemonController.store); 

// Deletar pokemon
 router.delete('/pokemons/:_id', PokemonController.destroy);

// Editar pokemon
router.put('/pokemons', PokemonController.update);

module.exports = router;