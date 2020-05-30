var express = require('express'),
    pokemon = require('../controllers/pokemon')
    router = express.Router();


router.get('/', pokemon.list);
// router.get('/', pokemon.create);
router.get('/:id', pokemon.detail);
// router.get('/', pokemon.update);
// router.get('/', pokemon.delete);

module.exports = router;
