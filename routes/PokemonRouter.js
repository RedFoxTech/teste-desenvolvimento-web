const express = require('express');
const router = express.Router();

const PokemonController = require('../controllers/PokemonController');

router.get('/', PokemonController.index);
router.post('/', PokemonController.create);
router.get('/:id', PokemonController.show);
router.put('/:id', PokemonController.update);
router.delete('/:id', PokemonController.delete);

module.exports = router;